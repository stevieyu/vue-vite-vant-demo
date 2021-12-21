<template>
  <div />
</template>

<script>
import load from '../../helpers/load';

export default {
  props: {
    src: {
      type: String,
      default: '',
    },
  },
  data() {
    return {

    };
  },
  mounted() {
    this.init(this.src);
  },
  methods: {
    async init(src) {
      await load([
        'https://cdn.jsdelivr.net/npm/goldvideo-player@1.0.2/dist/goldplay-h265-sdk.min.js',
        'https://cdn.jsdelivr.net/npm/goldvideo-player@1.0.2/dist/goldplay-h265.css',
      ], 'goldplay');
      const {GoldPlay} = window;

      const options = {
        sourceURL: src,
        libPath: 'https://cdn.jsdelivr.net/gh/goldvideo/h265player/dist/lib/',
        height: getComputedStyle(this.$el).height.replace('px', ''),
      };

      this._player = new GoldPlay(this.$el, options);
    },
  },
};
</script>

