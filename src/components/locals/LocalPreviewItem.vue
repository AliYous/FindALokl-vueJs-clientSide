<template>
      <div class="main">
            <v-card raised class="main-card" @click.prevent="onPreviewClick(localPreview.local_id)">
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

                      <!-- <v-divider class="divider" style="margin-top: -0.5rem"></v-divider> -->

                     <!-- Local's quote -->
                      <div class="quote-row container" style="height: 5rem">
                        <v-icon class="opening-quote">mdi-format-quote-open</v-icon>
                          <p class="card-text">{{ localPreview.quote }}</p>
                        <v-icon class="closing-quote">mdi-format-quote-close</v-icon>
                      </div>     
                      <!--  -->

                      <!-- <v-divider class="divider"></v-divider> -->

                      <div class="rating-row container">
                        <div class="rating-col">
                          <h6>Reviews</h6>
                          <h5>5</h5>
                        </div>
                        <div class="rating-col">
                          <h6>Rating</h6>
                          <h5>5 stars</h5>
                        </div>
                      </div>

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
    margin-top: -0.6rem;
    /* margin-bottom: -1rem; */
  }
  .card-text {
    width:80%;
    text-align: center;
    font-size: 15px;
  }
  .opening-quote {
    top:-2rem;
    left: -1rem;
  }
  .closing-quote {
    top: 2rem;
    left: 1rem;
  }

  .rating-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .rating-col {
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    color: #A3A3A3;
  }
  .review-number {
    color: #999999;
  }


  @media screen and (max-width: 768px) {
      .main-card {
        width: 20rem;
      }
     .card-horizontal {
        display: flex;
        flex-direction: column;
      }
      .imagePreviewWrapper {
        width: 307px;
        height: 307px;
        display: block;
        margin: 0 auto 0;
        background-size: cover;
        background-position: center center;
      }
      .card-body {
        width: auto;
      }
      .quote-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        /* margin-top: -3rem; */
      }
      .opening-quote {
        top:-2rem;
        left: 0rem;
      }
      .closing-quote {
        top: 1rem;
        left: -0.2rem;
      }
      .divider {
        display: none;
      }
  }

</style>