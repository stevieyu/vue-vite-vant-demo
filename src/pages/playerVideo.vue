<template>
  <div
    class="relative"
    style="padding-bottom: 56%"
  >
    <wasm-player
      :src="src"
      class="absolute inset-0"
    />
  </div>
</template>

<script>
// import wasmPlayer from 'src/components/video/EasyWasmPlayer.vue';
// import wasmPlayer from 'src/components/video/GoldPlay.vue';
// import wasmPlayer from 'src/components/video/AliPlayer.vue';
// import wasmPlayer from '@/components/video/dPlayer.vue';
import wasmPlayer from '@/components/video/videoJs.vue';
import {useRoute} from 'vue-router';
export default {
  components: {wasmPlayer},
  setup() {
    const src = 'https://d2zihajmogu5jn.cloudfront.net/fmp4-muxed-no-playlist-codecs/index.m3u8';
    // const src = 'http://yzm629.wicp.net/m3u8/bbb_sunflower_720p_h265.m3u8';
    const route = useRoute();
    return {
      src: route.query.s || src,
    };
  },
};
</script>
