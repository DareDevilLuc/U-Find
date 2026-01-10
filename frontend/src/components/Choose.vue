<script setup lang="ts">


interface Slots {
    imageHolder?: () => any
    descriptionHolder?: () => any
    subSectionHolder?: () => any
    chooseButtonHolder?: () => any
}

const slots = defineSlots<Slots>()
</script>

<template>
    <div class="customButton">
        <div class="image">
            <div class="imageContainer">
                <slot name="imageHolder"/>
            </div>
        </div>

        <div class="description">
            <slot name="descriptionHolder"/>
            <p class="subSection"><slot name="subSectionHolder"/></p>
            <div class="choosebutton"><slot name="chooseButtonHolder"/></div>
        </div>
        

    </div>
</template>

<style scoped>
    .customButton{
        display: flex;
        flex-direction: column;
        min-width: 300px;
        min-height: 200px;
        max-width: 500px;
        max-height: 450px;
        text-align: center;
        background-color: white;
        border: 1px gainsboro solid;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.3s;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);;
    }

    .customButton:hover{
        transform: scale(1.1);
        border-color: rgb(188, 18, 18);
    }

    .image{
        display: flex;
        justify-content: left;
        max-height: 110px;
    }

    .customButton:hover .imageContainer{
        background-color: rgb(229, 98, 98);
    }

    .imageContainer{
        background-color: rgb(244, 218, 218);
        max-width: 70px;
        min-height: 62px;
        margin: 1.5rem;
        border-radius: 10px;
        transition: 0.3s;
    }
    

    .description{
        text-align: left;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        justify-content: left;
        min-height: 300px;
        color: maroon;
        font-weight: bold;
        font-size: x-large;
    }

    .subSection{
        font-size: medium;       
        font-weight: normal;     
        color: grey;          
        margin-top: 0.5rem;
    }
</style>