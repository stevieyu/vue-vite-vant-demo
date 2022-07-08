<template>
  <video
    class="video-js vjs-16-9 vjs-default-skin vjs-big-play-centered"
    id="video-player"
  />
</template>
<script setup>
import load from '@/helpers/load';
import {onMounted} from 'vue';

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
});

const init = () => {
  const {videojs} = window;
  const options = {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: props.src,
        type: 'application/x-mpegURL',
      },
    ],
  };

  const player = videojs('video-player', options, () => {
    player.log('onPlayerReady');
  });
};

onMounted(async () => {
  await load([
    'https://cdn.jsdelivr.net/npm/video.js@7.19.2/dist/video.min.js',
  ], 'videojs');
  load([
    'https://cdn.jsdelivr.net/npm/@videojs/http-streaming@2.14.2/dist/videojs-http-streaming.min.js',
    'https://cdn.jsdelivr.net/npm/video.js@7.19.2/dist/video-js.min.css',
  ], 'videojsother');
  init();
});

</script>
