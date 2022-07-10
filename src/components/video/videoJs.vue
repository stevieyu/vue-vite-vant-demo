<template>
  <video
    class="video-js vjs-16-9 vjs-big-play-centered"
    ref="videoRef"
    id="video-player"
  />
</template>
<script setup>
import load from '@/helpers/load';
import {onMounted, onBeforeUnmount} from 'vue';

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
});
const videoRef = $ref(null);
let player = null;
const init = () => {
  const {videojs} = window;
  const options = {
    autoplay: false,
    controls: true,
    sources: [
      {
        src: props.src,
        // type: 'application/x-mpegURL',
        type: 'application/dash+xml',
      },
    ],
  };

  player = videojs(videoRef, options, () => {
    player.log('onPlayerReady');
  });
};

onMounted(async () => {
  load([
    'https://cdn.jsdelivr.net/npm/video.js@7.19.2/dist/video-js.min.css',
  ], 'videojscss');
  await load([
    'https://cdn.jsdelivr.net/npm/video.js@7.19.2/dist/video.min.js',
  ], 'videojs');
  load([
    'https://cdn.jsdelivr.net/npm/@videojs/http-streaming@2.14.2/dist/videojs-http-streaming.min.js',
  ], 'videojsother');
  init();
});
onBeforeUnmount(() => {
  if (player) {
    try {
      player.dispose();
    } catch (e) {
      //
    }
    player = null;
  }
});

</script>
