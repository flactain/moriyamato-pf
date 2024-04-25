<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  todo: Object
})
const visibilityStyle = ref({
  visibility: props.todo.limit === '0000-00-00' ? 'hidden' : 'visible'
})
</script>

<template>
  <div class="row btn-light mori-todo-card">
    <button
      type="button "
      @click="$emit('delete-todo')"
      class="col-2 btn-sm btn-secondary mori-button"
    >
      削除
    </button>
    <span class="col-7" style="margin: auto; text-align: left">{{ props.todo.title }}</span>
    <span class="badge bg-primary mori-badge" :style="visibilityStyle">
      {{ props.todo.limit }}</span
    >
  </div>
</template>

<style scoped>
.mori-badge {
  margin: auto;
}

.mori-todo-card {
  padding: 1px;
  margin: 2px;
  border-radius: 10px;
  font-size: small;
}
.mori-button {
  padding: 0.2em 0.4em;
  border-radius: 10px;
}
</style>
