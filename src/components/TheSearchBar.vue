<template>
    <div class="search-container">
        <!-- Comment all this section when replacing with autocomplete -->
        <v-text-field
            v-model="city"
            label="Where next?"
            rounded
            solo
            prepend-inner-icon="mdi-map-search-outline"
            class="text-field"
            @keypress.enter="browseLocals(city)"
        >
        
            <template v-slot:append>
                <v-btn
                dark
                rounded
                x-large
                color="#F38633"
                class="ma-0"
                style="left:5rem;"
                @click="browseLocals(city)"
                >
                Browse locals
                </v-btn>              
            </template>
            
        </v-text-field>
        <!-- End of comment -->

        <!-- <v-icon style="left:0.5rem;">mdi-map-search-outline</v-icon>
        <vue-google-autocomplete
            id="map"
            ref="citySearch"
            class="autocomplete-bar"
            classname="form-control"
            placeholder="Where Next?"
            v-on:placechanged="getCity"
            types="(cities)"
        >
        </vue-google-autocomplete> -->
        
        <!-- <v-btn 
            color="#F38633" 
            class="search-btn" 
            x-large 
            dark 
            rounded
            :loading="loading"
            @click="browseLocals(city)"
        >
        Browse Locals
        </v-btn> -->

    </div>
</template>

<script>
// import VueGoogleAutocomplete from 'vue-google-autocomplete';
// import axios from 'axios';

export default {
    components: {
        // VueGoogleAutocomplete
    },
    data() {
        return {
            city: this.$store.state.citySearched || '',
            loading: false
        }
    },

    methods: {
        getCity(city) {
            this.city = city;
            console.log(city);
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