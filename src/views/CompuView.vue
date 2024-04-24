<script setup>
import { ref, computed } from 'vue'

const author = ref({
  name: 'John Doe',
  books: ['vue1', 'vue2', 'vue-3']
})

const publishedBooksMessage = computed(() => {
  return author.value.books.length > 0 ? 'yes' : 'no'
})

const isActive = ref(true)

const isShows = ref({
  third: false,
  second: false,
  third: false
})

const items = ref([{ message: 'foo' }, { message: 'bar' }])

const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
])
function even(numbers) {
  return numbers.filter((numbers) => numbers % 2 === 0)
}
</script>

<template>
  <div>
    <h2>computed()</h2>
    <p>{{ publishedBooksMessage }}</p>
  </div>
  <div>
    <h2 :class="{ active: isActive }">:class</h2>
    <button @click="isActive = !isActive">toggle Color</button>
  </div>

  <div>
    <h2>v-if</h2>
    <div>
      <button @click="isShows.first = !isShows.first">first</button>
      <button @click="isShows.second = !isShows.second">second</button>
      <button @click="isShows.third = !isShows.third">third</button>
    </div>
    <div>
      <span v-if="isShows.first">My name </span>
      <span v-if="isShows.second">is </span>
      <span v-if="isShows.third">moriyamato</span>
      <span v-else style="color: red">Syntax Error!</span>
    </div>
  </div>
  <br /><br />

  <div>
    <h2>v-for list rendering</h2>
    <li v-for="(item, index) in items" :key="item.message">{{ index }} - {{ item.message }}</li>
  </div>
  <br /><br />

  <div>
    <h2>filters</h2>
    <ul v-for="set in sets">
      <li v-for="number in even(set)">{{ number }}</li>
    </ul>
  </div>
</template>

<style scoped>
.active {
  color: red;
}
</style>
