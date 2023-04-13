<template>
  <button class="app-button button-base">
    <slot></slot>
  </button>
</template>

<style scoped>
@import url('@/assets/button-base.css');

button {
  font-size: 0.8em;
  font-family: inherit;
  font-weight: 500;
  border-radius: 10px;
  padding: 10px 20px;
}
</style>
