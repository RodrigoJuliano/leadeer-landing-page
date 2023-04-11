<script setup lang="ts">
import { Transition } from 'vue';
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <TheHeader />
  <RouterView v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
  <footer class="site-width">(C) Leadeer 2023 - A fictitious company</footer>
</template>

<style>
@import '@/assets/base.css';

/* nav a.router-link-exact-active {
  color: var(--color-text);
} */

footer {
  font-size: 0.8em;
  text-align: center;
  padding: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button {
  color: white;
  background-color: purple;
  border: none;
  font-size: 0.8em;
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 20px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.144);
  transition: box-shadow 0.2s, transform 0.1s;
}

button:hover {
  background-color: rgb(165, 29, 165);
}

button:active {
  transform: translateY(-3px);
  box-shadow: 3px 3px 8px rgb(0, 0, 0, 0.144);
}
</style>
