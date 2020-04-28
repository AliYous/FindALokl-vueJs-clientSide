<template>
    <v-text-field
        label="Where next?"
        rounded
        v-model="email"
        solo
        prepend-inner-icon="mdi-map-search-outline"
        @keypress.enter="onSubmit">

        <template v-slot:append>
            <v-btn
            dark
            rounded
            x-large
            :loading="loading"
            color="#F38633"
            class="ma-0"
            style="right:-3rem;"
            @click="onSubmit">
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