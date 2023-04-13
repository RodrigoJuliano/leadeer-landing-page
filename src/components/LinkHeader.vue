<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
  // Passing text as prop to avoid unecessary rerenders (using prop stability)
  text: string;
  to: string;
}>();
</script>

<template>
  <RouterLink :to="to" class="link-header">
    {{ text }}
  </RouterLink>
</template>

<style scoped>
a {
  padding: 5px 2px;
  color: inherit;
  /* font-size: 1em; */
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid transparent;
}

a:hover,
a.link-active {
  border-color: currentColor;
}
</style>
