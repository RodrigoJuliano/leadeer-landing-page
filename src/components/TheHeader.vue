<script setup lang="ts">
import { ref } from 'vue';
import { useMediaQuery } from '@vueuse/core';
import IconLeadeer from './icons/IconLeadeer.vue';
import TheHeaderNav from './TheHeaderNav.vue';
import IconToggleMenu from './icons/IconToggleMenu.vue';

const menuOpen = ref(false);
const smallScreen = useMediaQuery('(max-width: 700px)');
</script>

<template>
  <header class="site-width">
    <a href="." class="container-logo">
      <IconLeadeer height="2em" />
      <span>Leadeer</span>
    </a>
    <label v-if="smallScreen">
      <input class="menu-checkbox" type="checkbox" v-model="menuOpen" />
      <IconToggleMenu class="menu-icon" :isOpen="menuOpen" aria-label="Menu de navegação" />
    </label>
    <!-- Desktop Nav -->
    <TheHeaderNav v-if="!smallScreen" />
    <Transition name="slide-x-fade" v-if="smallScreen">
      <!-- Mobile Nav -->
      <TheHeaderNav v-if="menuOpen" @click="menuOpen = false" />
    </Transition>
  </header>
</template>

<style scoped>
header {
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: space-between;
  top: 0;
  z-index: 2;
  height: var(--header-height);
  color: var(--color-primary);
  background-color: var(--color-bg);
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.16);
}

.container-logo {
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
}

span {
  font-size: 1.3em;
  font-weight: 400;
  padding-left: 10px;
}

.menu-checkbox {
  display: block;
  width: 50px;
  height: 50px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

.menu-icon {
  /* Position the icon in the center */
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  width: 1.5em;
  height: 1.5em;
}

.slide-x-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-x-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-x-fade-enter-from,
.slide-x-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
