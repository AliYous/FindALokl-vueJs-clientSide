<template>
  <div v-if="local" class="container main-container">

      <LocalProfileHeader v-bind:local="local"/>

      <div class="profile-content container">
          <h3 class="explore-city-title">Explore <u>{{ local.localCity }}</u> with {{ local.name }} </h3>
					
					<!-- I will show you -->
          <v-divider style="margin-top: 1rem"></v-divider>

						<LocalProfileAttribute 
                            v-if="!readMoreActivated"
							:attributeName="'I will show you'" 
							:attributeContent="local.tourDescription.slice(0, 150)" 
							:isLanguages="false"
						/>
                        <LocalProfileAttribute 
                            v-if="readMoreActivated"
							:attributeName="'I will show you'" 
							:attributeContent="local.tourDescription" 
							:isLanguages="false"
						/>
                        <a v-if="!readMoreActivated" @click="updateReadMoreActivated" href="#">
                            Read more...
                        </a>
                        <a v-if="readMoreActivated" @click="updateReadMoreActivated" href="#">
                            Read less
                        </a>
          <v-divider style="margin-top: 1rem"></v-divider>

					<!-- About Me -->
						<LocalProfileAttribute 
                            v-if="!readMoreActivated"
							:attributeName="'About me'" 
							:attributeContent="local.aboutMe.slice(0, 150)" 
							:isLanguages="false"
						/>
                        <LocalProfileAttribute 
                            v-if="readMoreActivated"
							:attributeName="'About me'" 
							:attributeContent="local.aboutMe" 
							:isLanguages="false"
						/>
                        <a v-if="!readMoreActivated" @click="updateReadMoreActivated" href="#">
                            Read more...
                        </a>
                        <a v-if="readMoreActivated" @click="updateReadMoreActivated" href="#">
                            Read less
                        </a>
          <v-divider style="margin-top: 1rem"></v-divider>

					<!-- Languages -->
						<LocalProfileAttribute 
							:attributeName="'Languages'" 
							:attributeContent="local.languages" 
							:isLanguages="true"
						/>
          <v-divider style="margin-top: 1rem"></v-divider>

        <v-btn
            color="#F38633"
            class="cta-hidden"
            block
            dark      
            style="margin-bottom: 1rem"      
            >
            Contact {{local.name}} 
        </v-btn>

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
            local: null,
            readMoreActivated: false
        }
    },
    created() {
        this.fetchLocal(this.local_id);
    },
    methods: {
        fetchLocal(local_id) {
            this.loading = true;
            axios.get(`http://localhost:3000/api/locals/id/${local_id}`).then(res => {
                this.loading = false;
                this.local = res.data[0];
                console.log(res.data[0])
            })
        },
        updateReadMoreActivated() {
            this.readMoreActivated = !this.readMoreActivated;
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
    .cta-hidden {
        display: none;
    }

    @media screen and (max-width: 768px) {
        .profile-content {
            margin-top: 20rem;
            display: flex;
            flex-direction: column;
        }
        .cta-hidden {
            display: block;
        }
    }

		

</style>