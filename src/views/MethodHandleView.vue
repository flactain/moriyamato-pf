<script setup>
import { ref } from 'vue'
const count = ref(0)
const name = ref('Vue.js')

function greet(event) {
  alert(`Hello ${name.value}! from ` + event.target.tagName)
  // `event` はネイディブ DOM イベントです。
}
function say(message) {
  alert(message)
}

const text = ref('')

const checkedNames = ref([])
</script>

<template>
  <h2>MethodHandler</h2>
  <a href="https://ja.vuejs.org/guide/essentials/event-handling.html">Vue reference</a>
  <div>
    <h3>inline handler</h3>
    <button @click="count++">inline count++</button>
    <p>count is: {{ count }}</p>
  </div>
  <div>
    <h3>method handler</h3>
    <button @click="greet">greet</button>
  </div>
  <div>
    <h3>call method by using inline handler</h3>
    <button @click="say('hello')">Say Hello</button>
    <button @click="say('good bye')">Say bye</button>
  </div>
  <div>
    <h3>key modifier (press space)</h3>
    <input type="text" @keyup.space="count++" />
    <p>{{ count }}</p>
  </div>

  <h2>Form Input Binding</h2>
  <a href="https://ja.vuejs.org/guide/essentials/forms.html">vue reference</a>
  <div>
    <h3>textbox</h3>
    <input type="text" v-model="text" placeholder="type in this box" />
    <p>{{ text }}</p>
  </div>

  <div>
    <h3>CheckBox input Binding</h3>
    <div>{{ checkedNames }}</div>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
  </div>
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
