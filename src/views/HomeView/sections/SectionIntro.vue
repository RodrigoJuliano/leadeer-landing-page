<script setup lang="ts">
import AnimatedRocket from '@/components/AnimatedRocket.vue';
import SkyBackground from '@/components/SkyBackground.vue';
import AppSection from '@/components/AppSection.vue';
</script>

<template>
  <AppSection id="start">
    <SkyBackground />
    <header>
      <h1>Turbine Sua Marca</h1>
      <p>Desbravamos o universo do design para levar sua marca para o topo.</p>
    </header>
    <AnimatedRocket class="icon" />
  </AppSection>
</template>

<style scoped>
.app-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 70px 30px;
  min-height: 600px;
  /* padding: 170px 30px; */
  overflow: hidden;
  font-size: 1.8em;
  background: linear-gradient(to left bottom, #8b008b, #70015d, #4f0937, #2c0d1c, #000000);
}

@media (max-width: 750px) {
  section {
    flex-direction: column;
  }
}

header {
  color: var(--color-text-on-primary);
}

@media (min-width: 750px) {
  header {
    max-width: 60%;
  }
}

h1 {
  font-weight: bold;
  /* text-transform: uppercase; */
  line-height: normal;
  font-size: 1.7em;
}

p {
  line-height: 1.2em;
  margin-top: 20px;
  font-size: 0.8em;
  font-weight: 200;
}

.icon {
  width: 100%;
  max-width: 250px;
}
</style>
