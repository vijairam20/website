import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './../node_modules/bulma/css/bulma.css';
import firebase from 'firebase'
Vue.config.productionTip = false

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCM7s2csauvuNjoUfXdgKCykKSuSBi1Ras",
    authDomain: "quanta-cs.firebaseapp.com",
    databaseURL: "https://quanta-cs.firebaseio.com",
    projectId: "quanta-cs",
    storageBucket: "quanta-cs.appspot.com",
    messagingSenderId: "764397293628"
  };
  firebase.initializeApp(config);



let app;
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});