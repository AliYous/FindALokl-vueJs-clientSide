<template>
  <div class="main">
    <TheHeaderImgAndSearch  v-bind:minified="true"/>

    <div class="top-text">
      <h4> Explore <u>{{ lastSearchInput }}</u>, with one of 722 Locals </h4>
    </div>

    <LocalPreviewList />

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
    this.fetchLocalPreviews(this.city); // city is passed down from dynamic url params
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(['fetchLocalPreviews']),

  }
}
</script>


<style scoped>

  .top-text {
    margin-top: 6.5rem;
    text-align: center;
  }
</style>