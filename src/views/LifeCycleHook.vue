<script setup>
import { ref, onMounted } from 'vue'
const count = ref(0)
onMounted(() => {
  console.log('onmounted')
})
</script>

<template>
  <h2>LifeCycleHook</h2>
  <div></div>
</template>

<style>
div {
  padding: 20px;
}
h3 {
  margin: auto;
}
p {
  margin: auto;
}
</style>
