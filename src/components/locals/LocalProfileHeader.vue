<template>
      <div class="main">
            <v-card raised min-width="100%" class="main-card">
                <div class="card-horizontal" >
                    <div class="img-square-wrapper">
                        <!-- <img class="" src="http://via.placeholder.com/200x200" alt="Card image cap"> -->
                        <img class="" src="@/assets/tanya.jpg" alt="Card image cap">
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
                      <div class="quote-row row container" style="height: 5rem">
                        <v-icon class="opening-quote">mdi-format-quote-open</v-icon>
                          <p class="card-text">{{ local.quote }}</p>
                        <v-icon class="closing-quote">mdi-format-quote-close</v-icon>
                      </div>     
                      <!--  -->

                      <v-divider ></v-divider>

                      <v-btn>
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
  .img-square-wrapper {
    height: 365;
    width: 365;
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
    justify-content: center;
    align-items: center;
  }
  .opening-quote {
    top:-2rem;
    left: -16rem;
  }
  .closing-quote {
    top: 0.3rem;
    left: 16rem;
  }


</style>