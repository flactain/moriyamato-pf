<script setup>
const props = defineProps({
  todo: Object
})
</script>

<template>
  <li>
    <button @click="$emit('delete-todo')">削除</button>
    <span>{{ props.todo.title }}</span
    ><span>{{ props.todo.limit }}</span>
  </li>
</template>
