<template>
      <div class="main" @click.prevent="onPreviewClick(localPreview.local_id)">
            <v-card raised width="65%">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class="" src="http://via.placeholder.com/200x200" alt="Card image cap">
                    </div>
                    <div class="card-body">
                      <div class="local-info">
                        <div class="city-profile">
                          <h4 class="card-title">{{ localPreview.name }}</h4>
                          <h6 class="city-name">{{ localPreview.city }}</h6>
                        </div>
                        <h5 class="price">€{{localPreview.hourlyRate}}/h</h5>
                      </div>
                        <p class="card-text">{{ localPreview.quote }}</p>
                    </div>
                </div>
            </v-card>
       </div>
</template>

<script>

export default {
  name: 'LocalPreviewItem',
  props: ['localPreview'],
  methods: {
    onPreviewClick(local_id) {
      this.$router.push({name : "LocalProfilePage", params: {local_id: local_id} });
    }
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,700;1,900&display=swap');

  .main:hover {
    cursor: pointer;
  }
  .main {
    display: flex;
    align-items: center;
  }
  .img-square-wrapper {
    height: 200px;
    width: 200px;
  }
  .card-title {
    font-family: 'Poppins:ital';
  }
  .card-horizontal {
    display: flex;
    flex: 1 1 auto;
  }
  .city-name {
    margin-top: -0.5rem;
  }

  .local-info {
    display: flex;
    justify-content: space-between;
  }


</style>