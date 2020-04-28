<template>
   <v-card
        max-width="65%"
        class="mx-auto main-card"
        raised
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline">How it works ?</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <div class="steps">
            <div class="individual-step">
                <img src="../assets/search.svg" alt="">
                <h5 class="margin-top">Browse locals. Find the one you like</h5>
            </div>
            <div class="individual-step">
                <img src="../assets/discuss.svg" alt="">
                <h5>Plan and discuss activities before you meet</h5>
            </div>
            <div class="individual-step">
                <img src="../assets/enjoy.svg" alt="">
                <h5 class="margin-top">Witness the city through the eyes of a local</h5>
            </div>
        </div>

      </v-card>
</template>

<script>
export default {
    name: 'HowItWorks'
}
</script>

<style scoped>
  .main-card {
    text-align: center;
  }

  .steps {
    margin-top: 3rem;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }

  .individual-step {
      width: 28%;
  }
  img {
      width: 90%;
  }
  .margin-top {
      margin-top: 2.5rem;
  }

</style>