<template>
      <div class="main">
            <v-card raised min-width="45rem" class="main-card" @click.prevent="onPreviewClick(localPreview.local_id)">
                <div class="card-horizontal" >
                    <div class="img-square-wrapper">
                        <!-- <img class="" src="http://via.placeholder.com/200x200" alt="Card image cap"> -->
                        <img class="" :src="localPreview.localImage" alt="Card image cap">
                    </div>
                    <div class="card-body">
                      
                      <div class="name-city-price-container container-fluid row">
                          <div class="name-price-col col">
                              <h5 class="local-name">{{ localPreview.name }}</h5>
                              <h6 class="city-name">{{ localPreview.localCity }}</h6>
                          </div>
                          <h4 class="price">€ {{localPreview.hourlyRate}}/h</h4>
                      </div>

                      <v-divider style="margin-top: -0.5rem"></v-divider>

                      <!-- Local's quote -->
                      <div class="quote-row row container" style="height: 7rem">
                        <v-icon class="opening-quote">mdi-format-quote-open</v-icon>
                          <p class="card-text">{{ localPreview.quote }}</p>
                        <v-icon class="closing-quote">mdi-format-quote-close</v-icon>
                      </div>     
                      <!--  -->

                      <v-divider style="margin-top: -0.5rem"></v-divider>

                    </div>
                </div>
                
            </v-card>
       </div>
</template>

<script>

export default {
  name: 'LocalPreviewItem',
  props: ['localPreview'],
  methods: {
    onPreviewClick(local_id) {
      this.$router.push({name : "LocalProfilePage", params: {local_id: local_id} });
    }
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,700;1,900&display=swap');

  .main {
    display: flex;
    align-items: center;
  }
  .main-card:hover {
    cursor: pointer;
  }
  .img-square-wrapper {
    height: 200px;
    width: 200px;
  }
  img {
    width: 100%;
    height: auto;
  }
  .card-body {
    width: 39rem;
    padding-top: 0.3rem;
    padding-bottom: 0;
  }
  .card-horizontal {
    display: flex;
    flex: 1 1 auto;
  }

  .name-city-price-container {
    align-items: center;
  }
  .local-name {
    font-family: 'Poppins:ital';
  }
  .price {
    font-family: 'Poppins:ital';
    color: #058CF7;
    /* margin-top: 2.3rem; */
  }
  .city-name {
    margin-top: -0.6rem;
    color: #979A87;
  }

  .quote-row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -1rem;
  }
  .opening-quote {
    top:-2rem;
    left: -8rem;
  }
  .closing-quote {
    top: 2rem;
    left: 8rem;
  }


</style>