<template>
  <div @click="$emit('close', 'abc')">
    abc
  </div>
</template>

<script>
export default {
  emits: ['close'],
};
</script>
