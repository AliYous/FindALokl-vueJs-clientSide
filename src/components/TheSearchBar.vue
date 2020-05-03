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
    data() {
        return {
            city: '', //this.$store.state.citySearched,
            loading: false
        }
    },
    mounted() {
        this.$refs.citySearch.focus();
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
}
.autocomplete-bar {
    margin: 0 0 0 -2rem;
    padding: 0 0 0 2.5rem;
    width: 80%;
    height: 52px;
    border-radius: 20px;
}
.search-btn {
  right: 10%;
}

</style>