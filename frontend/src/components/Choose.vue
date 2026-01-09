<script setup>

</script>

<template>
    <div class="customButton">
        <slot></slot>
    </div>
</template>

<style scoped>
    .customButton{
        background-color: maroon;
        padding: 1rem 2rem;
        font-size: 1.25rem;
        min-width: 200px;
        text-align: center;
        background-color: maroon;
        color: white;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.3s;
    }

    .customButton:hover{
        transform: scale(1.1);
        background-color: rgb(188, 18, 18);
    }
</style>