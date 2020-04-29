<template>
  <div class="main">
      <h1>Edit you Local profile</h1>

    <div class="container main-info-container">
      <v-card
      class="mx-auto card" 
      max-width="100%"
      raised
      >
        <div class="card-horizontal">
            <div class="img-square-wrapper">
                <img class="" src="http://via.placeholder.com/365x365" alt="Card image cap">
            </div>
            <div class="card-body">
              <form class="form container">
                  <v-text-field class="text-field"
                    prepend-inner-icon="mdi-account-cowboy-hat"
                    v-model="form.name"
                    required
                    outlined
                    color="#493E92"
                    rounded
                    label="First name"
                  ></v-text-field>
                  <v-text-field class="text-field"
                    prepend-inner-icon="mdi-map-marker-radius"
                    v-model="form.localCity"
                    required
                    outlined
                    color="#493E92"
                    rounded
                    label="Your city"
                  ></v-text-field>
                  <div class="quote-section">
                      <v-icon class="opening-quote">mdi-format-quote-open</v-icon>
                      <v-textarea
                        prepend-inner-icon="mdi-comment-quote"
                        class="quote-field"
                        label="Your favorite quote"
                        rows="2"
                        rounded
                        outlined
                        color="#493E92"                        
                      ></v-textarea>
                      <v-icon class="closing-quote">mdi-format-quote-close</v-icon>
                  </div>
              </form>
            </div>
        </div>

      </v-card>
    </div>
      
  </div>
</template>

<script>
export default {
    name: 'LocalProfileEdit',
    data() {
      return {
        form : {
          name: '',
          localCity: '',
          quote: '',
          about_me: '',
          languages: [],
          hourlyRate: null,
        }
      }
    }

}
</script>

<style>
  h1 {
    text-align: center;
  }
 .main {
   display: flex;
   justify-content: center;
   flex-direction: column;
   width:100%;
   margin-top: 6vh;
 }
 .main-info-container {
   display: flex;
 }

  .card {
    width: 100%;
  }
 .card-horizontal {
    display: flex;
    flex: 1 1 auto;
  }

  .quote-section {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    margin-top: -2.3%;
    /* padding-top: 3.2%; */
  }
  .opening-quote {
    right: 50%;
  }
  .closing-quote {
    left: 50%;
    bottom: 1.5rem;
  }





</style>