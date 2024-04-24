<script setup>
import { ref, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import TodoCard from './views/TodoCard.vue'
const todos = ref([
  { title: 'ご飯を食べる🍚', limit: '2024-04-15', done: false },
  { title: '夜熟睡する🌙', limit: '2024-04-20', done: false },
  { title: 'Vue.jsの神になる💘', limit: '2024-04-23', done: false }
])
const doingTodo = computed(() => {
  return todos.value.filter((todo) => {
    return !todo.done
  })
})
const doneTodo = computed(() => {
  return todos.value.filter((todo) => {
    return todo.done
  })
})
</script>

<template>
  <h1>ToDo</h1>
  <TodoCard
    v-for="(todo, index) in doingTodo"
    :key="todo.title"
    :todo="todo"
    @click="todo.done = !todo.done"
    @delete-todo="todos.splice(index, 1)"
  />
  <h1>完了</h1>
  <TodoCard
    v-for="todo in doneTodo"
    :key="todo.title"
    :todo="todo"
    @click="todo.done = !todo.done"
  />
</template>
