<template>
  <div>404 for path {{ any.join('/') }}</div>
</template>

<script setup>
defineProps({
  any: {
    type: Array,
    default: () => ([]),
  },
});
</script>
