<script setup>
import { ref, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
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
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
        <span class="fs-4">ToDo Application</span>
      </a>
    </header>
  </div>

  <div class="container">
    <h1 class="display-5" style="text-align: center">ToDo</h1>
    <TodoCard
      v-for="(todo, index) in doingTodo"
      :key="todo.title"
      :todo="todo"
      @click="todo.done = !todo.done"
      @delete-todo="todos.splice(index, 1)"
    />
  </div>

  <div class="container">
    <h1 class="display-5" style="text-align: center">Done</h1>
    <TodoCard
      v-for="todo in doneTodo"
      :key="todo.title"
      :todo="todo"
      @click="todo.done = !todo.done"
    />
  </div>
</template>
