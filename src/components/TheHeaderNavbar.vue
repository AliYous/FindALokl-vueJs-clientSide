<template>
	<div class="header">		
		<v-card
			color="white"
			flat
		>
			<v-toolbar flat dense>
				<v-toolbar-title class="logo">FindaLokl</v-toolbar-title>

				<v-spacer></v-spacer>

				<div class="nav-links">
					<v-btn text>
						About the project
					</v-btn>
					
					<div class="btn-connect-sign">
						<v-btn class="btn-connect" outlined >
							Connect
						</v-btn>
						<v-btn class="btn-sign-up" dark color="#F38633">
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
</template>

<script>
export default {
    name: "TheHeaderNavbar"
}
</script>

<style scoped>

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