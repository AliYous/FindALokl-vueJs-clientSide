<template>
    <div class="search-container">

        <v-icon style="left:0.5rem;">mdi-map-search-outline</v-icon>
        <vue-google-autocomplete
            id="map"
            ref="citySearch"
            class="autocomplete-bar"
            classname="form-control"
            placeholder="Where Next?"
            v-on:placechanged="getCity"
            types="(cities)"
        >
        </vue-google-autocomplete>
        
        <v-btn 
            color="#F38633" 
            class="search-btn" 
            x-large 
            dark 
            rounded
            @click="browseLocals(city)"
        >
        Browse Locals
        </v-btn>

        
        <!-- <v-text-field
            label="Where next?"
            rounded
            solo
            prepend-inner-icon="mdi-map-search-outline"
            class="text-field"
        >
            <vue-google-autocomplete
                id="map"
                ref="citySearch"
                class="autocomplete-bar"
                classname="form-control"
                placeholder="Start typing"
                v-on:placechanged="getCity"
                types="(cities)"
            >
            </vue-google-autocomplete>

            <template v-slot:append>
                <v-btn
                dark
                rounded
                x-large
                color="#F38633"
                class="ma-0"
                style="right:-3rem;"
                >
                Browse locals
                </v-btn>              
            </template>
            
        </v-text-field> -->

    </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'

export default {
    components: {
        VueGoogleAutocomplete
    },
    data() {
        return {
            city: {}
        }
    },

    methods: {
        getCity(city) {
            this.city = city;
            console.log(city);
        },
        browseLocals(city) {
            console.log(city);
            this.$router.push({ name: 'BrowseLocals'});
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