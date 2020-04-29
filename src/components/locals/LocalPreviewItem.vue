<template>
      <div class="col-md-5 main" @click.prevent="onPreviewClick">
          <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class="" src="http://via.placeholder.com/200x200" alt="Card image cap">
                    </div>
                    <div class="card-body">
                      <div class="local-info">
                        <div class="city-profile">
                          <h4 class="card-title">{{ local.name }}</h4>
                          <h6 class="city-name">{{ local.city }}</h6>
                        </div>
                        <h5 class="price">€{{local.hourlyRate}}/h</h5>
                      </div>

                        <p class="card-text">{{ local.quote }}</p>
                    </div>
                </div>
            </div>
       </div>
</template>

<script>
export default {
  name: 'LocalPreviewItem',
  props: ['local'],
  methods: {
    onPreviewClick() {
      this.$router.push({ name : "LocalProfile" });
    }
  }

}
</script>

<style scoped>
  .main:hover {
    cursor: pointer;
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