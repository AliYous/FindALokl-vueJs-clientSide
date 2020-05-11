<template>
  <div class="main">
    <div class="header">
      <TheHeaderImgAndSearch  v-bind:minified="true" :citySearched="city" />
    </div>

    <div class="top-text">
      <h4> Explore <u>{{ lastSearchInput }}</u>, with a Local! </h4>
    </div>

    <div v-if="loading" class="progress-circle container">
       <v-progress-circular indeterminate :size="70" :width="7" color="purple"></v-progress-circular>
    </div>
    <div class="list">
      <LocalPreviewList v-if="!loading"/>
    </div>

  </div>
</template>

<script>
import TheHeaderImgAndSearch  from '../components/TheHeaderImgAndSearch'
import LocalPreviewList  from '../components/locals/LocalPreviewList'
import { mapActions } from 'vuex'

export default {
  name: 'BrowseLocals',
  props: ['city'],
  components: {
    TheHeaderImgAndSearch,
    LocalPreviewList
  },
  computed: {
    lastSearchInput () {
      return this.$store.getters.citySearched
    },
    browseLocalsList () {
      return this.$store.getters.lastLoadedLocals
    }
  },
  created() {
    this.fetchLocalPreviews(this.city).then(() => {
      setTimeout(() => {  this.loading = false; }, 1000);
    }); 
  },
  data() {
    return {
      loading: true
    }
  },
  methods: {
    ...mapActions(['fetchLocalPreviews']),

  }
}
</script>


<style scoped>
  .header {
    z-index: 2;
  }
  .top-text {
    text-align: center;
    background-color: #fff;
    position: fixed;
    padding: 1em;
    width: 100%;
    left: 50%;
    top: 14.7rem;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  .progress-circle {
    display: flex;
    justify-content: center;
  }
  .list {
    z-index: 0;
    margin-top: 6%;
  }

 @media screen and (max-width: 768px) {
   .list {
     margin-top: 8rem;
   }
   .top-text {
     top: 14rem;
   }
}

</style>