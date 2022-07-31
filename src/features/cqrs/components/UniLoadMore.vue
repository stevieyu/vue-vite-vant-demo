<template>
  <slot :list="dataList" />
  <uni-load-more
    :status="moreStatus"
    @click-load-more="loadMore"
    v-if="!error"
  />
</template>
<script setup>
import {useLoadMore} from 'vue-request';
import {onReachBottom} from '@dcloudio/uni-app';
import request from '../query';
import refreshEventBus from '../refreshEventBus';

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  search: {
    type: Object,
    default: () => ({}),
  },
  map: {
    type: Function,
    default: null,
  },
});

const fetchData = async (ctx) => {
  const {path, search, map} = props;
  let {page} = ctx || {};

  page = page ? page + 1 : 1;
  let list = await request(path, {page, ...search});
  if (map) list = list.map(map);
  return {
    list,
    page,
  };
};

const refreshDeps = [];
if (props.search) refreshDeps.push(props.search);

const {dataList, refresh, loadMore, noMore, loading, error} = useLoadMore(fetchData, {
  refreshDeps,
  refreshDepsAction: () => onRefresh(),
  isNoMore: (d) => {
    return d?.list?.length % 10 > 0;
  },
  manual: false,
});

const onRefresh = () => {
  refresh();
};
refreshEventBus.on(onRefresh);

onReachBottom(() => loadMore());

const moreStatus = $computed(() => {
  const arr = `more/loading/noMore`.split('/');
  if (noMore.value) return arr[2];
  if (loading.value) return arr[1];
  return arr[0];
});
</script>
