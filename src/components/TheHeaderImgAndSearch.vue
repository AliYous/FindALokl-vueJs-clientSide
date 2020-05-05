<template>
    <div :class="{'container-header-minified': minify}" class="container-header">
      <!--  Image css  -->
      <div class="header-search">
        <div class="text-header">
          <h2 v-if="!minify">Find a Lokl</h2>
          <h3 v-if="!minify">To show you around</h3>
        </div>
        <TheSearchBar :citySearched="citySearched" />
      </div>
    </div>
</template>

<script>
import TheSearchBar from '../components/TheSearchBar'

export default {
    name: 'TheHeaderImgAndSearch',
    props: ['minified', 'citySearched'],
    data() {
        return{
            minify: this.$props.minified
        }
    },
    components: {
        TheSearchBar
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,700;1,900&display=swap');

  .container-header {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 35rem;
    background-image: url("../assets/header-img4-dark.jpg");
    background-size: cover;
    background-position-y: 80%;
  } 
  .container-header-minified {
        position: fixed;
        width: 100%;
        height: 8rem;
        background-image: url("../assets/header-img4-dark.jpg");
        background-size: cover;
        background-position-y: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 4.7rem;
  }
  .header-search {
      width: 38rem;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
      text-align:left;
      font-weight: bold;
  }
  .text-header {
    text-align: left;
    width: 100%;

  }
  h2 {
      font-family: 'Poppins:ital';
      font-size: 50px;
  }

   @media screen and (max-width: 768px) {
    .container-header {
      height: 25rem;
      width: 100%;
    }
    .header-search {
      width: 23rem;
    }
    .container-header-minified {
      position: fixed;
      width: 100%;
      height: 8rem;
      background-image: url("../assets/header-img4-dark.jpg");
      background-size: cover;
      background-position-y: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 4rem;
    }
  }
</style>