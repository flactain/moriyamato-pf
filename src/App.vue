<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1>Vue js learning</h1>
  <ul>
    <li>
      <router-link to="toggle">4/21 - toggle </router-link>
    </li>
    <li>
      <router-link to="compute">4/21 - compute </router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>
