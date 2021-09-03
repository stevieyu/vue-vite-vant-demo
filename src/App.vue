<template>
  <router-view />
  {{ store.me }}
</template>
<script>
import store from 'src/store';
// import popups from 'src/components/popups';
import popups from 'src/helpers/InstanceDialog';
import Abc from 'src/components/Abc.vue';

export default {
  components: {
  },
  setup() {
    popups(Abc)();

    return {
      store,
    };
  },
};
</script>

