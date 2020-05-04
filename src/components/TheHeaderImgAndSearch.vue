<template>
    <div :class="{'container-header-minified': minify}" class="container-header">
      <!--  Image css  -->
      <div class="header-search">
        <h2 v-if="!minify">Find a Lokl</h2>
        <h3 v-if="!minify">To show you around</h3>
        <TheSearchBar />
      </div>
    </div>
</template>

<script>
import TheSearchBar from '../components/TheSearchBar'

export default {
    name: 'TheHeaderImgAndSearch',
    props: ['minified'],
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
    background-image: url("../assets/header-img4.jpg");
    background-size: cover;
    background-position-y: 80%;
  } 
  .container-header-minified {
        position: fixed;
        width: 100%;
        height: 8rem;
        background-image: url("../assets/header-img4.jpg");
        background-size: cover;
        background-position-y: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 4.7rem;
  }
  .header-search {
      width: 20%;
      color: white;
      display: flex;
      flex-direction: column;
      align-content: center;
      text-align:left;
      font-weight: bold;
  }
  h2 {
      font-family: 'Poppins:ital';
      font-size: 50px;
  }

   @media screen and (max-width: 768px) {
    .container-header {
      height: 25rem;
    }
  }
</style>