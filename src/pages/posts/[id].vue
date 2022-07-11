<template>
  <div v-if="item">
    <van-image :src="!item.cover_image?'': item.cover_image" />
    <h1 class="p-1">
      {{ item.title }}
    </h1>
    <div
      v-html="item.body_html"
      class="max-wh-auto p-1"
    />
  </div>
</template>

<script setup>
import {useRequest} from 'vue-request';

const props = defineProps({
  id: {
    type: [Number, String],
    required: true,
  },
});

const id = $computed(() => +props.id);

const fetchData = async () => {
  const url = new URL(`https://dev.to/api/articles/${id}`);

  return await (await fetch(url, {
  })).json();
};

const {data: item} = useRequest(fetchData, {
  cacheKey: () => {
    return `show-${id}`;
  },
});

</script>
