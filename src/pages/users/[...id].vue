<template>
  <div>{{ id }}</div>
  <van-button @click="$router.push('/users/1')">
    one
  </van-button>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    default: '',
  },
});
</script>
