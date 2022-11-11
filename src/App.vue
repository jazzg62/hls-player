<template>
  <div class="page">
    <div class="flex">
      <label for="src">请输入视频链接</label>
      <input type="text" id="src" name="src" v-model="src">
      <button @click="start">播放</button>
    </div>
    <br>
    <video controls id="video" autoplay="autoplay">
        <source type="video/mp4">
    </video>
</div>
</template>

<script>
import HLS from 'hls.js';
let hls = new HLS();

export default {
  name: 'App',
  data:function(){
    return {
      src:''
    }
  },
  methods:{
    start(){
      if (HLS.isSupported()) {
        var video = document.getElementById('video');
        hls.attachMedia(video);
        hls.loadSource(this.src);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex{
  display: flex;
  flex-direction: row;
}
</style>
