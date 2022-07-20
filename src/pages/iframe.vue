<template>
  <iframe
    :src="route.query.s || `http://vue-wechat-title.deboy.cn`"
    class="border-0 w-full h-screen"
  />
</template>
<script setup>
import {useRoute} from 'vue-router';

const route = useRoute();
</script>
