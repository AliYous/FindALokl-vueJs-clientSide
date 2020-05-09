<template>
  <div class="main">
		<div class="container-header">
			<h1>Sign up as a Lokl</h1>
			<h2>Show travellers around and make money</h2>
			<v-btn @click.prevent="onSignUpClick()" dark x-large color="#F38633">
				Sign Up as a local
			</v-btn>
		</div>

		<div class="container-fluid">
			<v-card
					max-width="50%"
					class="mx-auto main-card"
				>
				<div class="row-container container-right container">
					<div class="side-image-container container">
						<img class="side-image" src="../assets/pale-welcome.png" alt="">
					</div>
					<div class="side-text-container container">
							<h3>Become a Lokl</h3>
							<p class="paragraph">Anyone can do it and that means you! You don't have to be a pro to show people around, just be yourself and let your guests discover the city you love.</p>
					</div>
				</div>

				<!-- <v-divider></v-divider> -->

				<div class="row-container container-left container">
					<div class="side-image-container container">
						<img class="side-image" src="../assets/payment-processed-6.png" alt="">
					</div>
					<div class="side-text-container container">
							<h3>Choose your price</h3>
							<p class="paragraph paragraph-left">You determine how much you want to make and can set your hourly rate accordingly. For every hour you’re out exploring, you’ll be earning.</p>
					</div>
				</div>
				
				<!-- <v-divider></v-divider> -->

				<div class="row-container container-right container">
					<div class="side-image-container container">
						<img class="side-image" src="../assets/payment.png" alt="">
					</div>
					<div class="side-text-container container">
							<h3>Show around! Earn Money.</h3>
							<p class="paragraph">Show your guests the best your city has to offer! As your reputation improves through ratings and reviews, so will your ranking in the search. The higher you’re ranked, the more offers you’ll get and the more money you’ll be able to make.</p>
					</div>
				</div>		
				
				<v-btn @click.prevent="onSignUpClick()" class="btn-sign-up" dark x-large color="#F38633">
					Sign Up as a local
				</v-btn>			
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
	top:23rem;
	text-align: left;
	margin-bottom: 4rem;
	padding-bottom: 2rem;
	align-items: center;
}
.row-container {
	display: flex;
	flex-direction: row;
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
	width: 45%
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
	font-size: 17px;
}
.paragraph {
	padding-right: 0rem;
}
.btn-sign-up {
	max-width: 14rem;
}

</style>