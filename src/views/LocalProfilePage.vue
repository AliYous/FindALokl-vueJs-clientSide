<template>
  <div v-if="local" class="container main-container">

      <LocalProfileHeader v-bind:local="local"/>

      <div class="profile-content container">
          <h3 class="explore-city-title">Explore <u>{{ local.localCity }}</u> with {{ local.name }} </h3>
					
					<!-- I will show you -->
                        <v-divider style="margin-top: 1rem"></v-divider>

						<LocalProfileAttribute 
                            v-if="!readMoreTourDesc"
							:attributeName="'I will show you'" 
							:attributeContent="local.tourDescription.slice(0, 150)" 
							:isLanguages="false"
						/>
                        <LocalProfileAttribute 
                            v-if="readMoreTourDesc"
							:attributeName="'I will show you'" 
							:attributeContent="local.tourDescription" 
							:isLanguages="false"
						/>
                        <a v-if="!readMoreTourDesc" @click="updateReadMoreActivated('tourDesc')" href="#" class="read-more-link">
                            Read more...
                        </a>
                        <a v-if="readMoreTourDesc" @click="updateReadMoreActivated('tourDesc')" href="#" class="read-more-link">
                            Read less
                        </a>
                        
                        <v-divider style="margin-top: 1rem"></v-divider>

					<!-- About Me -->
						<LocalProfileAttribute 
                            v-if="!readMoreAbout"
							:attributeName="'About me'" 
							:attributeContent="local.aboutMe.slice(0, 150)" 
							:isLanguages="false"
						/>
                        <LocalProfileAttribute 
                            v-if="readMoreAbout"
							:attributeName="'About me'" 
							:attributeContent="local.aboutMe" 
							:isLanguages="false"
						/>
                        <a v-if="!readMoreAbout" @click="updateReadMoreActivated('about')" href="#" class="read-more-link">
                            Read more...
                        </a>
                        <a v-if="readMoreAbout" @click="updateReadMoreActivated('about')" href="#" class="read-more-link">
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
        <!-- Only on mobile -->
        <MessageCreateDialog class="cta-hidden" style="margin-bottom: 1rem" :localName="local.name" :btnBlock="true"/>

      </div>

      <ReviewList :local="local" />

     

  </div>
</template>

<script>
import LocalProfileHeader from '../components/locals/LocalProfileHeader';
import LocalProfileAttribute from '../components/locals/LocalProfileAttribute';
import ReviewList from '../components/reviews/ReviewList';
import MessageCreateDialog from '../components/messages/MessageCreateDialog'
import axios from '@/axios';

export default {
    name: 'LocalProfilePage',
    props: ['local_id'],
    components: {
				LocalProfileHeader,
                LocalProfileAttribute,
                ReviewList,
                MessageCreateDialog
    },
    data() {
        return {
            loading: false,
            local: null,
            readMoreTourDesc: false,
            readMoreAbout: false
        }
    },
    created() {
        this.fetchLocal(this.local_id);
    },
    methods: {
        fetchLocal(local_id) {
            this.loading = true;
            axios.get(`/locals/id/${local_id}`).then(res => {
                this.loading = false;
                this.local = res.data[0];
                console.log(res.data[0])
            })
        },
        updateReadMoreActivated(attribute) {
            if (attribute === 'about') { this.readMoreAbout = !this.readMoreAbout; }
            else if (attribute === 'tourDesc') { this.readMoreTourDesc = !this.readMoreTourDesc; }
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
    .read-more-link {
        margin-left: 20rem;
        margin-top: -1rem;
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