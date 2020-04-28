<template>
	<div>
		<div class="header">		
			<v-card
				color="white"
				height="6vh"
				flat
			>
				<v-toolbar flat dense>
					<v-toolbar-title class="logo">FindaLokl</v-toolbar-title>

					<v-spacer></v-spacer>

					<div class="nav-links">
						<v-btn text>
							About this project
						</v-btn>
						
						<div class="btn-connect-sign">
							<v-btn @click.prevent="onConnectClick()" class="btn-connect" outlined >
								Connect
							</v-btn>
							
							<!-- 
								The signup will actually redirect to the locals landing page
							-->
							<v-btn @click.prevent="onSignUpClick()" class="btn-sign-up" dark color="#F38633">
								Sign Up as a local
							</v-btn>
						</div>
					</div>
					<div class="burger">
						<div class="line"></div>
						<div class="line"></div>
						<div class="line"></div>
					</div>
				</v-toolbar>
			</v-card>
		</div>

		<TheAuthDialog />

	</div>
	
</template>

<script>
import TheAuthDialog from '../components/TheAuthDialog'
import { bus } from '../main'

export default {
	name: "TheHeaderNavbar",
	components: {
		TheAuthDialog
	},
	data() {
		return {
			showAuthDialog: false,
			localSignupDialog: false // Will be used as a prop to the auth component to know if we sign up as user or local
		}
	},
	methods: {
		onConnectClick() {
			bus.$emit('dialog', true, false) // emit the event to the bus, 1st param always true, second param is true if the user wants to register as local
		},
		onSignUpClick() {
			bus.$emit('dialog', true, true) // emit the event to the bus, 1st param always true, second param is true if the user wants to register as local
		}
	}
}
</script>

<style scoped>
	.header {
		padding-top: 1rem;
		position: fixed;
		z-index: 1;
		width: 100%;
	}

	.logo {
		text-transform: uppercase;
		letter-spacing: 3px;
		font-size: 22px;
		margin-left: 3rem;
		color: #F38633;
	}

	.nav-links {
		display: flex;
		justify-content: space-around;
		min-width: 50%;
	}
	
	.btn-connect-sign {
		display: flex;
		justify-content: space-between;
		width: 20rem;
	}
	.btn-connect {
		right: 1rem;
		left: 1rem;
	}
	.btn-sign-up {
		left: 0.5rem;
	}

	.burger {
		display: none;
		cursor: pointer;
	}

	.burger div {
		width: 25px;
		height: 3px;
		background-color: black;
		margin: 5px;
	}

	@media screen and (max-width: 768px) {
		.logo {
			text-transform: uppercase;
			letter-spacing: 3px;
			font-size: 22px;
			margin-left: 3rem;
			color: #F38633;
		}

		.nav-links {
			position: absolute;
			right: 0px;
			height: 92vh;
			top: 8vh;
			background-color: #FFFFFF;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #f7e9e9 !important;
			width: 50%;
			/* transform: translateX(100%);
			transition: transform 0.5s ease-in; */
		}		
		.btn-connect-sign {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 60%;
		}

		/* .nav-links li {
			opacity: 0;
		} */
		.burger {
			display: block;
			/* margin-left: 90%; */
		}
	}



</style>