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

  <div class="footer">
    Made by Kyle Casirayan
  </div>
</template>

<style scoped>
  .headIntro{
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: xx-large;
    color: rgb(0, 0, 0);
    background-color: ghostwhite;
    font-weight: bold;
    width: 100%;
    border: 1px gainsboro solid ;
    padding: 2rem;
  }

  .headIntro a{
    display: flex;
    flex-direction: column;
    width: 100%;
    text-decoration: none;
    cursor: pointer;
  }

  .footer{
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 1rem;
    color: gray
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

    @media (min-width: 1024px){
    .borderIntro{
      margin-left: 21rem;
    }

    .headIntro{
      min-width: 1280px;
    }
  }

  .headIntro a:visited{
    color: inherit
  }
</style>
