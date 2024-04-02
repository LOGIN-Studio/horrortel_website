<template>
  <div class="home">
    <video class="background-video" autoplay loop muted>
      <source src="@/assets/videos/test.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="content">
      <div class="title">Horrotel</div>
      <button @click="showAlert">Download</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const showAlert = () => {
  alert('The game is still in production and there is no download link at this time.');
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .background-video {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  .content {
    text-align: center;
    color: white;
    margin-bottom: -35vh;
    z-index: 2;

    .title {
      font-size: 5rem;
      background-color: rgba(0, 0, 0, 0.3); /* 半透明灰色背景 */
      padding: 10px 20px;
      border-radius: 5px;
    }

    button {
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #ff3333;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 2rem;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #cc0000;
      }
    }
  }
}
</style>
