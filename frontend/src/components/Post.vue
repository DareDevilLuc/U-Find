<script setup lang="ts">

    interface Props{
        headBigInfo: string,
        headSubInfo: string,
        location: string,
        locationPlaceholder: string,
        date: string,
        reward: boolean
    }


    const props = defineProps<Props>()
</script>

<template>
    <div class="wholeContainer">
        <div class="headInfo">
            <div class="bigInfo">{{ headBigInfo }}</div>
            <div class="subInfo">{{ headSubInfo }}</div>
        </div>
        <div class="postContainer">
            <div class="itemDetails">
                <h1>Item Details</h1>

                Item name *
                <input type="text" placeholder="e.g., Black Wallet, Silver Ring, Blue Earrings">

                Category *
                <select>
                    <option>Wallet</option>
                    <option>Keys</option>
                    <option>Phone</option>
                    <option>Jewelry</option>
                    <option>Bag</option>
                    <option>Clothing</option>
                    <option selected>Other</option>
                </select>
                
                Detailed Description*
                <input type="text" placeholder="Describe the item in detail - color, brand, special markings, condition etc.">

                {{ location }} *
                <input type="text" :placeholder="locationPlaceholder">

                {{ date }} *
                <input type="date">

                <div v-if="reward" class="reward">
                    Reward (Optional)
                    <input type="text" placeholder="e.g., 100PHP">
                </div>
                <div class="contactInformation">
                    <h1>Your Contact Information</h1>
                </div>

                Full Name *
                <input type="text" placeholder="Your name">

                Email *
                <input type="text" placeholder="your@email.com">

                Phone (Optional)
                <input type="text" placeholder="+630000000000">

                <div class="twoButtons">
                    <p class="buttonOne">Post Lost Item</p>
                    <RouterLink :to="{name: 'home'}" class="buttonTwo">
                        Cancel
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    a{
        text-decoration: none;
    }

    .headInfo{
        min-width: 80%;
        padding: 1rem;
    }

    .bigInfo{
        font-size: xx-large;
        font-weight: bold;
    }

    .subInfo{
        color: gray;
    }

    .wholeContainer{
        display: flex;
        flex-direction: column;
        background-color: ghostwhite;
        min-width: 100%;
        min-height: 100vh;
        align-items: center;
    }

    .postContainer{
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        background-color: white;
        min-width: 80%;
        min-height: 200px;
        max-width: 80%;
        border: 1px gainsboro solid;
        border-radius: 8px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);;
        padding: 2rem;
        margin-bottom: 2rem;
    }

    .twoButtons{
        display: flex;
        justify-content: center;
        gap: 1rem;
        border-top-width: 1px;
        border-color: gainsboro;
        border-top-style: solid;
        padding-top: 1rem;
    }

    .twoButtons .buttonOne, .twoButtons .buttonTwo{
        padding: 0.3rem;
        min-width: 45%;
        text-align: center;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);;
        cursor: pointer;
        transition: 0.2s;
    }

    .twoButtons .buttonOne{
        background-color: rgb(151, 46, 66);
        color: white;
        border-radius: 8px;
    }

    .twoButtons .buttonOne:hover{
        background-color: rgb(192, 17, 49);
    }

    .twoButtons .buttonTwo{
        color: black;
        border: 1px gainsboro solid;
        border-radius: 8px;
    }
    
    .twoButtons .buttonTwo:hover{
        background-color: rgb(248, 240, 240);
    }
    .reward{
        display: flex;
        flex-direction: column;
    }

    .itemDetails{
        display: flex;
        flex-direction: column;
    }

    .itemDetails input, .itemDetails select{
        background-color: ghostwhite;
        border: 1px gainsboro solid;
        border-radius: 10px;
        padding: 0.8rem;
        margin-bottom: 1rem;
        font-size: medium;
        font-family: 'Arial';
    }

    .itemDetails input:focus, .itemDetails select:focus{
        border-color: maroon;
        border-width: 2px;
        outline: none;
        box-shadow: 0 0 5px rgba(128, 0, 0, 0.5); /* optional glow effect */
    }
    
    .itemDetails h1{
        font-size: x-large;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    .contactInformation{
        border-top-width: 1px;
        border-color: gainsboro;
        border-top-style: solid;
        padding-top: 1rem;
    }

    .contactInformation h1{
        font-size: x-large;
        font-weight: 500;
        margin-bottom: 1rem;
    }


    @media (min-width: 1024px){
        .postContainer{
            min-width: 40%;
        }

        .headInfo{
            min-width: 40%
        }
    }
</style>