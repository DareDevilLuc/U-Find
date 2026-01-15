<script setup lang="ts">

</script>

<template>
    <div class="homeContainer">
        <div class="homeButton">
            <RouterLink :to="{name: 'home'}">
                <- Back to Home
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    a{
        text-decoration: none;
        color: rgb(168, 89, 108);
        font-size: medium;
        transition: 0.2s;
    }

    a:hover{
        color: rgb(213, 55, 92);
    }

    .homeContainer{
        min-width: 100%;
        display: flex;
        justify-content: center;
        background-color: ghostwhite;
    }

    .homeButton{
        min-width: 80%;
        padding: 1rem;
        margin-bottom: -1rem;
    }

    @media (min-width: 1024px) {
        .homeButton{
            min-width: 40%;
        }
        
    }

</style>