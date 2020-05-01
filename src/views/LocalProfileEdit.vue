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
          
            <TheImagePreview />
          
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

                  <div class="search-container">
                    <v-icon style="left:0.9rem;">mdi-map-search-outline</v-icon>
                    <vue-google-autocomplete
                      v-model="form.localCity"
                      id="map"
                      ref="citySearch"
                      classname="form-control autocomplete-bar"
                      placeholder="Your City"
                      v-on:placechanged="getCity"
                      types="(cities)"
                    >
                    </vue-google-autocomplete>
                  </div>                 

                  <div class="quote-section">
                      <v-icon class="opening-quote">mdi-format-quote-open</v-icon>
                      <v-textarea
                        v-model="form.quote"
                        prepend-inner-icon="mdi-comment-quote"
                        class="quote-field text-field"
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
<!-- End of card -->


    <div class="container profile-info-container">

      <form class="form container">
        <h4>I will show you ....</h4>
         <v-textarea
          v-model="form.tourDescription"
          prepend-inner-icon="mdi-comment"
          class="mx-2"
          label="What will the tourists have the chance to enjoy during a tour with you?"
          rows="3"
        ></v-textarea>

        <h4>About Me</h4>
         <v-textarea
          v-model="form.aboutMe"
          prepend-inner-icon="mdi-comment"
          class="mx-2"
          label="Who are you? By letting them know what makes you special, it'll increase your chance of being booked by tourists that are made for you! "
          rows="3"
        ></v-textarea>

        <h4>Your Hourly Rate</h4>
        <v-text-field
          v-model="form.hourlyRate"
          label="How much do you want to be paid for showind people around your city ?"
          value="10.00"
          prefix="€"
          suffix="per hour"
        ></v-text-field>
      </form>

      <v-btn
      dark
      rounded
      x-large
      color="#F38633"
      class="ma-0 btn-submit"
      :loading="loading"
      @click.prevent="onClickSubmit(form)"
    >
    Save changes
    </v-btn> 



    </div>
      
  </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import axios from 'axios';
import TheImagePreview from '../components/TheImagePreview'


export default {
    name: 'LocalProfileEdit',
    props: ['local_id'],
    components: {
      VueGoogleAutocomplete,
      TheImagePreview
    },
    data() {
      return {
        loading: false,
        form : {
          name:  '',
          localCity:  '',
          quote:  '',
          tourDescription:  '',
          aboutMe: '',
          languages: '',
          hourlyRate: '',
          profile_isComplete: true, // for now I return true, later we'll use it to verify if the profile is complete enough to apper in the LocalPreview browse
          localImage: null,
        }
      }
    },
    created() {
      this.setLocal(this.local_id)
    },
    methods: {
      onFileSelected(event) {
        const image = event.target;  
        this.form.localImage = URL.createObjectURL(image);  
        console.log('url: ' + URL.createObjectURL(image))
        console.log('image: ' + image)
      },
      async setLocal(local_id) {
        await axios.get(`http://localhost:3000/api/locals/id/${local_id}`).then(res => {
            const local = res.data[0]
            this.form.name = local.name
            this.form.localCity = local.localCity
            this.form.quote = local.quote
            this.form.tourDescription = local.tourDescription
            this.form.aboutMe = local.aboutMe
            this.form.languages = local.languages
            this.form.hourlyRate = local.hourlyRate
            this.form.localImage = local.localImage
				})	
      },
      getCity(city) {
        this.form.localCity = city;
        console.log(city);
      },
      async onClickSubmit(form) {
        this.loading = true;
        await axios.put(`http://localhost:3000/api/locals/id/${this.local_id}/update`, form).then(res => {
            console.log(res.data)
        });        
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
   width: 100%;
 }

 .img-preview {
   width: 100%;
   height: auto;
 }

  .card {
    width: 100%;
  }
 .card-horizontal {
    display: flex;
    flex: 1 1 auto;
  }

  .form {
    display: flex;
    flex-direction: column;
    max-width: 50rem;
  }
  .text-field {
    width: 41rem;
  }

  .search-container {
      display: flex;
      justify-content: center;
      align-content: flex-start;
      /* background-color: black; */
      width: 42rem;
      height: 3.5rem;
      margin-bottom: 2rem;
      margin-left: -1rem;
  }
  .autocomplete-bar {
    min-height: 3.5rem;
    border-radius: 5rem;
    color: #CED4DA;
    border-color: #CED4DA;
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

  .profile-info-container {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  .btn-submit {
    margin-top: 5rem;
  }

</style>