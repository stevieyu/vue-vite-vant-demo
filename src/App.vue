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
import store from 'src/store';
// import popups from 'src/components/popups';
import popups from 'src/helpers/InstanceDialog';
import PopupsDemo from 'src/components/PopupsDemo.vue';

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
  video: '/playerVideo',
};
</script>

<style>
.img-auto{
  max-width: 100%;
  height: auto !important;
}
</style>
