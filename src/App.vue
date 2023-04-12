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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
