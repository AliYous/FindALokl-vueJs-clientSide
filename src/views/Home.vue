<template>
  <div class="home">

    <div class="container-header">
      <!--  Image css  -->
      <div class="header-search">
        <h1>Find a Lokl</h1>
        <h3>To show you around</h3>
        <TheSearchBar />
      </div>
    </div>


    <div class="how-it-works-container">
      <HowItWorks />
    </div>

  </div>
</template>      

<script>
import HowItWorks from '../components/HowItWorks'
import TheSearchBar from '../components/TheSearchBar'


export default {
  name: 'Home',
  components: {
    HowItWorks,
    TheSearchBar
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,700;1,900&display=swap');

  .container-header {
    position: absolute;
    width: 100%;
    height: 35rem;
    background-image: url("../assets/header-img4.jpg");
    background-size: cover;
    background-position-y: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 1rem;
  } 
  .header-search {
      width: 40%;
      color: white;
      text-align: left;
      font-weight: bold;
  }
  h1 {
      font-family: 'Poppins:ital';
      font-size: 50px;
  }
  h2 {
      font-family: 'Poppins:ital';
      font-size: 30px;
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
