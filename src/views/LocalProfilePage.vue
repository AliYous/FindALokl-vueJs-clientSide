<template>
  <div>
      <LocalProfileHeader v-if="local" v-bind:local="local"/>
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
            loading: false,
            local: {}
        }
    },
    created() {
        this.fetchLocal(this.local_id);
    },
    methods: {
        fetchLocal(local_id) {
            this.loading = true;
            axios.get(`http://localhost:3000/api/locals/id/${local_id}`).then(res => {
                console.log(res.data[0]);
                this.loading = false;
                this.local = res.data[0];
            })
        }
    }
}
</script>

<style>

</style>