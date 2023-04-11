<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps<{
  text: string;
  to: string;
  isActive: boolean;
}>();
</script>

<template>
  <RouterLink v-bind="$props" custom v-slot="{ navigate, href }">
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      :class="[{ 'link-active': isActive }, 'app-link']"
    >
      {{ text }}
    </a>
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

a + a {
  margin-left: 8px;
}
</style>
