<template>
  <a class="link-icon">
    <slot></slot>
  </a>
</template>

<style scoped>
a {
  display: inline-block;
  color: darkmagenta;
  text-decoration: none;
  border-bottom: 1px solid transparent;
}

a:hover {
  border-color: currentColor;
}

:slotted(svg) {
  height: 1em;
  width: 1em;
}

a > :slotted(svg) {
  vertical-align: middle;
}
</style>
