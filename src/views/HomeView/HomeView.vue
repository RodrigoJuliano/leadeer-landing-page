<script setup lang="ts">
import SectionIntro from './sections/SectionIntro.vue';
import SectionAbout from './sections/SectionAbout.vue';
import SectionPortfolio from './sections/SectionPortfolio.vue';
import SectionServices from './sections/SectionServices.vue';
import SectionContact from './sections/SectionContact.vue';
import SectionMedias from './sections/SectionMedias.vue';
</script>

<template>
  <main>
    <SectionIntro />
    <SectionAbout />
    <SectionPortfolio />
    <SectionServices />
    <SectionContact />
    <SectionMedias />
  </main>
</template>

<style scoped>
main {
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}
</style>

<style>
section {
  padding-top: 70px;
  padding-bottom: 90px;
  /* padding-bottom: 70px; */
}

.site-width {
  /* Apply a padding to limit the content width */
  --max-padding: calc(calc(100% - var(--max-content-width)) / 2);
  --padding: max(var(--max-padding), 30px);
  padding-left: var(--padding);
  padding-right: var(--padding);
}

h2 {
  color: darkmagenta;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  /* text-transform: uppercase; */
  margin-bottom: 40px;
}
</style>
