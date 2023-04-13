<template>
  <a class="button-base">
    <slot></slot>
  </a>
</template>

<style scoped>
@import url('@/assets/button-base.css');

a {
  display: inline-block;
  line-height: 0;
  padding: 15px;
  margin: 10px;
  border-radius: 50%;
}
</style>
