<script setup lang="ts">
  import Choose from '@/components/Choose.vue'
  import boxIcon from '@/assets/boxIcon.png'
  import heartIcon from '@/assets/heartIcon.png'
  import eyeIcon from '@/assets/eyeIcon.png'
</script>

<template>
  <div class="center">
    <p class="bigText">Found Something? Lost Something?</p>
    <p class="smallText">We help bring lost and found items together. Post what you've found or search for what you've lost.</p>
  </div>

  <div class="redirect">
    <router-link to="/postLost">
      <Choose>
        <template #imageHolder>
          <img :src="boxIcon" alt="ItemLost" class="imageLost">
        </template>
        <template #descriptionHolder>
          <p>Post a Lost Item</p>
        </template>
        <template #subSectionHolder>
          Lost something important? Create a post with details and photos to get help from the community.
        </template>
      </Choose>
    </router-link>
    <router-link to="/postFound">
      <Choose>
        <template #imageHolder>
          <img :src="heartIcon" alt="ItemFound" class="imageFound">
        </template>
        <template #descriptionHolder>
          <p>Post a Found Item</p>
        </template>
        <template #subSectionHolder>
          Found something? Help the owner by posting details and photos to help them identify their belongings.
        </template>
      </Choose>
    </router-link>
    <router-link to="/browse">
      <Choose>
        <template #imageHolder>
          <img :src="eyeIcon" alt="ItemBrowse" class="imageBrowse">
        </template>
        <template #descriptionHolder>
          <p>Browse Items</p>
        </template>
        <template #subSectionHolder>
          Search through items posted by the community. You might find what you're looking for or recognize something!
        </template>
      </Choose>
    </router-link>
  </div>
</template>

<style scoped>
  .center{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 3rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid gainsboro;

  }

  .bigText{
    font-size: 3rem;
    font-weight: bold;
  }
  .smallText{
    font-size: 1rem;
    color: gray;
    font-weight: normal;
  }

  .redirect{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ghostwhite;
    gap: 40px;
    padding-top: 3rem;
    padding-bottom: 3rem;
    width: 75%;
  }

  @media (min-width: 300px){
    .redirect{
      flex-direction: column;
      justify-content: center;
    }
  }

  @media (min-width: 1024px){
    .redirect{
      display: flex;
      flex-direction: row;
      justify-content: center;
      min-width: 100%;
    }
  }

  a{
    text-decoration: none;
  }

  .imageLost, .imageFound, .imageBrowse{
    max-width: 90%;
    border-radius: 8px;
    padding: 1rem;
  }
</style>
