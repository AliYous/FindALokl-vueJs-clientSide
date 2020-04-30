<template>
    <div class="local-previews-list container">
        <div class="local-previews-row" v-for="localPreview in browseLocalsList" :key="localPreview._id">
            <LocalPreviewItem v-bind:localPreview="localPreview" />
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
  .local-previews-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: auto;
  }
  .local-previews-row {
    align-items: center;
  }
</style>