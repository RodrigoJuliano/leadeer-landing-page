<script setup lang="ts">
import { computed } from 'vue';
import random from '@/utils/random.js';

const height = 800;
const width = 800;

const props = defineProps({
  numStaticStars: { type: Number, default: 100 },
  numMovingStars: { type: Number, default: 5 },
  starsColor: { type: String, default: 'white' }
});

const staticStars = computed(() => {
  const arr = [];

  for (let i = 0; i < props.numStaticStars; i++) {
    const x = random(0, width);
    const y = random(0, height);
    const r = random(0.5, 1.5);
    const delay = random(0, 30);
    arr.push({ x, y, r, delay });
  }

  return arr;
});

const movingStars = computed(() => {
  const arr = [];
  const space = height / props.numMovingStars;

  for (let i = 0; i < props.numMovingStars; i++) {
    const y = space * (i + 1);
    const delay = random(0, 2);
    arr.push({ x: 0, y, delay: delay });
  }

  return arr;
});
</script>

<template>
  <svg class="svg" :viewBox="`0 0 ${width} ${height}`" :fill="starsColor">
    <g class="static-stars-group">
      <template v-for="(star, i) in staticStars" :key="i">
        <circle
          class="static-star"
          :cx="star.x"
          :cy="star.y"
          :r="star.r"
          :style="{ animationDelay: `${star.delay}s` }"
        />
      </template>
    </g>
    <g class="moving-stars-group">
      <template v-for="(star, i) in movingStars" :key="i">
        <rect
          class="moving-star"
          :x="star.x"
          :y="star.y"
          width="100"
          height="1"
          :style="{ animationDelay: `${star.delay}s` }"
        />
      </template>
    </g>
  </svg>
</template>

<style scoped>
.svg {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
}

.moving-stars-group {
  transform: rotate(-45deg);
}

.moving-star {
  transform: translateX(100%);
  animation: movingStarAnim infinite 2s 0s linear;
}

.static-star {
  filter: blur(0.1px);
  animation: staticStarAnim infinite 1s 0s alternate;
}

@keyframes movingStarAnim {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes staticStarAnim {
  0% {
    opacity: 0;
  }

  30% {
    opacity: 1;
  }
}
</style>
