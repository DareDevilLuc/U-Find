<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="headIntro">
    WELCOME TO U-FIND
  </header>
  <RouterView />
</template>

<style scoped>
  .headIntro{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    font-size: x-large;
    color: grey;
    font-weight: bold;
  }
</style>
