<template>
    <div class="search-container">
        <v-icon style="left:0.5rem;">mdi-map-search-outline</v-icon>
        <vue-google-autocomplete
            v-model="city"
            id="map"
            ref="citySearch"
            class="autocomplete-bar"
            classname="form-control"
            placeholder="Where Next?"
            types="(cities)"
            v-on:placechanged="getCity"
        >
        </vue-google-autocomplete> -->
        
        <v-btn 
            color="#F38633" 
            class="search-btn" 
            x-large 
            dark 
            rounded
            :loading="loading"
            @click="browseLocals(city)"
        >
        Browse Locals
        </v-btn>

    </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete';
// import axios from 'axios';

export default {
    components: {
        VueGoogleAutocomplete
    },
    props: ['citySearched'],
    data() {
        return {
            city:'',
            loading: false
        }
    },
    mounted() {
        this.$refs.citySearch.update(this.$props.citySearched);
    },
    methods: {
        getCity(addressData) {
            this.city = addressData.locality + ", " + addressData.country;
        },
        browseLocals(city) {
            this.loading = true;
            this.$router.push({ name: 'BrowseLocals', params: {city: city}});
        }
    }

}
</script>

<style scoped>
.search-container {
    display: flex;
    width: 200%;
}
.autocomplete-bar {
    margin: 0 0 0 -2rem;
    padding: 0 0 0 2.5rem;
    border-radius: 30px;
}
.autocomplete-bar:focus {
    border: 0px solid #ffffff !important;
}
.search-btn {
  right: 15%;
  margin-top: 0.096rem;
}

</style>