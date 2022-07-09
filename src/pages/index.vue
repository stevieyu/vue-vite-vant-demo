<template>
  <div
    class="app"
    ref="$el"
  >
    <img
      alt="Vue logo"
      src="/src/assets/logo.png"
    >
    <img
      src="https://picsum.photos/200/300"
      alt=""
    >
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div>
  <img
    v-if="imgsrc"
    :src="imgsrc"
    alt=""
  >
</template>

<script setup>
import {onMounted} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import {html2canvas} from '@/helpers/RemoteLibraries';

const $el = $ref(null);
let imgsrc = $ref(null);
onMounted(() => {
  html2canvas($el).then((res) => {
    imgsrc = res;
  });
});

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  max-width: 100%;
}
</style>
