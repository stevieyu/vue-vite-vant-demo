<template>
  <div v-if="item">
    <van-image :src="!item.cover_image?'': item.cover_image" />
    <div>{{ item.title }}</div>
    <div
      v-html="item.body_html"
      class="img-auto"
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
