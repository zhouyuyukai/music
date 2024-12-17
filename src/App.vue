<template>
    <h2 class="header">任务备忘录</h2>
    <RouterView></RouterView>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>
.header{
  height:50px;
  background:#ED7B30;
  text-align: center;
  line-height:50px;
}
</style>