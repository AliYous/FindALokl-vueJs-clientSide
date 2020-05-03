<template>
  <div class="container main-container">

      <LocalProfileHeader v-if="local" v-bind:local="local"/>

      <div class="profile-content container">
          <h3 class="explore-city-title">Explore {{ local.localCity }} with {{ local.name }} </h3>
					
					<!-- I will show you -->
          <v-divider style="margin-top: 1rem"></v-divider>

						<LocalProfileAttribute 
							:attributeName="'I will show you'" 
							:attributeContent="local.tourDescription" 
							:isLanguages="false"
						/>
          <v-divider style="margin-top: 1rem"></v-divider>

					<!-- About Me -->
						<LocalProfileAttribute 
							:attributeName="'About me'" 
							:attributeContent="local.aboutMe" 
							:isLanguages="false"
						/>
          <v-divider style="margin-top: 1rem"></v-divider>

					<!-- Languages -->
						<LocalProfileAttribute 
							:attributeName="'Languages'" 
							:attributeContent="local.languages" 
							:isLanguages="true"
						/>
          <v-divider style="margin-top: 1rem"></v-divider>

      </div>

  </div>
</template>

<script>
import LocalProfileHeader from '../components/locals/LocalProfileHeader';
import LocalProfileAttribute from '../components/locals/LocalProfileAttribute';

import axios from 'axios';

export default {
    name: 'LocalProfilePage',
    props: ['local_id'],
    components: {
				LocalProfileHeader,
				LocalProfileAttribute
    },
    data() {
        return {
            loading: false,
						local: {},
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

<style scoped>
    .main-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 60rem;
    }
    .profile-content {
        margin-top: 2rem;
				display: flex;
				flex-direction: column;
    }
		

</style>