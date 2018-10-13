<template>
<div id="user">
    <avatar :username=name :src=link></avatar>
    <h1>{{name}}</h1>
 
</div>
</template>

<script>
import Avatar from "vue-avatar";
import {
    users,
    storage
} from "../firebaseConfig.js"
export default {
    name: 'user',
    components: {
        Avatar
    },
    data: function () {
        return {
            link: ''
        }
    },
    props: {
        name: String,
    },
    
    methods: {
        fetchProfilePicture() {
            this.link = ""
            users.doc(this.name).get().then((doc) => {
                if (doc.data().url) {
                    this.link = doc.data().url;
                }
            }).catch((err) => {
                console.log(err)
            })
        },
    },
    created: function () {
        this.link = "";
        this.fetchProfilePicture();
    }
}
</script>

<style scoped>
#user {
    display: flex;
    flex-direction: row;
    padding: 0.5em;
    margin-bottom: 1em;
}

h1 {
    margin: auto 0.5em;
    font-size: 1em;
    font-weight: bold;
}

#user:active {
    background-color: lightslategray;
}
</style>
