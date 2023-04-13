<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    fill="currentColor"
    stroke-width="4"
    stroke="currentColor"
    stroke-linecap="round"
    :class="{ open: isOpen }"
  >
    <line class="l0" x1="2" y1="9" x2="48" y2="9" />
    <line class="l1" x1="2" y1="25" x2="48" y2="25" />
    <line class="l2" x1="2" y1="41" x2="48" y2="41" />
  </svg>
</template>

<style scoped>
line {
  transition: transform 0.2s;
}
.open > .l0 {
  transform: rotateZ(45deg) translateY(-18%) translateX(20%);
}

.open > .l1 {
  transform: translate(50%, 50%) scale(0);
}

.open > .l2 {
  transform: rotateZ(-45deg) translateY(-12%) translateX(-50%);
}
</style>
