<script setup lang="ts">
import i1 from '@/assets/images/mockup-business-card-with-photo-city_1435-1217.webp';
import i2 from '@/assets/images/elegant-minimal-black-yellow-business-card-template_1017-22513.jpg';
import i3 from '@/assets/images/business-cards-mockup_1389-1137.jpg';
import i4 from '@/assets/images/rr.jpg';
const items = [i1, i2, i3, i4, i2];
</script>

<template>
  <section class="site-width" id="portfolio">
    <h2>Portfólio</h2>
    <div class="container">
      <article v-for="(item, index) in items" :key="item + index">
        <a href="#undefined">
          <img :src="item" />
        </a>
      </article>
    </div>
  </section>
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
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.144);
  transition: all 0.2s;
}

article:hover {
  box-shadow: 5px 5px 15px rgb(0, 0, 0, 0.144);
  translate: 0 -10px;
}

a {
  display: flex;
  text-decoration: none;
  color: white;
}
</style>
