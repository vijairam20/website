import firebase from 'firebase/app';
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCM7s2csauvuNjoUfXdgKCykKSuSBi1Ras",
    authDomain: "quanta-cs.firebaseapp.com",
    databaseURL: "https://quanta-cs.firebaseio.com",
    projectId: "quanta-cs",
    storageBucket: "quanta-cs.appspot.com",
    messagingSenderId: "764397293628"
  };

firebase.initializeApp(config)

// firebase utils
const auth = firebase.auth()
const currentUser = auth.currentUser

export {
    auth,
    currentUser,
}