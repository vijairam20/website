<template>
    <div id="login">
        <div id="loginimg"></div>
        <form>
        <b-field >
            <b-input v-model="email" placeholder="Email"
                type="email"
                icon="email">
            </b-input>
        </b-field>

        <b-field >
            <b-input v-model="password" type="password"
                placeholder="Password "
                icon-pack="fas"
                icon="lock">
                password-reveal>
            </b-input>
        </b-field>

        <div class="field is-grouped">
  <div class="control">
    <button @click.prevent="signin" :class="styleButton">Login</button>
  </div>
  <div class="control">
    <router-link tag=button class = "button is-text" to="/">Cancel</router-link>
  </div>
</div>
<h1>{{printerr}}</h1>
</form>
       
    </div>
</template>

<script>
import firebase from "firebase";
import { addCurrentUser} from "../user.js";
import { signin} from "../chat.js";
export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: "",
      printerr: "",
      isFullPage: true,
      styleButton: {
        button: true,
        "is-link": true,
        "is-loading": false
      }
    };
  },
  methods: {
    signin: function() {
      //Firebase sigin
      //this.$store.commit("setEmail",this.email);
      localStorage.setItem("email",this.email);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.open()
          signin(this.email);
          this.$store.commit("setFirebaseUser", user);
         
        })
        .catch(error => {
          this.printerr = error.message;
          console.log(error.message);
        });
    },
    open() {
      const loadingComponent = this.$loading.open({
        container: this.isFullPage ? null : this.$refs.element.$el
      });
      setTimeout(() => {
        loadingComponent.close();
        this.$router.replace("dashboard/settings");
      }, 5000);
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  display: grid;
  grid-template-columns: 60% 40%;
  height: 100vh;
}

form {
  padding: 100px;
  h1 {
    color: red;
  }
}

#loginimg {
  background: url("../assets/loginimage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

