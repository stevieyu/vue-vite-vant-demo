<template>
  <router-view />
  <div
    @click="onClick"
    class="text-center"
  >
    {{ store.me }}
  </div>
</template>
<script>
import store from 'src/store';
// import popups from 'src/components/popups';
import popups from 'src/helpers/InstanceDialog';
import PopupsDemo from 'src/components/PopupsDemo.vue';

export default {
  components: {
  },
  setup() {
    const p = popups(PopupsDemo);
    const onClick = () => {
      p().then(() => {
        // console.log('then', args, Date.now());
      });
    };
    // onClick();

    return {
      onClick,
      store,
    };
  },
};
</script>

