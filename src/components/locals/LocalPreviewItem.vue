<template>
      <div class="main">
            <v-card raised min-width="45rem" class="main-card" @click.prevent="onPreviewClick(localPreview.local_id)">
                <div class="card-horizontal" >

                    <div 
                    class="imagePreviewWrapper"
                    :style="{ 'background-image': `url(${localPreview.localImage})` }">
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
                      <div class="quote-row container" style="height: 5rem">
                        <v-icon class="opening-quote">mdi-format-quote-open</v-icon>
                          <p class="card-text">{{ localPreview.quote }}</p>
                        <v-icon class="closing-quote">mdi-format-quote-close</v-icon>
                      </div>     
                      <!--  -->

                      <v-divider></v-divider>

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
  .imagePreviewWrapper {
    width: 200px;
    height: 200px;
    display: block;
    margin: 0 auto 0;
    background-size: cover;
    background-position: center center;
  }
  .card-body {
    width: 30rem;
    /* width: 39rem; */
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
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .card-text {
    width:80%;
    text-align: center;
  }
  .opening-quote {
    top:-2rem;
    left: -2.1rem;
  }
  .closing-quote {
    top: 2rem;
    left: 2.1rem;
  }


</style>