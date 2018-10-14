import store from "./store";
import {
	ChatManager,
	TokenProvider
} from "@pusher/chatkit";
const axios = require("axios");
const Chatkit = require("@pusher/chatkit-server");
const chatkit = new Chatkit.default({
	instanceLocator: "v1:us1:8e862fe0-1264-46d3-9c2a-ee84030cbfe0",
	key: "1a0f59d5-a1f6-49b6-a5eb-ec10b28e5593:ufU+fTEZWiHvFb6m8c60N45rhKRSnYeIWyBPryTW39w=",
});
import {
	firebase,
	users,
	db
} from "./firebaseConfig";
//TODO:CREATE USER
export const createChatkitUser = function (username, name, newemail, newkey) {
	chatkit.createUser({
		id: username,
		name: name
	})
		.then(() => {
			console.log("Chakit account created");
		}).catch((err) => {
			console.log(err);
		});


};

export const chatSignin = function () {

	const chatManager = new ChatManager({
		instanceLocator: "v1:us1:8e862fe0-1264-46d3-9c2a-ee84030cbfe0",
		userId: store.state.currentUserDetails.username,
		tokenProvider: new TokenProvider({
			url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/8e862fe0-1264-46d3-9c2a-ee84030cbfe0/token"
		}),
		connectionTimeout: 60000
	});

	chatManager.connect({
		onAddedToRoom: room => {
			getRooms();
		  }
	})
		.then(currentUser => {
			console.log("Successful connection", currentUser);
			store.commit("setCurrentUser", currentUser);
			chatkit.getUserRooms({
				userId: currentUser.id,
			})
				.then((res) => {
					store.commit("setRooms", res);
					getFriends();
					//	authenticateUser(currentUser.id);
				}).catch((err) => {
					console.log(err);
				});
		})
		.catch(err => {
			console.log("Error on connection", err);
		});
};


const authenticateUser = function (username) {
	axios.post("https://us1.pusherplatform.io/services/chatkit_token_provider/v1/9aeb69cb-d766-4077-a17f-7dd5d2af01a7/token", {

		grant_type: "client_credentials",
		user_id: username

	})
		.then(function (response) {
			console.log(response);
		}).catch(function (error) {
			console.log(error);
		});
};

export const addFriend = function (friend) {
	store.state.currentUser.createRoom({
		name: `${store.state.currentUserDetails.username + friend}`,
		private: true,
		addUserIds: [friend]
	}).then(room => {
		console.log(`Created room called ${room.name}`);
		getRooms();
	})
		.catch(err => {
			console.log(`Error creating room ${err}`);
		});
	users.doc(store.state.currentUserDetails.username).update({
		friends: firebase.firestore.FieldValue.arrayUnion(friend)
	});
	users.doc(friend).update({
		friends: firebase.firestore.FieldValue.arrayUnion(store.state.currentUserDetails.username)
	});

};

export const addProfilePicToStorage = function (photourl) {
	users.doc(store.state.currentUserDetails.username).update({
		url: photourl
	});
};
export const isNotCurrentUser = function (user) {
	if (user.id == store.state.currentUser.id) {
		return false;
	}
	return true;
};
export const getRooms = function () {
	chatkit.getUserRooms({
		userId: store.state.currentUser.id,
	})
		.then((res) => {
			store.commit("setRooms", res);
			getFriends();
		}).catch((err) => {
			console.log(err);
		});
};

export const getRoomByFriend = function (friend) {
	let requiredRoom;
	let rooms = store.state.rooms;
	for (var i = 0; i < rooms.length; i++) {
		for (var j = 0; j < rooms[i].member_user_ids.length; j++) {
			if (friend === rooms[i].member_user_ids[j]) {
				requiredRoom = rooms[i];
				console.log(requiredRoom);
				break;
			}
		}
	}
	return requiredRoom;
};

export const getFriends = function () {
	let rooms = store.state.rooms;
	let friendsList = [];

	for (var i = 0; i < rooms.length; i++) {

		for (var j = 0; j < rooms[i].member_user_ids.length; j++) {
			let cont = rooms[i].member_user_ids[j];
			if (!(cont === store.state.currentUser.id)) {
				friendsList.push(cont);
			}
		}

	}
	store.commit("setFriends", friendsList);
};

export const isFriend = function (friend) {
	var friends = store.state.currentUserDetails.friends || null;
	if (friends == null || friends.length == 0) {
		return false;
	}
	for (var i = 0; i < friends.length; i++) {
		if (friends[i] === friend) {
			return true;
		}
	}
	return false;
};

export const deleteRoom = function (room) {
	console.log(room);
	store.state.currentUser.deleteRoom({
		roomId: room.id
	})
		.then(() => {
			console.log(`Deleted room with ID: ${room.id}`);
		})
		.catch(err => {
			console.log(`Error deleted room ${room.id}: ${err}`);
		});
};

export const signin = function (email) {

	var emailquery = users.where("email", "==", email);
	emailquery.get() // Trying to get all the groups
		.then(function (snapshot) {
			snapshot.forEach(function (doc) {
				console.log(doc.id);
				localStorage.setItem("username", doc.id);
				store.commit("setCurrentUserDetails", doc.data());
				chatSignin();
			});
		});

};
