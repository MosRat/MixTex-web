<template>
  <div
      class="image-uploader"
      @click="triggerFileInput"
      @dragover.prevent
      @drop.prevent="handleDrop"
      @paste="handlePaste"
      tabindex="0"
  >
    <input
        type="file"
        accept="image/*"
        @change="handleFileChange"
        ref="fileInput"
        style="display: none"
    />
    <div v-if="!imageUrl" class="upload-placeholder">
      <p>点击、拖拽或粘贴(Ctrl+V)上传图片</p>
    </div>
    <img v-else ref="img" :src="imageUrl" @load="handleImageLoad" alt="Uploaded image" class="preview-image" />
  </div>
  <button @click="infer">Load models</button>

</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import * as ort from 'onnxruntime-web';
import {TypedTensor} from "onnxruntime-web";
import {Tokenizer} from "tokenizers";

const imageUrl = ref<string | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);
const img = ref<HTMLImageElement | null>(null);
const encoder_session = ref<ort.InferenceSession | null>(null);
const decoder_session = ref<ort.InferenceSession | null>(null);
const input_tensor =  ref<ort.TypedTensor<"float32"> | null>(null);

const tokenizer = ref<Tokenizer|null>(null);


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
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




const processFile = (file: File) => {
  const reader = new FileReader();
  reader.onload = (e: ProgressEvent<FileReader>) => {
    imageUrl.value = e.target?.result as string;
    const image = new Image();
    image.src = e.target?.result as string;

    image.onload = async () => {
      const canvas = document.createElement('canvas');
      canvas.width = 448;
      canvas.height = 448;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
         throw new Error("Failed to get 2D context");
      }

      ctx.drawImage(image, 0, 0, 448, 448);

      const imageData = ctx.getImageData(0, 0, 448, 448);
      const data = imageData.data;

      const channel_size = 448*448
      const float32Array = new Float32Array( channel_size * 3);

      const rescale_factor = 0.00392156862745098;

      for (let i = 0; i < data.length; i += 4) {
        const index = (i / 4);
        float32Array[channel_size*0 + index] = data[i]*rescale_factor -0.5 / 0.5;     // R
        float32Array[channel_size*1 + index] = data[i + 1]*rescale_factor -0.5 / 0.5; // G
        float32Array[channel_size*2 + index] = data[i + 2]*rescale_factor -0.5 / 0.5; // B
      }

      input_tensor.value = new ort.Tensor("float32",float32Array,[1,3,448,448]);
      console.log(input_tensor.value);
    };

    image.onerror = (error) => {
      throw error;
    };
  };
  reader.readAsDataURL(file);
};

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    processFile(file);
  }
};

const handleDrop = (event: DragEvent) => {
  const file = event.dataTransfer?.files[0];
  if (file) {
    processFile(file);
  }
};

const handlePaste = (event: ClipboardEvent) => {
  const items = event.clipboardData?.items;
  if (items) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const file = items[i].getAsFile();
        if (file) {
          processFile(file);
          break;
        }
      }
    }
  }
};

const triggerFileInput = () => {
  fileInput.value?.click();
};

const handleImageLoad = async () => {
  // const resizedTensor = await ort.Tensor.fromImage(img.value,{dataType:"float32",norm:{bias:0.5/0.00392156862745098,mean:0.5/0.00392156862745098},resizedWidth: 448, resizedHeight: 448}) as ort.TypedTensor<"float32">;
  // const convertTensor = await ort.Tensor.fromImage(resizedTensor.toImageData(),{dataType:"float32",tensorFormat:"RGB"}) as ort.TypedTensor<"float32">;
  // console.log(convertTensor.data);
  // console.log(resizedTensor.data);
  // console.log(convertTensor.getData());
  // console.log(await ort.Tensor.fromImage(img.value))
  // input_tensor.value = convertTensor;
}

const fetchModel = async (path:string) =>{
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const model = await response.arrayBuffer();
    console.log('ONNX model loaded successfully');
    return model
  } catch (error) {
    console.error('Failed to load ONNX model:', error);
  }
}

const loadModel = async () => {
  encoder_session.value = await ort.InferenceSession.create(await fetchModel('/encoder_model.onnx'))
  decoder_session.value = await ort.InferenceSession.create(await fetchModel('/decoder_model_merged.onnx'))
  console.log(encoder_session.value,decoder_session.value)
}

const infer = async () => {
  const encode = await encoder_session.value.run({"pixel_values":input_tensor.value});
  console.log(encode['last_hidden_state'])
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
    const decoder_outputs = await decoder_session.value.run(decoder_inputs);

    const next_token_idx = argmax(decoder_outputs['logits'].data as  Float32Array,30002)
    console.log(next_token_idx);


    decoder_inputs['past_key_values.0.key']=decoder_outputs['present.0.key'] as TypedTensor<"float32">
    decoder_inputs['past_key_values.0.value']=decoder_outputs['present.0.value'] as TypedTensor<"float32">
    decoder_inputs['past_key_values.1.key']=decoder_outputs['present.value.key'] as TypedTensor<"float32">
    decoder_inputs['past_key_values.1.value']=decoder_outputs['present.1.value'] as TypedTensor<"float32">
    decoder_inputs['past_key_values.2.key']=decoder_outputs['present.2.key'] as TypedTensor<"float32">
    decoder_inputs['past_key_values.2.value']=decoder_outputs['present.2.value'] as TypedTensor<"float32">
    break
  }
}

onMounted(async () => {
  await loadModel()
  const tokenizer_json = await fetch('/tokenizer.json')
  tokenizer.value = Tokenizer.fromString(await tokenizer_json.text())
})
</script>

<style scoped>
.image-uploader {
  width: 300px;
  height: 200px;
  border: 2px dashed #ccc;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
}

.upload-placeholder {
  text-align: center;
  color: #888;
}

.preview-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>