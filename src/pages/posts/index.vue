<template>
  <div class="flex justify-between items-center">
    <van-button @click="refresh">
      refresh
    </van-button>
    <van-button url="https://developers.forem.com/api">
      API docs
    </van-button>
  </div>
  <van-list
    v-model:loading="loading"
    :finished="noMore"
    finished-text="没有更多了"
    @load="loadMore"
  >
    <van-card
      @click="$router.push(`/posts/${item.id}`)"
      v-for="item in dataList"
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
          class="mx-px"
          plain
          type="primary"
        >
          {{ tag }}
        </van-tag>
      </template>
    </van-card>
  </van-list>
</template>

<script setup>
import {useLoadMore} from 'vue-request';
import {onUpdated} from 'vue';
import {onBeforeRouteLeave} from 'vue-router';

// onMounted(() => console.log('posts onMounted'));
// onUpdated(() => console.log('posts onUpdated'));

let storeY = 0;
onBeforeRouteLeave(() => {
  storeY = window.scrollY;
});
onUpdated(() => {
  if (storeY > 0 && window.scrollY !== storeY) {
    window.scrollTo(0, storeY);
  }
});

const fetchData = async ({page} = {}) => {
  const _page = page ? page + 1 : 1;
  const url = new URL('https://dev.to/api/articles');
  url.searchParams.append('page', _page);
  // url.searchParams.append('top', 7);

  let data = await (await fetch(url, {
  })).json();

  if (page >=2) data = [];

  return {
    list: data,
    page: _page,
    finished: data.length === 0,
  };
};

const {dataList, loadMore, noMore, loading, refresh} = useLoadMore(fetchData, {
  isNoMore: (d) => {
    return d?.finished === true;
  },
  manual: true,
});
</script>
