<template>
<div>
	<!--TODO:Fix placement-->
	<h1>Search</h1>
	<span class="fontin">This is your search screen !</span>
	<p class="fontin">Simply enter the User ID of your friend to get started.</p>
	<div id="cta">
		<input v-model.number="id" placeholder="User Id..." class="input is-rounded" v-on:keyup.13="searchUser" type="search">
		<button id="searchUserButton" @click="searchUser" class="btn btn-6 btn-6f"><i class="fas fa-search"></i> Search</button>
	</div>
	<div v-show="toshow" class="cta2">
		<div v-if="isresult" class="result">
			<user class="result" :name=result></user>
			<button id="addUserButton" @click="addUser" class="btn btn-6 btn-6f"><i class = "fas fa-plus"></i></button>
		</div>
		<div v-else-if="isFriend">
			<h1>User is already friend</h1>
		</div>
		<div v-else>
			<h1>No User exists by that ID</h1>
		</div>
	</div>
</div>
</template>

<script>
import {
	addFriend,
	isFriend,
	getFriends
} from '../chat.js'
import {
	users
} from '../firebaseConfig.js'
import user from "@/components/user.vue"
export default {
<<<<<<< HEAD
    name : 'Search',
    components:{
        user
    },
    data:function(){
        return{
            id:'',
            result : '',
            friend : '',
            toshow : false,
            isresult:false,
            isFriend:false
        }
    },
    methods:{
        searchUser : function(){
            var friendquery =  users.where("username", "==", this.id);
    friendquery.get() 
    .then( (snapshot)=>{
        snapshot.forEach((doc)=>{
            console.log(doc);
                this.displayUser(doc.data().username,doc.data().email);
})
        })            
            },
        
         displayUser : function(username , email){
            
            if(!username){
                this.result = 'none'
                this.toshow = true ;
                this.isresult = false ; 
             }
            else{
            this.result = email ;
            this.friend = username ;
            this.toshow = true ;
            this.isresult = true ;
            }
        },
        addUser: function(){
            
            console.log(this.friend)
            if(this.friend === this.$store.state.currentUserDetails.username){
                 this.$toast.open({message:`WHY Rahul WHY`,type:'is-danger'})
            }
            else if(isFriend(this.friend)){
                this.$toast.open({message:`User is already a friend`,type:'is-danger'})
            }
            else{
            addFriend(this.friend)
            this.$toast.open({message:`User ${this.friend} added to friends list`,type:'is-success'})
            }
            this.toshow = false
            this.friend=''
        }
    }
||||||| merged common ancestors
    name : 'Search',
    components:{
        user
    },
    data:function(){
        return{
            id:'',
            result : '',
            friend : '',
            toshow : false,
            isresult:false,
            isFriend:false
        }
    },
    methods:{
        searchUser : function(){
            var friendquery =  users.where("id", "==", this.id);
    friendquery.get() 
    .then( (snapshot)=>{
        snapshot.forEach((doc)=>{
                this.displayUser(doc.data().username,doc.data().email);
})
        })            
            },
        
         displayUser : function(username , email){
            
            if(!username){
                this.result = 'none'
                this.toshow = true ;
                this.isresult = false ; 
             }
            else{
            this.result = email ;
            this.friend = username ;
            this.toshow = true ;
            this.isresult = true ;
            }
        },
        addUser: function(){
            
            console.log(this.friend)
            if(this.friend === this.$store.state.currentUserDetails.username){
                 this.$toast.open({message:`WHY Rahul WHY`,type:'is-danger'})
            }
            else if(isFriend(this.friend)){
                this.$toast.open({message:`User is already a friend`,type:'is-danger'})
            }
            else{
            addFriend(this.friend)
            this.$toast.open({message:`User ${this.friend} added to friends list`,type:'is-success'})
            }
            this.toshow = false
            this.friend=''
        }
    }
=======
	name: 'Search',
	components: {
		user
	},
	data: function() {
		return {
			id: '',
			result: '',
			friend: '',
			toshow: false,
			isresult: false,
			isFriend: false
		}
	},
	methods: {
		searchUser: function() {
			document.getElementById("searchUserButton").disabled = true;
			var friendquery = users.where("id", "==", this.id);
			friendquery.get()
				.then((snapshot) => {
					if (!snapshot.empty) {
						document.getElementById("searchUserButton").disabled = false;
						snapshot.forEach((doc) => {
							this.displayUser(doc.data().username, doc.data().email);
						})
					} else {
						document.getElementById("searchUserButton").disabled = false;
						this.displayUser(null, null);
						console.log("no-user");
					}

				})
				.catch((err) => {
					document.getElementById("searchUserButton").disabled = false;
					this.$snackbar.open(err.message);
				})
		},

		displayUser: function(username, email) {
			console.log("called");
			if (!username) {
				this.result = false;
				this.toshow = true;
				this.isresult = false;
			} else {
				this.result = email;
				this.friend = username;
				this.toshow = true;
				this.isresult = true;
			}
		},
		addUser: function() {
			document.getElementById("addUserButton").disabled = true;
			console.log(this.friend)
			if (this.friend === this.$store.state.currentUserDetails.username) {
				this.$toast.open({
					message: `WHY Rahul WHY`,
					type: 'is-danger'
				})
				document.getElementById("addUserButton").disabled = false;
			} else if (isFriend(this.friend)) {
				this.$toast.open({
					message: `User is already a friend`,
					type: 'is-danger'
				})
				document.getElementById("addUserButton").disabled = false;
			} else {
				addFriend(this.friend)
				this.$toast.open({
					message: `User ${this.friend} added to friends list`,
					type: 'is-success'
				})
				document.getElementById("addUserButton").disabled = false;
			}
			this.toshow = false
			this.friend = ''
		}
	}

	,
>>>>>>> bde8c6ac8cd003961d26eb90cdb52d54e3607e56

}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat");
@import url("");
h1 {
	//TODO:Change Font Family
	font-family: "Montserrat", sans-serif;
	color: white;
	font-size: 3em;
}

.fontin {
	font-size: 2em;
}

#cta2 {
	display: inline-block;
}

#back-settings {
	min-width: 100vw;
	height: 100vh;
	//background-image: radial-gradient(circle, #1f0c43, #2d062f, #2c071f, #260b14, #1c0f0f);
	//background-image: linear-gradient(to left top, #1f0c43, #26062d, #22031c, #18010d, #000000);
	//background-color: darken($color: rgba(0, 0, 0, 0.90), $amount: 80%);
	//background-color: white;
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
.result {
	font-family: "Montserrat", sans-serif;
	h1 {
		padding-top: 0.5em;
		color: white;
		font-size: 4em;
		font-weight: 600;
		text-align: center;
		margin: 0;
	}
}
input {
	width: 350px;
}
button {
	margin-left: 0.5em;
}
#cta {
	margin-top: 3em;
	display: flex;
	flex-direction: row;
	justify-content: center;
}
.btn {
	font-family: Helvetica, sans-serif;
	font-size: 1em;
	font-weight: 700;
	background: none;
	cursor: pointer;
	padding: 0.7em 1em;
	display: inline-block;
	margin: -5px 10px;
	outline: none;
	position: relative;
	transition: all 0.3s ease 0s;
}
.btn::after {
	content: "";
	position: absolute;
	z-index: -1;
	transition: all 0.3s ease 0s;
}
.btn::before,
.btn-6 {
	color: rgb(255, 255, 255);
	background: rgb(44, 44, 170);
	transition: none 0s ease 0s;
}
.btn-6:active {
	top: 2px;
}
.btn-6f {
	border: 2px dashed rgb(44, 44, 170);
	border-radius: 60px;
}
.btn-6f:hover {
	background: transparent;
	color: rgb(44, 44, 170);
}
</style>
