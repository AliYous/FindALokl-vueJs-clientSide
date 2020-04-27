<template>
  <v-app>
    <!-- Header nav component  -->
    <TheHeaderNavbar/>
    
    <v-content>
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
  }
</style>