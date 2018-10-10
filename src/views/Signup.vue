<template>
<div id="signup">
	<div id="signhero">
	</div>
	<form>

		<b-field label="Name">
			<b-input v-model.trim="name" value="name" icon-pack="fas" icon="user" placeholder="Name"></b-input>
		</b-field>

		<b-field label="EmailID">
			<b-input v-model.trim="email" value="email" icon="email" type="email" placeholder="Email ID"></b-input>
		</b-field>

		<b-field label="Username">
			<b-input id="usernameid" v-model.trim="username" value="username" placeholder="Username" icon="face">
			</b-input>
		</b-field>

		<b-field label="Password">
			<b-input v-model.trim="password" value="password" type="password" placeholder="Password" icon-pack="fas" icon="lock">
				password-reveal>
			</b-input>
		</b-field>

		<div class="field is-grouped">
			<div class="control">
				<button @click.prevent="confirmTOS" class="button is-link">Sign Up</button>
			</div>
			<div class="control">
				<router-link tag=button class="button is-text" to="/">Cancel</router-link>
			</div>
		</div>

		<h1>{{printerr}}</h1>
	</form>

</div>
</template>

<script>
import {
	firebase
} from "@/firebaseConfig.js";
import _ from "underscore";
import axios from "axios";
import Chatkit from "@pusher/chatkit-server";
export default {
	name: "signup",
	data: function() {
		return {
			email: "",
			password: "",
			username: "",
			printerr: "",
			name: "",
			usernameValid: false,
			isFullPage: true
		};
	},
	methods: {
		register: function() {
			var vm = this;
			if (this.usernameValid) {
				const chatkit = new Chatkit.default({
					instanceLocator: "v1:us1:8e862fe0-1264-46d3-9c2a-ee84030cbfe0",
					key: "1a0f59d5-a1f6-49b6-a5eb-ec10b28e5593:ufU+fTEZWiHvFb6m8c60N45rhKRSnYeIWyBPryTW39w=",
				});
				chatkit.createUser({
						id: vm.username,
						name: vm.name,
					})
					.then(() => {
						console.log('User created successfully');
					}).catch((err) => {
						console.log(err);
					});
			} else {
				this.$toast.open("Username is invalid!");
			}
		},
		confirmTOS() {
			var vm = this;
			this.$dialog.confirm({
				title: "Terms Of Service",
				message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce id fermentum quam. Proin sagittis,
                        nibh id hendrerit imperdiet, elit sapien laoreet elit,
                        ac scelerisque diam velit in nisl. Nunc maximus ex non
                        laoreet semper. Nunc scelerisque, libero sit amet pretium dignissim,
                        augue purus placerat justo,
                        sit amet porttitor dui metus in nisl.
                        Nulla non leo placerat, porta metus eu, laoreet risus.
                        Etiam lacinia, purus eu luctus maximus, elit ex viverra tellus,
                        sit amet sodales quam dui nec odio.
                        Nullam porta mollis est. Quisque aliquet malesuada fringilla.
                        Pellentesque volutpat lacus at ante posuere,
                        non pulvinar ante porta. Proin viverra eu massa nec porta.
                        Aliquam rhoncus velit quis sem hendrerit,
                        ut dictum nisl accumsan. Maecenas erat enim, scelerisque non ligula ac,
                        eleifend venenatis ligula.
                        Praesent molestie mauris sed elit posuere, non malesuada libero gravida.
                        In hac habitasse platea dictumst.
                        Pellentesque habitant morbi tristique senectus
                        et netus et malesuada fames ac turpis egestas.`,
				cancelText: "Disagree",
				confirmText: "Agree",
				type: "is-success",
				onConfirm: () => vm.register(),
				onReject: () => this.$toast.open("You must agree to the Terms Of Service")
			});
		},
		success() {
			this.$toast.open({
				message: "User Created Successfuly",
				type: "is-success"
			});
		},
		open() {
			const loadingComponent = this.$loading.open({
				container: this.isFullPage ? null : this.$refs.element.$el
			});
			setTimeout(() => {
				loadingComponent.close();
				this.$router.replace("login");
			}, 1000);
		}
	},
	watch: {
		username: function(value, oldValue) {
			document.getElementById("usernameid").classList.remove("is-success");
			document.getElementById("usernameid").classList.remove("is-danger");
			document.getElementById("usernameid").setCustomValidity("Checking availability...");
			this.usernameValid = false;
			var vm = this;
			if (value.length >= 6) {
				firebase.firestore().collection("users").doc(value).get()
					.then((doc) => {
						if (doc.exists) {
							document.getElementById("usernameid").classList.add("is-danger");
							document.getElementById("usernameid").classList.remove("is-success");
							document.getElementById("usernameid").setCustomValidity("Username not available!");
						} else {
							vm.usernameValid = true;
							document.getElementById("usernameid").classList.add("is-success");
							document.getElementById("usernameid").classList.remove("is-danger");
							document.getElementById("usernameid").setCustomValidity("");
						}
					})
					.catch((err) => {
						console.log(err);
					});
			} else {
				document.getElementById("usernameid").classList.add("is-danger");
				document.getElementById("usernameid").classList.remove("is-success");
				document.getElementById("usernameid").setCustomValidity("Username too small!");
			}
		}
	}
};
</script>

<style lang="scss" scoped>
form {
	float: left;
	padding: 100px;
	//width: 30%;
}

#signup {
	//padding: 100px 500px 100px 500px;
	height: 100vh;
	display: grid;
	grid-template-columns: 60% 40%;
	// width: 30%
}

#signhero {
	background: url("../assets/signup.png");
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
