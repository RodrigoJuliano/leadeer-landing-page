<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import IconLeadeer from './icons/IconLeadeer.vue';
import LinkHeader from './LinkHeader.vue';

const route = useRoute();
const activePath = computed(() => `${route.path}${route.hash}`);
const links = [
  { to: '/#start', text: 'Início' },
  { to: '/#about', text: 'Sobre' },
  { to: '/#portfolio', text: 'Portfólio' },
  { to: '/#services', text: 'Serviços' },
  { to: '/#contact', text: 'Contato' },
  { to: '/#medias', text: 'Redes' }
];
</script>

<template>
  <header class="site-width">
    <a href="." class="container-logo">
      <IconLeadeer fill="darkmagenta" height="2em" />
      <span>Leadeer</span>
    </a>

    <nav>
      <LinkHeader
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        :is-active="activePath === link.to"
        :text="link.text"
      />
    </nav>
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
  color: darkmagenta;
  background-color: white;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.26);
}

.container-logo {
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
}

span {
  font-size: 1.3em;
  font-weight: 600;
  padding-left: 10px;
}
</style>
