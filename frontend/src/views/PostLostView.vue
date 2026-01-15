<script setup>
import Post from '@/components/Post.vue';

</script>

<template>
    <Post 
    head-big-info="Post a Lost Item"
    head-sub-info="Seek help from the community to find your item"
    location="Location lost"
    location-placeholder="Where do you think you lost this item?"
    date="Date Lost"
    :reward="true"
    />
</template>

<style scoped>

</style>