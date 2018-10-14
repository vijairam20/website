<template>
<div>
	<h1>Settings</h1>
	<nav class="level">
		<div class="level-item has-text-centered">
			<div>
				<b-taglist attached class="true">
					<b-tag type="is-dark" size="is-large">UserID</b-tag>
					<b-tag type="is-info" size="is-large">{{this.$store.state.currentUserDetails.id}}</b-tag>
				</b-taglist>
			</div>
		</div>
		<div class="level-item has-text-centered">
			<div>
				<b-taglist attached class="true">
					<b-tag type="is-dark" size="is-large">E-mail</b-tag>
					<b-tag type="is-info" size="is-large">{{this.$store.state.currentUserDetails.email}}</b-tag>
				</b-taglist>
			</div>
		</div>
		<div class="level-item has-text-centered">
			<div>
				<b-taglist attached class="true">
					<b-tag type="is-dark" size="is-large">UserName</b-tag>
					<b-tag type="is-info" size="is-large">{{this.$store.state.currentUserDetails.username}}</b-tag>
				</b-taglist>
			</div>
		</div>
		<div class="level-item has-text-centered">
			<div>
				<b-taglist attached class="true">
					<b-tag type="is-dark" size="is-large">Friends</b-tag>
          <!-- TODO: check friends -->
				<!--	<b-tag type="is-info" size="is-large">{{this.$store.state.currentUserDetails.friends.length}}</b-tag>-->
				</b-taglist>
			</div>
		</div>

	</nav>
	<div class="options">
		<br><br>
		<b-tooltip label="Discoverable Mode lets other users find you.">
			<b-field>Discoverable Mode
				<b-switch v-model="isSwitchedCustom" class="Toggle" type="is-info" size="is-medium" true-value="On" false-value="Off">
					{{isSwitchedCustom}}
				</b-switch>
			</b-field>
		</b-tooltip>
		<br><br>Choose Your Theme :
		<b-tooltip label="Pick your theme. More on their way !" position="is-right">
			<b-dropdown v-model="isTheTheme" hoverable type="is-info">
				<button class="button is-primary is-info" type="button" slot="trigger">
            <template v-if="isTheTheme">
                <b-icon icon="earth"></b-icon>
                <span>Dark</span>
</template>
<template v-else>
<b-icon icon="account-multiple">
</b-icon>
<span>Light</span>
</template>
            <b-icon icon="menu-down"></b-icon>
        </button>

        <b-dropdown-item :value="value" v-on:click="updateTheme(true);">
            <div class="media">
                <b-icon class="media-left" icon="earth"></b-icon>
                <div class="media-content">
                    <h3>Dark</h3>
                    <small>Comfortable on the eyes for long usage. [Violet,Black]</small>
                </div>
            </div>
        </b-dropdown-item>

        <b-dropdown-item v-on:click="updateTheme(false);">
            <div class="media">
                <b-icon class="media-left" icon="account-multiple"></b-icon>
                <div class="media-content">
                    <h3>Light</h3>
                    <small>Makes it easy to read text and is lively. [White,Green]</small>
                </div>
            </div>
        </b-dropdown-item>
        </b-dropdown>
     </b-tooltip>
        <br><br><br><br>
     <!-- <b-dropdown hoverable>
            <button class="button is-info" slot="trigger">
                <span>Hover me!</span>
                <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-item>Something else</b-dropdown-item>
        </b-dropdown> -->
	<b-field style="margin-top : 0.5em">
	<button @click="changePassword"class="button is-danger" style="font-size: 0.8em"><b>Reset Password</b></button>
    </b-field>
    <!--TODO:ADD profile picture--> 
	<b-field style="margin-top : 0.5em">
	<button @click="addProfilePic"class="button is-link" style="font-size: 0.8em"><b>Add Profile picture</b></button>
    </b-field>
	</div>

    </div>
</template>

<script>
import { auth , profileRef} from "../firebaseConfig.js";
import profilepicture from "@/components/profilepicture.vue";

export var myVar = "isPublic";
export default {
  data() {
    return {
      isSwitchedCustom: "On",
      isPublic: true,
      isTheTheme: true,
      value:''
    };
  },
  components:{
    profilepicture
  },
  methods: {
    updateTheme: function(value) {
      this.$parent.$emit("updatetheme", value);
      this.isTheTheme = value;
      console.log("3");
    },
    changePassword: function() {
      this.$dialog.confirm({
        title: "Reset Password",
        message: "Are you sure you want to <b>change</b> your password?",
        confirmText: "Change",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => {
          auth
            .sendPasswordResetEmail(this.$store.state.currentUserDetails.custom_data.email)
            .then(() =>{ 
			  console.log("sent")
            })
            .catch(function(error) {
              console.log(error)
            });
			this.$toast.open({
                    message: 'Check Your Mail for Reset Password',
                    type: 'is-success'
                })
		}
      });
    },
    addProfilePic: function(){
      this.$modal.open({
        parent: this,
        component: profilepicture ,
        hasModalCard: false
      });
    }
  }
};
</script>

<style lang="scss" scoped>
h1,
p {
  //TODO:Change Font Family
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 3em;
}

#Head {
  font-size: 2.5em;
  font-weight: bolder;
}

#settings {
  $fc: black;
  $bg: white;
  h1 {
    color: $fc;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 2em;
  }
  width: 100%;
  //background: lighten($color: black, $amount: 20%);
  background-color: $bg;
  height: 100vh;
}

.options {
  color: #eeeeee;
  font-size: 1.5em;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
}

.tag {
  cursor: pointer;
}
</style>

