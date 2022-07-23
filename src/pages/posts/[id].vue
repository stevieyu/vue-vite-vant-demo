<template>
  <VanLoad :path="`/articles/${id}`">
    <template #default="{item}">
      <van-image
        v-if="item.cover_image"
        :src="item.cover_image"
      />
      <h1 class="p-1">
        {{ item.title }}
      </h1>
      <div
        v-html="item.body_html"
        class="max-wh-auto p-1"
      />
    </template>
  </VanLoad>
</template>

<script setup>
import config from '@/features/cqrs/config';
import VanLoad from '@/features/cqrs/components/VanLoad.vue';
defineProps({
  id: {
    type: [Number, String],
    required: true,
  },
});
config.origin = 'https://dev.to/api';
</script>
