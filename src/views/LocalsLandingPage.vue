<template>
  <div class="main">
		<div class="container-header">
			<h1>Sign up as a Lokl</h1>
			<h2>Show travellers around and make money</h2>
			<v-btn @click.prevent="onSignUpClick()" class="btn-sign-up" dark x-large color="#F38633">
				Sign Up as a local
			</v-btn>
		</div>

		<div class="container-fluid">
			<v-card
					max-width="60%"
					class="mx-auto main-card"
					raised
				>
					<v-list-item>
						<v-list-item-content>
							<v-list-item-title class="headline">Become a Lokl</v-list-item-title>
							<p>Anyone can do it!</p>
						</v-list-item-content>
					</v-list-item>
					
				</v-card>
		</div>

	</div>
</template>

<script>
import { bus } from '../main';

export default {
		name: 'LocalsLandingPage',
		methods: {
			onSignUpClick() {
			bus.$emit('dialog', true, true, false) // emit the event to the bus, 1st param always true, second param is true if the user wants to register as local, 3rd param is userExists?
		}
		}
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
	background-image: url("../assets/header-img4.jpg");
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
	top:23rem;
	text-align: center;
}

</style>