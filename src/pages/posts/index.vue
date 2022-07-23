<template>
  <div class="flex justify-between items-center">
    <van-button url="https://developers.forem.com/api">
      API docs
    </van-button>
  </div>
  <ListLoadMore
    path="https://dev.to/api/articles"
    :search="search"
  >
    <template #default="{list}">
      <van-card
        @click="$router.push(`/posts/${item.id}`)"
        v-for="item in list"
        :key="item.title"
        :desc="item.description"
        :title="item.title"
      >
        <template #thumb>
          <van-image
            width="5.5rem"
            height="5.5rem"
            fit="cover"
            :src="!item.cover_image?'': item.cover_image"
          />
        </template>
        <template #tags>
          <van-tag
            v-for="tag in item.tag_list"
            :key="tag"
            class="m-px"
            plain
            type="primary"
          >
            {{ tag }}
          </van-tag>
        </template>
      </van-card>
    </template>
  </ListLoadMore>
</template>

<script setup>
import ListLoadMore from '@/features/cqrs/components/VanListLoadMore.vue';
const search = $ref({
  top: 7,
});
</script>
