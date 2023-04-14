<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import LinkHeader from './LinkHeader.vue';

const route = useRoute();
const activePath = computed(() => `${route.path}${route.hash}`);
const links = [
  { to: '/#start', text: 'Início' },
  { to: '/#portfolio', text: 'Portfólio' },
  { to: '/#services', text: 'Serviços' },
  { to: '/#about', text: 'Sobre' },
  { to: '/#contact', text: 'Contato' },
  { to: '/#medias', text: 'Redes' }
];
</script>
<template>
  <nav>
    <LinkHeader
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      :is-active="activePath === link.to"
      :text="link.text"
    />
  </nav>
</template>

<style scoped>
.link-header + .link-header {
  margin-left: 8px;
}

@media (max-width: 700px) {
  nav {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: var(--header-height);
    left: 0;
    right: 0;
    text-align: center;
    background-color: var(--color-bg);
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.16);
  }

  .link-header {
    border-bottom: 1px solid rgba(139, 0, 139, 0.164);
  }

  .link-header + .link-header {
    margin: 0;
  }

  .link-header {
    padding: 10px 0;
  }
}
</style>
