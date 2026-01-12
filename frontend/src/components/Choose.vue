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
        max-height: 412px;
        text-align: center;
        background-color: white;
        border: 1px grey solid;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.3s;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);;
    }

    .choosebutton{
        display: flex;
        background-color: rgb(149, 76, 76);
        color: white;
        justify-content: center;
        align-items: center;
        margin-top: 3.5rem;
        border-radius: 8px;
        min-height: 40px;
        min-width: 75%;
        font-size: medium;
        align-self: center;
        transition: 0.3s;
    }

    .customButton:hover{
        transform: scale(1.01);
        border-color: rgb(188, 18, 18);
        box-shadow: 4px 10px 6px rgba(0, 0, 0, 0.2);;
    }

    .image{
        display: flex;
        justify-content: left;
        max-height: 110px;
    }

    .customButton:hover .imageContainer{
        background-color: rgb(229, 98, 98);
    }

    .choosebutton:hover{
        background-color: rgb(154, 23, 23);
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