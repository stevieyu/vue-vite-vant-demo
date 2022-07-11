<template>
  <router-view v-slot="{ Component }">
    <keep-alive include="index">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

