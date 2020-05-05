<template>
  <v-app>
    <!-- Header nav component  -->
    <div class="header">
      <TheHeaderNavbar/>
    </div>
    
    <v-content class="content-container">
      <!-- <AllComponents/> -->
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import TheHeaderNavbar from './components/TheHeaderNavbar';

export default {
  name: 'App',

  components: {
    TheHeaderNavbar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins';
    max-width: 100%;
  }

  .content-container {
    margin-top: 6.5vh;
    z-index: 0;
    overflow-x: hidden;
  }
  /* .header {
    overflow-x: hidden;
  } */
</style>