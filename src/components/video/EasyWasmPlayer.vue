<template>
  <div class="w-full h-full">
    <div :id="id" />
  </div>
</template>

<script>
import load from 'src/helpers/load';
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      id: '',
    };
  },
  mounted() {
    this.id = `ewp-${Date.now()}`;
    this.init(this.src);
  },
  methods: {
    async init(url) {
      await load(['https://cdn.jsdelivr.net/npm/@easydarwin/easywasmplayer@4.0.13/EasyWasmPlayer.min.js'], 'EasyWasmPlayer');
      const {WasmPlayer} = window;

      const player = new WasmPlayer(null, this.id, () => {
        // console.log('call', e)
      }, {
        cbUserPtr: window,
        decodeType: 'auto',
        openAudio: true,
        BigPlay: false,
        Height: true,
      });
      player.play(url, 1);
    },
  },
};
</script>

