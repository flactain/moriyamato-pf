<script setup>
import { ref, computed } from 'vue'
const title = ref('')
const limit = ref('')
const isChecked = ref(false)
</script>

<template>
  <div class="row">
    <h6 class="todo-label">期日</h6>
  </div>
  <div class="row" style="margin-top: 5px">
    <div class="form-group">
      <input type="checkbox" style="margin: 5px" v-model="isChecked" />
      <input type="date" class="date-input" v-model="limit" :disabled="!isChecked" />
    </div>
  </div>
  <div class="row">
    <h6 class="todo-label">内容</h6>
  </div>
  <div class="row" style="margin-top: 5px">
    <input type="text" class="form-control col-md-6" v-model="title" />
  </div>

  <div class="row" style="margin-top: 5px">
    <button class="btn btn-primary" @click="$emit('addTodo', title, limit)">追加</button>
  </div>
</template>

<style scoped>
.add-todo {
  position: fixed;
  bottom: 150px;
  right: 30px;
}
.date-input {
  color: lightgray;
  border-color: lightgray;
  border-radius: 5px;
  border: solid thin lightgray;
}
.todo-label {
  margin-bottom: 0px;
}
</style>
