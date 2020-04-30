<template>
  <div class="main">
    <div class="local-previews-list container-fluid">
        <div class="local-previews-row row" v-for="localPreview in browseLocalsList" :key="localPreview._id">
            <LocalPreviewItem v-bind:localPreview="localPreview" />
        </div>
    </div>
  </div>
</template>

<script>
import LocalPreviewItem  from './LocalPreviewItem'


export default {
  name: 'LocalPreviewList',
  components: {
    LocalPreviewItem
  },
  computed: {
    lastSearchInput () {
      return this.$store.getters.citySearched
    },
    browseLocalsList () {
      return this.$store.getters.lastLoadedLocals
    }
  },
  data() {
    return {


    }
  }

}
</script>


<style scoped>

  .top-text {
    margin-top: 10rem;
    text-align: center;
  }

  .local-previews-list {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 90%;
    height: 50rem;
  }
  .local-previews-row {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
</style>