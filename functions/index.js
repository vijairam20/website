const functions = require('firebase-functions');
const Chatkit = require("@pusher/chatkit-server");

exports.createUser = functions.https.onCall((data, context) => {
	const text = data.text;
	const chatkit = new Chatkit.default({
		instanceLocator: "v1:us1:8e862fe0-1264-46d3-9c2a-ee84030cbfe0",
		key: "1a0f59d5-a1f6-49b6-a5eb-ec10b28e5593:ufU+fTEZWiHvFb6m8c60N45rhKRSnYeIWyBPryTW39w="
	});
	return chatkit.createUser({
			id: 'johndoe',
			name: 'John Doe'
		})
		.then(() => {
			return console.log('User created successfully');
		}).catch((err) => {
			return console.log(err);
		});
});
