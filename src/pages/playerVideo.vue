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
import wasmPlayer from 'src/components/video/GoldPlay.vue';
import {useRoute} from 'vue-router';
export default {
  components: {wasmPlayer},
  setup() {
    const route = useRoute();
    return {
      src: route.query.s || 'https://ayurvedachina.com/aly/61bc422b995a2216e8fa4ad6baf45b2ecca6e82d.mp4',
    };
  },
};
</script>
