<template>
<h1>
	<template v-if="isTheTheme">
	<div id="dashboard">
        <nav>
            <router-link to="/dashboard/chat"><i class="fas fa-comment fa-3x"></i></router-link>
            <router-link to="/dashboard/search"><i class="fas fa-search fa-3x"></i></router-link>
            <router-link to="/dashboard/settings"><i class="fas fa-cog fa-3x"></i></router-link>
			<router-link to="/dashboard/speech">S</router-link>
            <router-link to="" @click.native="confirmSignOut"><i class="fas fa-sign-out-alt fa-3x"></i></router-link>
        </nav>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<template v-else>
<div id="dashboard-light">
	<nav>
		<router-link to="/dashboard/chat"><i class="fas fa-comment fa-3x"></i></router-link>
		<router-link to="/dashboard/search"><i class="fas fa-search fa-3x"></i></router-link>
		<router-link to="/dashboard/settings"><i class="fas fa-cog fa-3x"></i></router-link>
		<router-link to="" @click.native="confirmSignOut"><i class="fas fa-sign-out-alt fa-3x"></i></router-link>
	</nav>
	<div>
		<router-view></router-view>
	</div>
</div>
</template>
	</h1>
</template>

<script>
import {
	signout
} from '../user.js'
import Settings from './Settings.vue'
import { create } from 'domain';
import {users} from '../firebaseConfig.js'
export default {

	name: 'Dashboard',
	data: function() {
		return {
			isTheTheme: true,
		}

	},
	methods: {
		logout: function() {
			this.$toast.open('Signed Out From Your Account!')
			signout()
			this.$router.push('/login')
		},
		confirmSignOut: function() {
			this.$dialog.confirm({
				title: 'Sign Out',
				message: 'Are you sure you want to <b>sign out</b> from this account?',
				confirmText: 'Sign Out',
				type: 'is-danger',
				hasIcon: true,
				onConfirm: () => this.logout()
			})
		},
		updateTheme: function() {
			if (this.isTheTheme == true) {
				this.isTheTheme = false;
				console.log("1");
			} else {
				this.isTheTheme = true;
				console.log("2");
			}
		}
	},

	mounted: function() {
		//Settings.data() will return an object having all the variables from that page.
		var vm = this;
		vm.$on("updatetheme", function(value) {
			vm.isTheTheme = value;
		});
	},
	created :  function(){
		var vm = this 
		let email = localStorage.getItem("email")
users.where("email", "==", email)
    .onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            if (change.type === "added") {
                console.log("User added: ", change.doc.data());
            }
            if (change.type === "modified") {
				console.log("Modified user: ", change.doc.data());
				vm.$store.commit("setCurrentUserDetails",doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
        });
    });
}
}
</script>

<style lang="scss" scoped>
h1{
	margin: 0 ;
}
#dashboard {
	overflow-y: hidden;
	display: grid;
	grid-template-columns: 5% 95%;
	height: 100vh;
	width: 100%;
	min-width: 100vw;
	background-image: linear-gradient(
		to left,
		#1f0c43,
		#26062d,
		#22031c,
		#18010d,
		#000000
	);
	text-align: center;
}
#dashboard-light {
	overflow-y: hidden;
	display: grid;
	grid-template-columns: 5% 95%;
	min-height: 100vh;
	width: 100%;
	min-width: 100vw;
	background-image: radial-gradient(
		circle,
		#a8eb12,
		#00bf72,
		#008793,
		#004d7a,
		#051937
	);
	text-align: center;
}
nav {
	height: 100vh;
	padding: 0.5em;
	display: flex;
	flex-direction: column;
	background-color: black;
	justify-content: space-around;
	color: rgb(145, 53, 53) ;
}
#back-settings {
	min-width: 100vw;
	height: 100vh;
	// background-image: radial-gradient(circle, #1f0c43, #2d062f, #2c071f, #260b14, #1c0f0f); // background-image: linear-gradient(to left top, #1f0c43, #26062d, #22031c, #18010d, #000000); // background-color: darken($color: rgba(0, 0, 0, 0.90), $amount: 80%); // background-color: white;
	background-image: linear-gradient(
		to left,
		#1f0c43,
		#26062d,
		#22031c,
		#18010d,
		#000000
	);
	text-align: center;
	color: #000000;
}
</style>
