import firebase from "firebase";

var config = {
	apiKey: "AIzaSyCM7s2csauvuNjoUfXdgKCykKSuSBi1Ras",
	authDomain: "quanta-cs.firebaseapp.com",
	databaseURL: "https://quanta-cs.firebaseio.com",
	projectId: "quanta-cs",
	storageBucket: "quanta-cs.appspot.com",
	messagingSenderId: "764397293628"
};

firebase.initializeApp(config);
const settings = {/* your settings... */ timestampsInSnapshots: true};
firebase.firestore().settings(settings);
var auth = firebase.auth();
const db =  firebase.firestore()
const users = db.collection("users")

export {
	firebase, db ,
	auth , users 
};
