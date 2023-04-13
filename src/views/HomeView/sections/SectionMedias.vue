<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import AppSection from '@/components/AppSection.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import LinkIconCircle from '@/components/LinkIconCircle.vue';

const IconWhats = defineAsyncComponent(() => import('@/components/icons/IconWhatsapp.vue'));
const IconFace = defineAsyncComponent(() => import('@/components/icons/IconFacebook.vue'));
const IconTwitter = defineAsyncComponent(() => import('@/components/icons/IconTwitter.vue'));
const IconLinkedin = defineAsyncComponent(() => import('@/components/icons/IconLinkedin.vue'));
const IconBehance = defineAsyncComponent(() => import('@/components/icons/IconBehance.vue'));
const IconInsta = defineAsyncComponent(() => import('@/components/icons/IconInstagram.vue'));
</script>

<template>
  <AppSection id="medias">
    <SectionTitle>Conecte-se</SectionTitle>
    <div class="container">
      <LinkIconCircle title="Whatsapp" href="#undefined" rel="external noreferrer">
        <IconWhats class="icon" />
      </LinkIconCircle>
      <LinkIconCircle title="Instagram" href="#undefined" rel="external noreferrer">
        <IconInsta class="icon" />
      </LinkIconCircle>
      <LinkIconCircle title="Behance" href="#undefined" rel="external noreferrer">
        <IconBehance class="icon" />
      </LinkIconCircle>
      <LinkIconCircle title="Facebook" href="#undefined" rel="external noreferrer">
        <IconFace class="icon" />
      </LinkIconCircle>
      <LinkIconCircle title="Twitter" href="#undefined" rel="external noreferrer">
        <IconTwitter class="icon" />
      </LinkIconCircle>
      <LinkIconCircle title="LinkedIn" href="#undefined" rel="external noreferrer">
        <IconLinkedin class="icon" />
      </LinkIconCircle>
    </div>
  </AppSection>
</template>

<style scoped>
.app-section {
  padding-bottom: 70px;
}

.container {
  text-align: center;
}

.icon {
  height: 1.5em;
  width: 1.5em;
}
</style>
