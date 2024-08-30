<template>
  <div class="loading-screen" :class="{ 'loaded': !loading }">
    <div class="img-wrapper">
      <img :src="imageUrl" alt="Loading" class="loading-image">
      <p class="loading-text">Loading Models...</p>
    </div>

  </div>
</template>

<script setup>

const props = defineProps({
  loading: {
    type: Boolean,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
})

</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(116, 116, 116, 0.44);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 1;
  transition: opacity 1s ease-in-out;
}

.loading-screen.loaded {
  opacity: 0;
  pointer-events: none;
}

.loading-bar {
  width: 0;
  height: 4px;
  background-color: #4CAF50;
  transition: width 1s ease-in-out;
}
.loading-text{
  font-size: 24px;
  font-family: Times, serif;
  color: black;
  //animation: slide-in 10s linear infinite;
  text-align: center;
  margin-top: 20px;
}

.img-wrapper {
  display: inline-block;
  overflow: hidden;
  animation: wrapper-gradient 10s linear infinite;
  opacity: 0;
}
@keyframes wrapper-gradient {
  0% {
    opacity: 0.2;
    //transform: translateX(100%);
  }
  25% {
    opacity: 1;
    //transform: translateX(0);
  }
  50% {
    opacity: 0.2;
    //transform: translateX(-100%);
  }
  75% {
    opacity: 1;
    //transform: translateX(0);
  }
  100% {
    opacity: 0.2;
    //transform: translateX(100%);
  }
}

.loading-image {
  max-width: 60vw;
  max-height: 20vh;
  margin-top: 20px;
  //animation: slide-in 10s linear infinite;
}

@keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
