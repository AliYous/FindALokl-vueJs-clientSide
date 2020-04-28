<template>
	<v-dialog v-model="dialog" max-width="800">
		<div class="container-fluid">
			<v-card  class="mx-auto card" max-width="700">
				
				<h1 v-if="!userExists && registerAsLocal">Register As Local</h1>
				<h1 v-if="!userExists && !registerAsLocal">Register</h1>
				<h1 v-if="userExists">Sign in</h1>
				
				<div v-if="error" class="alert alert-danger error">{{error}}</div>
				
					<form class="form container">
						<v-text-field class="text-field"
						v-if="!userExists"
						v-model="form.first_name"
						required
						outlined
						color="#493E92"
						rounded
						label="First name"
						></v-text-field>

						<v-text-field class="text-field"
						v-model="form.email"
						required
						outlined
						color="#493E92"
						rounded
						label="Email"
						></v-text-field>

						<v-text-field
						v-model="form.password"
						required
						outlined
						color="#493E92"
						rounded
						label="Password"
						type="password"
						@keypress.enter="onSignIn"
						></v-text-field>

						<v-text-field
						v-if="!userExists"
						v-model="form.password_confirmation"
						required
						outlined
						color="#493E92"
						rounded
						label="Password confirmation"
						type="password"
						@keypress.enter="onSignUp"
						></v-text-field>

						<v-btn v-if="!userExists" color="#F38633" :loading='loading' rounded large dark @click="onSignUp">register</v-btn>
						<v-btn v-if="userExists" color="#F38633" :loading='loading' rounded large dark @click="onSignIn">Sign in</v-btn>


					</form>

					<a v-if="!userExists" @click="changeUserExistsBool" role="button" class="already-member-text">Already a member?</a>
					<a v-if="userExists" @click="changeUserExistsBool" role="button" class="already-member-text">Create an account</a>

			</v-card>
		</div>
	</v-dialog>
</template>

<script>
	import {bus} from '../main'   

	export default {
		name: 'TheAuthDialog',
		created () {
			var vm = this
			bus.$on('dialog', function (showDialog, registerAsLocal) {
			vm.dialog = showDialog;
			vm.registerAsLocal = registerAsLocal;
			})
		},
		data() {
			return {
				dialog: false,
				form: {
					first_name: '',
					email: '', //this.$props.emailInput,
					password: '',
					password_confirmation: ''
				},
				userExists: false, //this.$props.userExistsProps,
				loading: false, // for adding loading animation to submit btn
				registerAsLocal: false,
				error: null
			}
		},
		methods: {
			onSignIn() {
				console.log("SignIn")
			},
			onSignUp() {
				console.log("Signup")
			},
			changeUserExistsBool() {
				this.userExists = !this.userExists
			},
		}
	}
</script>

<style scoped>

	.image-container {
		position: absolute;
		min-width: 20%;
		top: 3.9em;
		right: -2em;
	} 
	img {
		height: auto;
		width: 100%;
	}

	.container-fluid {
		display: flex;
		position: absolute;
		flex-direction: column;
		align-items: center;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		width: 90%;
	}
	.card {
		padding: 1em;
		width: 100%;
	}

	h1 {
		margin-top: 1em;
		margin-bottom: 0.6em;
	}
	.form {
		position: relative;
		width: 80%;
		margin-bottom: 1em;

	}
	.text-field {
		margin-bottom: -0.6em;
	}

	.already-member-text:hover {
		text-decoration: underline;
	}
	
	.error {
		color: #EE5C66;
	}
</style>