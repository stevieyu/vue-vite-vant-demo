<template>
  <router-view />
  <div
    @click="onClick"
    class="text-center"
  >
    {{ store.me }}
  </div>
  <div class="flex justify-around mt-4">
    <van-button
      :to="link"
      :key="name"
      v-for="(link,name) in links"
    >
      {{ name }}
    </van-button>
  </div>
</template>
<script setup>
import store from './store';
// import popups from './components/popups';
import popups from './helpers/InstanceDialog';
import PopupsDemo from './components/PopupsDemo.vue';

const p = popups(PopupsDemo);
const onClick = () => {
  p().then(() => {
    // console.log('then', args, Date.now());
  });
};

const links = {
  home: '/',
  posts: '/posts',
  ffmpeg: '/ffmpeg',
  iframe: '/iframe',
  video: '/playerVideo',
};
</script>

<style>
.max-wh-auto,.max-wh-auto img,.max-wh-auto video{
  max-width: 100% !important;
  height: auto !important;
}
.max-wh-auto iframe{
  max-width: 100% !important;
}
</style>
