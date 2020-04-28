<template>
    <v-text-field
        label="Where next?"
        rounded
        solo
        prepend-inner-icon="mdi-map-search-outline"
    >

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
        
    </v-text-field>
</template>

<script>
export default {

}
</script>

<style>

</style>