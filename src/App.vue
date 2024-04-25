<script setup>
import { ref, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import TodoCard from './views/TodoCard.vue'
import AddTodoComponent from './views/AddTodoComponent.vue'
const todos = ref([
  { title: 'ご飯を食べる🍚', limit: '2024-04-15', done: false },
  { title: '夜熟睡する🌙', limit: '2024-04-20', done: false },
  { title: 'Vue.jsの神になる💘', limit: '2024-04-23', done: false },
  { title: '歯磨き🦷', limit: '2024-04-23', done: false },
  { title: '佐野さんの家に行く🏩', limit: '2024-04-23', done: false },
  { title: 'クレカの支払い💰', limit: '2024-04-23', done: false },
  { title: '絵を描く🖌', limit: '2024-04-15', done: false },
  { title: 'AWSの勉強をする💻', limit: '2024-04-15', done: false },
  { title: '映画を見に行く📺', limit: '2024-04-15', done: false },
  { title: '風呂に入る🚿', limit: '2024-04-15', done: false },
  { title: 'グループ同士の構図を作る👊', limit: '2024-04-15', done: false },
  {
    title: 'モダンな技術を取り入れる🤖',
    limit: '2024-04-15',
    done: false
  },
  { title: '映画を見に行く📺', limit: '2024-04-15', done: false }
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
const existsDone = computed(() => {
  return todos.value.some((todo) => todo.done === true)
})
function addList(title, limit) {
  if (limit === '') {
    limit = '0000-00-00'
  }
  todos.value.unshift({
    title: title,
    limit: limit,
    done: false
  })
}
</script>

<template>
  <div class="container overflow-auto todo-content">
    <h1 class="display-5" style="text-align: center">ToDo</h1>
    <div class="container todo">
      <TodoCard
        v-for="(todo, index) in doingTodo"
        :key="todo.title"
        :todo="todo"
        @click="todo.done = !todo.done"
        @delete-todo="todos.splice(index, 1)"
      />
    </div>

    <h1 class="display-5" style="text-align: center" v-if="existsDone">Done</h1>
    <div class="container todo" v-if="existsDone">
      <TodoCard
        v-for="todo in doneTodo"
        :key="todo.title"
        :todo="todo"
        @click="todo.done = !todo.done"
      />
    </div>
  </div>
  <div class="container">
    <div class="container todo-input">
      <AddTodoComponent @add-todo="addList" />
    </div>
  </div>
</template>

<style scoped>
.todo {
  margin-bottom: 30px;
}
.todo-content {
  height: 450px;
}
.todo-input {
  margin: 5px;
}
</style>
