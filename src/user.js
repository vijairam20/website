import {
	auth,
	users
} from "./firebaseConfig";
import store from "./store";

export const signout = function () {
	auth.signOut().then(function () {
		console.log("Signed out");
	}).catch(function (error) {});
};

export const addUserToFirestore = function (newemail, newusername, newname, newid) {
	users.doc(newusername).set({
		name: newname,
		id: newid,
		email: newemail,
		username: newusername,
		friends: null
	}).then(function () {
		console.log(`${newusername} is added to firestore`);
	})
		.catch(function (error) {
			console.error("Error writing document: ", error);
		});

};
