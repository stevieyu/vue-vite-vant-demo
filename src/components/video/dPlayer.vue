<template>
  <div id="dplayer" />
</template>
<script setup>
import load from '@/helpers/load';
import {onMounted} from 'vue';

const init = () => {
  const source = 'https://vod.jiakao520.com/952212fe21794b24a6bd07978847c694/f3fae177b4ba6ec90ed3e426a93da2f6-4k-nbv1-encrypt-stream.m3u8?MtsHlsUriToken=WnNqa1VhNW5PKldeTiZrMk1qem9nbHpIWlVUSkE2NDJaZ0dITUoxc1psVDJJMjQtTS0yWmtORGcyTURrellUZGlPVE05VFhOVWExbGhNVzVPS25wZVNTWXlNazVxZW05SmJERklUVlZVU2pBMmVUSk9aM3BJUVVwNWMwNXNWREpqTWpFdFVDMVVSWGROUkRBNVRVRlBNRTh3VDA4d1R6QlA=';

  const {DPlayer} = window;
  return new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
      url: source,
      type: 'hls',
    },
  });
};

onMounted(async () => {
  await load([
    'https://cdn.jsdelivr.net/npm/hls.js@1.1.5/dist/hls.min.js',
    'https://cdn.jsdelivr.net/npm/dplayer@1.26.0/dist/DPlayer.min.js',
  ], 'DPlayer');

  init();
});

</script>
