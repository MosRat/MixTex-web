<template>
  <LoadingScreen  :loading="!ready" imageUrl="/icon.png"/>
  <div class="container" v-if="ready">
    <div class="card">
      <img class="logo" src="/icon.png"></img>
      <div class="info">
        <a href="https://mineai.top/">作者网页版</a>
        <a href="https://github.com/RQLuo/MixTeX-Latex-OCR/">Github仓库</a>
        <a href="https://huggingface.co/MixTex/ZhEn-Latex-OCR">HuggingFace</a>
        <a href="https://github.com/MosRat/MixTex-rs-GUI">Tauri 客户端</a>
      </div>
    </div>
    <div class="input">
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
  <div class="control">
    <button :disabled="!ready||running" @click="handleInfer" >{{ !  running? "Decode!":"Running..." }}</button>
    <button :disabled="!ready||running" @click="handleClear" >{{ !running? "Clear":"Running..." }}</button>
    <button :disabled="!ready||running" @click="handleCopy" >{{ !running? "Copy":"Running..." }}</button>
  </div>
    </div>
    <textarea ref="codeRef" class="latex-code"  v-model="code_content" :readonly="running"></textarea>
    <div ref="latexRef" class="latex-code" id="latex">{{code_content}}</div>
  </div>
</template>

<script setup lang="ts">
import {nextTick, onMounted, ref, watch} from 'vue';
import LoadingScreen from "@/components/LoadingScreen.vue";
import renderMathInElement from 'katex/dist/contrib/auto-render.mjs';

const imageUrl = ref<string | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);
const img = ref<HTMLImageElement | null>(null);
const codeRef = ref<HTMLTextAreaElement | null>(null);
const latexRef = ref<HTMLDivElement | null>(null);

const code_content = ref<string>("");
const running = ref<boolean>(false);
const ready = ref<boolean>(false);

const scrollToBottom = () => {
  if (codeRef.value) {
    codeRef.value.scrollTop = codeRef.value.scrollHeight;
  }
  if (latexRef.value) {
    latexRef.value.scrollTop = latexRef.value.scrollHeight;
  }
};

watch(code_content, () => {
  nextTick(() => {
    if (latexRef.value) {
      renderMathInElement(latexRef.value, {});
    }
    scrollToBottom()
  });
}, {immediate: true});

const infer_worker = new Worker( new URL('../infer.ts', import.meta.url), { type: 'module' });
infer_worker.onerror = (e) => {
  console.error(e);
}
infer_worker.onmessageerror = (e) => {
  console.error(e);
}
// infer_worker.onmessage = (event: MessageEvent) => {
//   if (event.data && event.data.type==="msg") {
//     console.log(event.data.data.msg);
//   }
// }

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
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
      infer_worker.postMessage({
        type:"img",
        data:{
          img:float32Array,
        }
      })
      // input_tensor.value = new ort.Tensor("float32",float32Array,[1,3,448,448]);
      // console.log(input_tensor.value);
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

const handleInfer = async () => {
  infer_worker.onmessage = event => {
    if (event.data.type==="result") {
      code_content.value += event.data.token;
    }else if (event.data.type==="complete") {
      running.value = false;
    }else if (event.data.type==="error") {
      console.error(event.data.error);
    }
  }
  console.log(infer_worker)
  running.value = true
  infer_worker.postMessage({
    type:"infer",
    data:{

    }
  })
}

const handleClear = ()=>{
  code_content.value = "";
}

const handleCopy = ()=>{
   codeRef.value.select();
   document.execCommand('copy');
   window.alert("Code copied!")
}


onMounted(async () => {
  // await loadModel()
  // await loadTokenizer()
  infer_worker.postMessage({
    type:"init",
    data:{

    }
  })
  infer_worker.onmessage = event => {
    if (event.data.type==="ready") {
      ready.value = true;
    }
  }
  console.log(infer_worker)
})
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.card{
  margin-block: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logo{
  max-width: 21vw;
  max-height: 21vw;
}

.info{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.input{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.image-uploader {
  width: 45vw;
  height: 30vh;
  border: 2px dashed #ccc;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  margin-block: 15px;
  margin-right: 20px;
}

.upload-placeholder {
  text-align: center;
  color: rgba(46, 46, 46, 0.65);
}

.preview-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.control{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.control button{
  margin: 10px;
  min-height: 7vh;
  min-width: 7vw;
  text-align: center;
  color: inherit;
  background: linear-gradient(rgba(33, 32, 28, 0.2), rgba(26, 25, 21, 0.2));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 0.5px solid #ccc;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.control button:hover{
  filter: drop-shadow(0 0 1em #b96f04);

}

.latex-code{
  background: rgba(152, 150, 150, 0.58);
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 60vw;
  height: 30vh;
  overflow: hidden scroll;
  resize: none;
  color: inherit;
  margin-bottom: 10px;
  padding: 1em;
}
#latex{
  text-align: left;
  font-size: 0.9em;
  font-family: "Times New Roman", Times, serif;
}

input:focus,
textarea:focus {
  outline: none; /* 移除默认的聚焦样式 */
  box-shadow: none; /* 移除可能存在的阴影效果 */
}
</style>