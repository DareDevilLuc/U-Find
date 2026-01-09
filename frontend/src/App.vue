<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header class="headIntro">
      <div class="borderIntro">
        <router-link to="/">
          U-FIND
        <div class="subsection">
          Help reunite people with their lost items
        </div>
        </router-link>
      </div>
      
    </header>
  <RouterView />
</template>

<style scoped>
  .headIntro{
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: xx-large;
    color: rgb(0, 0, 0);
    font-weight: bold;
    width: 100%;
    border: 1px solid ;
    padding: 2rem;
  }

  .headIntro a{
    display: flex;
    flex-direction: column;
    width: 100%;
    text-decoration: none;
    cursor: pointer;
  }

  .borderIntro{
    max-width: 45%;
    margin-left: 5rem;
  }

  .subsection{
    font-size: medium;
    font-weight: normal;     
    color: grey;          
  }

  @media (min-width: 300px){
    .borderIntro{
      margin-left: 0;
    }
  }

    @media (min-width: 900px){
    .borderIntro{
      margin-left: 21rem;
    }
  }

  .headIntro a:visited{
    color: inherit
  }
</style>
