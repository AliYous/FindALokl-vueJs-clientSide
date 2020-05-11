<template>
  <div class="home">

    <TheHeaderImgAndSearch v-bind:minified="false" />
    

    <div class="how-it-works-container">
      <HowItWorks />
    </div>

  </div>
</template>      

<script>
import TheHeaderImgAndSearch  from '../components/TheHeaderImgAndSearch'
import HowItWorks from '../components/HowItWorks'



export default {
  name: 'Home',
  components: {
    TheHeaderImgAndSearch,
    HowItWorks
  },
}
</script>

<style scoped>
  .how-it-works-container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 25rem;
    height: 30rem;
    width: 100%;
  }
  
  @media screen and (max-width: 768px) {
    .img-header {
      height: 25rem;
    }

    .how-it-works-container {
      display: none;
    }
  }
</style>
