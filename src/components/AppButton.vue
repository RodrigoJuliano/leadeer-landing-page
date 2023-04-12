<template>
  <button class="app-button">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  color: white;
  background-color: purple;
  border: none;
  font-size: 0.8em;
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 20px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.144);
  transition: box-shadow 0.2s, transform 0.1s;
}

button:hover {
  background-color: rgb(165, 29, 165);
}

button:active {
  transform: translateY(-3px);
  box-shadow: 3px 3px 8px rgb(0, 0, 0, 0.144);
}
</style>
