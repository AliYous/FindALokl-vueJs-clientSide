<template>
    <div class="main">

      <div class="container-fluid">
        <v-card
            max-width="60%"
            class="mx-auto main-card"
          >
              <h2 style="margin-bottom: 4rem">How it works ?</h2>

              <div class="row-container container-right container">
                <div class="side-image-container container">
                  <img class="side-image" src="../assets/lime-searching.png" alt="">
                </div>
                <div class="side-text-container container">
                    <p class="paragraph">Browse locals. Find the one you like</p>
                </div>
              </div>

              <div class="row-container container-right container">
                <div class="side-image-container container">
                  <img class="side-image" src="../assets/discuss.jpg" alt="">
                </div>
                <div class="side-text-container container">
                    <p class="paragraph">Plan and discuss activities before you meet</p>
                </div>
              </div>

              <div class="row-container container-right container">
                <div class="side-image-container container">
                  <img class="side-image" src="../assets/clip-travel.png" alt="">
                </div>
                <div class="side-text-container container">
                    <p class="paragraph">Witness the city through the eyes of a local</p>
                </div>
              </div>
            </v-card>
          </div>
      </div>
</template>

<script>
export default {
    name: 'HowItWorks'
}
</script>

<style scoped>
  
.main {
	display: flex;
	flex-direction: column;
}
.container-header {
	position: absolute;
	width: 100%;
	height: 20rem;
	background-image: url("../assets/header-img4-dark.jpg");
	background-size: cover;
	background-position-y: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	top: 1rem;
	color: white;
} 

.main-card {
	display: flex;
	flex-direction: column;
	top: -8rem;
	text-align: left;
	margin-bottom: 4rem;
	padding-bottom: 2rem;
  padding-top: 2rem;
	align-items: center;
}
.row-container {
	display: flex;
	flex-direction: row;
  height: 10rem;
  margin-bottom: 1.5rem;
}
.container-left {
	flex-direction: row-reverse;
}
.side-image-container {
	display: flex;
	flex-direction: row;
	align-items: center;
	align-content: center;
	justify-content: center;
	width: 30%
}
.side-image {
	border-radius: 50%;
	height: auto;
	width: 30rem;
}
.side-text-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-left: 2rem;
	width: 55%;
}
.paragraph {
	padding-right: 1rem;
  margin-left: -2rem;
	font-size: 17px;
}
.paragraph {
	padding-right: 0rem;
  font-size: 18px;
}
.btn-sign-up {
	max-width: 14rem;
}

</style>