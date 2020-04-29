<template>
  <div class="main">
    <TheHeaderImgAndSearch  v-bind:minified="true"/>

    <div class="top-text">
      <h4> Explore <u>Paris, France</u>, with one of 722 Locals </h4>
    </div>

    <div class="local-previews-list container-fluid">
        <div class="local-previews-row row" v-for="local in locals" :key="local._id">
            <LocalPreviewItem v-bind:local="local" />
        </div>
    </div>

  </div>
</template>

<script>
import TheHeaderImgAndSearch  from '../components/TheHeaderImgAndSearch'
import LocalPreviewItem  from '../components/locals/LocalPreviewItem'


export default {
  name: 'BrowseLocals',
  components: {
    TheHeaderImgAndSearch,
    LocalPreviewItem
  },
  data() {
    return {
      locals: [
        {
          _id: '001',
          name: 'Tanya',
          city: 'Paris, France',
          hourlyRate: 25,
          quote: 'Enjoy Life to the fullest'
        },
        {
          _id: '002',
          name: 'Eric',
          city: 'Paris, France',
          hourlyRate: 25,
          quote: 'Come take a tour'
        },
        {
          _id: '003',
          name: 'Thomas',
          city: 'Paris, France',
          hourlyRate: 25,
          quote: 'Tour with me = happy'
        },
      ]
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