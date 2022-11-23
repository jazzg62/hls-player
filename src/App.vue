<template>
  <div class="page">
    <div class="center">
      <div class="flex">
        <label for="src">请输入视频链接</label>
        <input type="text" id="src" name="src" v-model="src">
        <button @click="start">播放</button>
      </div>
      <br>
      <video controls id="video" autoplay="autoplay" style="max-width:100%;">
          <source type="video/mp4">
      </video>
    </div>
    <ul v-if="list.length">
      <li v-for="item,index in list" :key="item.url" @click="play(index)">
        {{item.a}}
      </li>
    </ul>
</div>
</template>

<script>
import HLS from 'hls.js';
import adult from './assets/adult.json';

let hls = new HLS();

function getQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r!=null) return r[2]; return '';
}

export default {
  name: 'App',
  data:function(){
    return {
      src:'',
      list:[]
    }
  },
  created(){
    let type = getQueryString('type');
    if(type == 'adult'){
      this.list = adult;
    }
  },
  methods:{
    start(){
      let video = document.getElementById('video');
      hls.attachMedia(video);
      hls.loadSource(this.src);
    },
    play(index){
      // this.src = this.list[index]['url'];
      location.href= this.list[index]['url'];
    }
  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.flex{
  display: flex;
  flex-direction: row;
}

.center{
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  box-sizing: border-box;
}
</style>
