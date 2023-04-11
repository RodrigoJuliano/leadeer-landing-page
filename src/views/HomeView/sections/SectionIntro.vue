<script setup lang="ts">
import AnimatedRocket from '@/components/AnimatedRocket.vue';
import SkyBackground from '@/components/SkyBackground.vue';
</script>

<template>
  <section class="site-width" id="start">
    <SkyBackground />
    <header>
      <h1>Turbine sua marca</h1>
      <p>Desbravamos o universo do design para levar sua marca para o topo.</p>
    </header>
    <AnimatedRocket class="icon" />
  </section>
</template>

<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px 30px;
  /* min-height: calc(100vh - var(--header-height)); */
  min-height: 600px;
  /* padding: 170px 30px; */
  overflow: hidden;
  font-size: 1.8em;
  background: #e0beff;
}

@media (max-width: 750px) {
  section {
    flex-direction: column;
  }
}

h1 {
  font-weight: bold;
  text-transform: uppercase;
  line-height: normal;
}

.icon {
  width: 100%;
  max-width: 250px;
}

header {
  color: darkmagenta;
}

p {
  line-height: 1.2em;
  margin-top: 20px;
}
</style>
