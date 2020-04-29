<template>
  <div>
    <TheHeaderImgAndSearch  v-bind:minified="true"/>

  </div>
</template>

<script>
import TheHeaderImgAndSearch  from '../components/TheHeaderImgAndSearch'

export default {
  name: 'BrowseLocals',
  components: {
    TheHeaderImgAndSearch
  }

}
</script>


<style scoped>

</style>