<script setup lang="ts">
defineProps<{
  id: string;
  label?: string;
  multiline?: boolean;
}>();
</script>

<template>
  <div class="app-input">
    <label v-if="label != undefined" :for="id">{{ label }}</label>
    <textarea v-if="multiline" v-bind="$attrs" :id="id"></textarea>
    <input v-else v-bind="$attrs" type="text" :id="id" />
  </div>
</template>

<style scoped>
label {
  font-size: 1em;
  padding-left: 5px;
}

input,
textarea {
  display: block;
  width: 100%;
  padding: 0.7rem;
  font-size: 1em;
  font-family: inherit;
  border: solid 2px white;
  border-radius: 10px;
  background-color: white;
  box-shadow: var(--elevation-1);
}

textarea {
  resize: vertical;
}

input:focus,
textarea:focus {
  border-color: purple;
  outline: none;
}
</style>
