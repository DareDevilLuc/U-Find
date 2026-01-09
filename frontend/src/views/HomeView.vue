<script setup lang="ts">
  import Choose from '@/components/Choose.vue';
</script>

<template>
  <div class="redirect">
    <Choose>
      <p>Post Lost</p>
    </Choose>
    <Choose>
      <p>Post Found</p>
    </Choose>
    <Choose>
      <p>Browse</p>
    </Choose>
  </div>
</template>

<style scoped>
  .redirect{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 100px;
  }
</style>
