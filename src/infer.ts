import * as ort from 'onnxruntime-web/webgpu';
import {TypedTensor} from "onnxruntime-web/webgpu";
import { PreTrainedTokenizer } from '@xenova/transformers';

let input_tensor:TypedTensor<"float32">|null  = null
let encoder_session:ort.InferenceSession|null = null;
let decoder_session:ort.InferenceSession|null = null;
let tokenizer:PreTrainedTokenizer|null = null;


const info = (msg:any)=>{
  self.postMessage({
          type:"msg",
          data:{
            msg
          }
        })
}


function argmax(array: Float32Array, count: number): number {
  if (count > array.length) {
    throw new Error("The count of elements to select exceeds the array length.");
  }

  // 取出最后 count 个元素
  const lastElements = array.slice(-count);

  // 初始化变量以跟踪最大值和对应的索引
  let maxIndex = 0;
  let maxValue = lastElements[0];

  // 遍历数组找到最大值的索引
  for (let i = 1; i < lastElements.length; i++) {
    if (lastElements[i] > maxValue) {
      maxValue = lastElements[i];
      maxIndex = i;
    }
  }

  return maxIndex;
}

const infer = async (
    input_tensor:TypedTensor<"float32">,
    encoder_session:ort.InferenceSession,
    decoder_session:ort.InferenceSession,
    tokenizer:PreTrainedTokenizer
) => {
  const encode = await encoder_session.run({"pixel_values":input_tensor});
  info(encode['last_hidden_state'])
  let decoder_inputs = {
    "input_ids": new ort.Tensor("int64",[0,0,30000],[1,3]),
      "encoder_hidden_states": encode['last_hidden_state'],
      'past_key_values.0.key': new ort.Tensor("float32",[],[1, 12, 0, 64]),
      'past_key_values.0.value': new ort.Tensor("float32",[],[1, 12, 0, 64]),
      'past_key_values.1.key': new ort.Tensor("float32",[],[1, 12, 0, 64]),
      'past_key_values.1.value': new ort.Tensor("float32",[],[1, 12, 0, 64]),
      'past_key_values.2.key': new ort.Tensor("float32",[],[1, 12, 0, 64]),
      'past_key_values.2.value': new ort.Tensor("float32",[],[1, 12, 0, 64]),
  }
  for (let i = 0; i < 512; i++) {
    const decoder_outputs = await decoder_session.run(decoder_inputs);

    const next_token_idx = argmax(decoder_outputs['logits'].data as  Float32Array,30002)
    if (next_token_idx===30000){
      self.postMessage({
      type:"complete",
    });
      break
    }
    const token  = tokenizer.decode([next_token_idx]);
    // code_content.value+=token
    self.postMessage({
      type:"result",
      token
    });


    decoder_inputs["input_ids"] = new ort.Tensor("int64",[next_token_idx],[1,1]) as TypedTensor<"int64">
    decoder_inputs['past_key_values.0.key']=decoder_outputs['present.0.key'] as TypedTensor<"float32">
    decoder_inputs['past_key_values.0.value']=decoder_outputs['present.0.value'] as TypedTensor<"float32">
    decoder_inputs['past_key_values.1.key']=decoder_outputs['present.1.key'] as TypedTensor<"float32">
    decoder_inputs['past_key_values.1.value']=decoder_outputs['present.1.value'] as TypedTensor<"float32">
    decoder_inputs['past_key_values.2.key']=decoder_outputs['present.2.key'] as TypedTensor<"float32">
    decoder_inputs['past_key_values.2.value']=decoder_outputs['present.2.value'] as TypedTensor<"float32">
  }
}

const fetchModel = async (path:string) =>{
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const model = await response.arrayBuffer();
    info('ONNX model loaded successfully');
    return model
  } catch (error) {
    console.error('Failed to load ONNX model:', error);
  }
}

const loadModel = async () => {
  encoder_session = await ort.InferenceSession.create(
      await fetchModel('/models/encoder_model.onnx'),
      // {executionProviders: ['webgpu']}
  )
  decoder_session = await ort.InferenceSession.create(
      await fetchModel('/models/decoder_model_merged.onnx'),
      // {executionProviders: ['webgpu']}
  )
  // info(encoder_session)
  // info(decoder_session)
}

const loadTokenizer = async () => {
  const tokenizer_json = await (await fetch('/models/tokenizer.json')).json()
  tokenizer = new PreTrainedTokenizer(tokenizer_json,{})
}



self.onmessage = async function(event: MessageEvent) {

    const {type,data} = event.data;
    if (type==="init"){
        await loadModel()
        await loadTokenizer();
        info("load model and tokenizer complete!")
        self.postMessage({
          type:"ready",
          data:{

          },
        })
    } else if (type==="img"){
        const arr = data.img
        input_tensor = new ort.Tensor("float32",arr,[1,3,448,448]);
    }else if (type === "infer"){
      await infer(input_tensor,encoder_session,decoder_session,tokenizer);
    }
    // 执行计算密集型操作
    // await infer(data.input_tensor,data.decoder_session,data.encoder_session,data.tokenizer);
    // 发送结果回主线程
};