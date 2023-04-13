<script setup lang="ts">
import AppSection from '@/components/AppSection.vue';
import SectionTitle from '@/components/SectionTitle.vue';

import i1 from '@/assets/images/mockup-business-card-with-photo-city_1435-1217.webp';
import i2 from '@/assets/images/elegant-minimal-black-yellow-business-card-template_1017-22513.jpg';
import i3 from '@/assets/images/business-cards-mockup_1389-1137.jpg';
import i4 from '@/assets/images/rr.jpg';
const items = [i1, i2, i3, i4, i2];
</script>

<template>
  <AppSection id="portfolio">
    <SectionTitle>Portfólio</SectionTitle>
    <div class="container">
      <article v-for="(item, index) in items" :key="item + index">
        <a href="#undefined">
          <img :src="item" />
        </a>
      </article>
    </div>
  </AppSection>
</template>

<style scoped>
section {
  text-align: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

img {
  width: 330px;
  height: 330px;
  object-fit: cover;
}

article {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--elevation-1);
  transition: all 0.2s;
}

article:hover {
  box-shadow: var(--elevation-3);
  translate: 0 -10px;
}

a {
  display: flex;
  text-decoration: none;
  color: white;
}
</style>
