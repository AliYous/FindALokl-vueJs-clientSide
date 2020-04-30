<template>
	<v-dialog v-model="dialog" max-width="800">
		<div class="container-fluid">
			<v-card  class="mx-auto card" max-width="700">

				<v-icon color="black" class="close-cross" @click="closeDialog">mdi-close-circle</v-icon>
				
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

						<v-btn v-if="!userExists" color="#F38633" :loading='loading' rounded x-large dark @click="onSignUp">Register</v-btn>
						<v-btn v-if="userExists" color="#F38633" :loading='loading' rounded x-large dark @click="onSignIn">Sign in</v-btn>
					</form>

					<a v-if="!userExists" @click="changeUserExistsBool" role="button" class="already-member-text">Already a member?</a>
					<a v-if="userExists" @click="changeUserExistsBool" role="button" class="already-member-text">Create an account</a>

			</v-card>
		</div>
	</v-dialog>
</template>

<script>
	import {bus} from '../main';
	import { mapActions } from 'vuex';

	export default {
		name: 'TheAuthDialog',
		created () {
			var vm = this
			bus.$on('dialog', function (showDialog, registerAsLocal, userExists) {
			vm.dialog = showDialog;
			vm.registerAsLocal = registerAsLocal;
			vm.userExists = userExists;
			})
		},
		data() {
			return {
				dialog: false,
				form: {
					first_name: '',
					email: '', 
					password: '',
					password_confirmation: ''
				},
				userExists: true,
				loading: false,
				registerAsLocal: false,
				error: null
			}
		},
		methods: {
			...mapActions(['login', 'register']),

			async onSignIn() {
				this.loading = true;
				let email = this.form.email;
				let password = this.form.password;
				try {
					const user = await this.login({email, password})
					if(user.isLocal && user.firstTimeVisit) {
						console.log("user is first visitor : " + user)
					}
					this.loading = false;
					this.dialog = false;
				} catch(err) {
					console.log(err)
				}				
			},
			onSignUp() {
				this.loading = true;
				const data = {
					name: this.form.first_name,
					email: this.form.email,
					password: this.form.password,
					isLocal: this.registerAsLocal
				};
				this.register(data).then(() => {
					this.loading = false;
					this.userExists = true;
				});
			},
			changeUserExistsBool() {
				this.userExists = !this.userExists;
			},
			closeDialog() {
				this.dialog = false;
			}
		}
	}
</script>

<style scoped>


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

	.close-cross {
		top: 0;
		margin-left: 95%;
		font-size: 25px;
	}
	.close-cross:hover {
		cursor: pointer;
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
	.already-member-text {
		font-size: 20px;
	}
	
	.error {
		color: #EE5C66;
	}
</style>