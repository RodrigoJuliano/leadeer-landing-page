<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const IconWhats = defineAsyncComponent(() => import('@/components/icons/IconWhatsapp.vue'));
const IconFace = defineAsyncComponent(() => import('@/components/icons/IconFacebook.vue'));
const IconTwitter = defineAsyncComponent(() => import('@/components/icons/IconTwitter.vue'));
const IconLinkedin = defineAsyncComponent(() => import('@/components/icons/IconLinkedin.vue'));
const IconBehance = defineAsyncComponent(() => import('@/components/icons/IconBehance.vue'));
const IconInsta = defineAsyncComponent(() => import('@/components/icons/IconInstagram.vue'));
</script>

<template>
  <section class="site-width" id="medias">
    <h2>Conecte-se</h2>
    <div class="container">
      <a title="Whatsapp" href="#undefined" rel="external noreferrer">
        <IconWhats />
      </a>
      <a title="Instagram" href="#undefined" rel="external noreferrer">
        <IconInsta />
      </a>
      <a title="Behance" href="#undefined" rel="external noreferrer">
        <IconBehance />
      </a>
      <a title="Facebook" href="#undefined" rel="external noreferrer">
        <IconFace />
      </a>
      <a title="Twitter" href="#undefined" rel="external noreferrer">
        <IconTwitter />
      </a>
      <a title="LinkedIn" href="#undefined" rel="external noreferrer">
        <IconLinkedin />
      </a>
    </div>
  </section>
</template>

<style scoped>
section {
  padding-bottom: 50px;
}

.container {
  text-align: center;
}

a {
  display: inline-block;
  color: white;
  background-color: darkmagenta;
  line-height: 0;
  padding: 15px;
  margin: 10px;
  border-radius: 50%;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.144);
}

a:hover {
  background-color: rgb(165, 29, 165);
}

a:active {
  transform: translateY(-3px);
  box-shadow: 3px 3px 8px rgb(0, 0, 0, 0.144);
}

svg {
  height: 1.5em;
  width: 1.5em;
}
</style>
