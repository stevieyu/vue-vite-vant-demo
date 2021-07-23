<template>
  <router-view />
  {{ store.me }}
</template>
<script>
import store from './store';

export default {
  setup() {
    return {
      store,
    };
  },
};
</script>

