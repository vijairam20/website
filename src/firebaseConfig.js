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
var auth = firebase.auth();

export {
	firebase,
	auth
};
