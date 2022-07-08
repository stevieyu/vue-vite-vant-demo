<template>
  <div id="J_prismPlayer" />
</template>
<script setup>
import load from '@/helpers/load';
import {onMounted} from 'vue';

const init = () => {
  const source = 'https://vod.jiakao520.com/952212fe21794b24a6bd07978847c694/f3fae177b4ba6ec90ed3e426a93da2f6-4k-nbv1-encrypt-stream.m3u8?MtsHlsUriToken=WnNqa1VhNW5PKldeTiZrMk1qem9nbHpIWlVUSkE2NDJaZ0dITUoxc1psVDJJMjQtTS0yWmtORGcyTURrellUZGlPVE05VFhOVWExbGhNVzVPS25wZVNTWXlNazVxZW05SmJERklUVlZVU2pBMmVUSk9aM3BJUVVwNWMwNXNWREpqTWpFdFVDMVVSWGROUkRBNVRVRlBNRTh3VDA4d1R6QlA=';

  const {Aliplayer} = window;
  return new Aliplayer({
    id: 'J_prismPlayer',
    width: '100%',
    source,
  });
};

onMounted(async () => {
  await load([
    'https://g.alicdn.com/de/prismplayer/2.9.22/aliplayer-h5-min.js',
  ], 'aliplayerjs');
  await load([
    'https://g.alicdn.com/de/prismplayer/2.9.22/skins/default/aliplayer-min.css',
  ], 'aliplayercss');

  init();
});

</script>
