<script setup>
import { ref } from 'vue'

const count = ref(0)
const seen = ref(true)

const toggleUrl = ref(true)
const url = ref('https://biz.moneyforward.com/work-efficiency/basic/2108/#Google_ToDo')

function switchUrl() {
  if (toggleUrl.value) {
    url.value = 'https://developer.mozilla.org/ja/docs/Web/HTML/Element/time'
  } else {
    url.value = 'https://biz.moneyforward.com/work-efficiency/basic/2108/#Google_ToDo'
  }
  toggleUrl.value = !toggleUrl.value
}
</script>

<template>
  <h1>ToDo</h1>
  <button @click="seen = !seen">toggle count</button>
  <div>
    <button @click="count++" v-if="seen">count: {{ count }}</button>
  </div>
  <br />

  <button @click="switchUrl">toggle Url</button>
  <div>
    <a :href="url" target="_blank">{{ url }}</a>
  </div>
</template>
