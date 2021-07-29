<template>
  <router-view />
  {{ store.me }}
</template>
<script>
import store from 'src/store';

export default {
  setup() {
    return {
      store,
    };
  },
};
</script>

