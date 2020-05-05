<template>
      <div class="main">
            <v-card raised class="main-card">
                <div class="card-horizontal" >
                  
                    <div 
                      class="imagePreviewWrapper"
                      :style="{ 'background-image': `url(${local.localImage})` }">
                    </div>

                    <div class="card-body">
                      
                      <div class="name-city-price-container container-fluid row">
                          <div class="name-price-col col">
                              <h5 class="local-name">{{ local.name }}</h5>
                              <h6 class="city-name">{{ local.localCity }}</h6>
                          </div>
                          <h4 class="price">€ {{local.hourlyRate}}/h</h4>
                      </div>

                      <v-divider ></v-divider>

                      <!-- Local's quote -->
                      <div class="quote-row container" style="height: 5rem">
                        <v-icon class="opening-quote">mdi-format-quote-open</v-icon>
                          <p class="card-text">{{ local.quote }}</p>
                        <v-icon class="closing-quote">mdi-format-quote-close</v-icon>
                      </div>     
                      <!--  -->

                      <v-divider ></v-divider>

                      <v-btn
                        color="#F38633"
                        block
                        dark      
                        style="margin-bottom: 1rem"      
                      >
                        Contact {{local.name}} 
                      </v-btn>
                    </div>
                </div>
                
            </v-card>
       </div>
</template>

<script>
export default {
    name: 'LocalProfileHeader',
    props: ['local']

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,700;1,900&display=swap');

  .main {
    display: flex;
    align-items: center;
    align-content: center;
  }
  .main-card {
    height: 19.15rem;
  }
  .imagePreviewWrapper {
    width: 306px;
    height: 306px;
    display: block;
    margin: 0 auto 0;
    background-size: cover;
    background-position: center center;
  }

  .card-body {
    width: 39rem;
    display: flex;
    flex-direction: column;
    padding-top: 0.3rem;
    padding-bottom: 0;
  }
  .card-horizontal {
    display: flex;
    flex: 1 1 auto;
  }

  .name-city-price-container {
    align-items: center;
    margin-top: 1rem;
  }
  .local-name {
    font-family: 'Poppins:ital';
  }
  .price {
    font-family: 'Poppins:ital';
    color: #F38633;
    font-size: 30px;
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
    left: -3.5rem;
  }
  .closing-quote {
    top: 2rem;
    left: 3.5rem;
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
        width: 320px;
        height: 320px;
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