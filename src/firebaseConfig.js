import firebase from 'firebase'
import 'firebase/firestore'

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
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const users = db.collection('users')


export {
    db,
    auth,
    currentUser,
    users,
}