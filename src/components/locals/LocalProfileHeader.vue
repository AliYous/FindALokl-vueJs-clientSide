<template>
  <div class="main">
    <div class="container main-info-container">
      <v-card  class="mx-auto card" max-width="100%">
          <div class="card-horizontal">
              <div class="img-square-wrapper">
                  <img class="" src="http://via.placeholder.com/350x350" alt="Card image cap">
              </div>
              <div class="card-body">
                <div class="local-info">
                  <div class="city-profile">
                    <h4 class="card-title">{{ local.name }}</h4>
                    <h6 class="city-name">{{ local.localCity }}</h6>
                  </div>
                  <h5 class="price">€ {{ local.hourlyRate }} /h</h5>
                </div>
                  <p class="card-text">{{ local.quote }}</p>
              </div>
          </div>
      </v-card>
    </div>
      
  </div>
</template>

<script>
export default {
    name: 'LocalProfileHeader',
    props: ['local']

}
</script>

<style>
 .main {
   display: flex;
   justify-content: center;
   width:100%;
 }
 .main-info-container {
   display: flex;
   /* background-color: black; */
 }

  .card {
    width: 100%;
  }
 .card-horizontal {
    display: flex;
    flex: 1 1 auto;
  }

  .local-info {
    display: flex;
    justify-content: space-between;
  }


</style>