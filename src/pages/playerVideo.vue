<template>
  <wasm-player
    :src="src"
    class="absolute inset-0"
  />
</template>

<script>
// import wasmPlayer from '@/components/video/EasyWasmPlayer.vue';
// import wasmPlayer from '@/components/video/GoldPlay.vue';
// import wasmPlayer from '@/components/video/AliPlayer.vue';
// import wasmPlayer from '@/components/video/dPlayer.vue';
import wasmPlayer from '@/components/video/videoJs.vue';
import {useRoute} from 'vue-router';
export default {
  components: {wasmPlayer},
  setup() {
    // https://videojs-http-streaming.netlify.app/
    const src = 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd';
    // const src = 'https://d2zihajmogu5jn.cloudfront.net/fmp4-muxed-no-playlist-codecs/index.m3u8';
    // const src = 'http://yzm629.wicp.net/m3u8/bbb_sunflower_720p_h265.m3u8';
    const route = useRoute();
    return {
      src: route.query.s || src,
    };
  },
};
</script>
