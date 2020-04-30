<template>
  <div>
      <LocalProfileHeader v-if="local" v-bind:local="local"/>
      <h1> {{local}} </h1>
  </div>
</template>

<script>
import LocalProfileHeader from '../components/locals/LocalProfileHeader';
import axios from 'axios';

export default {
    name: 'LocalProfilePage',
    props: ['local_id'],
    components: {
        LocalProfileHeader
    },
    data() {
        return {
            local: ''
        }
    },
    methods: {
        fetchLocal(local_id) {
            return axios.get(`http://localhost:3000/api/locals/id/${local_id}`).then(res => {
                console.log(res.data[0]);
            })
        }
    }
}
</script>

<style>

</style>