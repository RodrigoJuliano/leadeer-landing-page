<script setup lang="ts">
import { Transition } from 'vue';
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<template>
  <TheHeader />
  <RouterView v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
  <TheFooter />
</template>

<style>
@import '@/assets/base.css';

.site-width {
  /* Apply a padding to limit the content width */
  --max-padding: calc(calc(100% - var(--max-content-width)) / 2);
  --min-padding: 30px;
  --padding: max(var(--max-padding), var(--min-padding));
  padding-left: var(--padding);
  padding-right: var(--padding);
}

@media (max-width: 450px) {
  .site-width {
    --min-padding: 15px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
