<template>
  <div class="home">

    <div class="container-header">
      <!--  Image css  -->
    </div>

    <div class="how-it-works-container">
      <HowItWorks />
    </div>

  </div>
</template>      

<script>
import HowItWorks from '../components/HowItWorks'

export default {
  name: 'Home',
  components: {
    HowItWorks
  }
}
</script>

<style scoped>
  .container-header {
    position: absolute;
    width: 100%;
    height: 35rem;
    background-image: url("../assets/header-img4.jpg");
    background-size: cover;
    background-position-y: 80%;
  } 
  
  .how-it-works-container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 29rem;
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
