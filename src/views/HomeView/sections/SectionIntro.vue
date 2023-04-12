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
  justify-content: space-between;
  gap: 70px 30px;
  min-height: 600px;
  /* padding: 170px 30px; */
  overflow: hidden;
  font-size: 1.8em;
  background: linear-gradient(46deg, #080208, #831383);
}

@media (max-width: 750px) {
  section {
    flex-direction: column;
  }
}

header {
  color: white;
}

@media (min-width: 750px) {
  header {
    max-width: 60%;
  }
}

h1 {
  font-weight: bold;
  text-transform: uppercase;
  line-height: normal;
}

p {
  line-height: 1.2em;
  margin-top: 20px;
}

.icon {
  width: 100%;
  max-width: 250px;
}
</style>
