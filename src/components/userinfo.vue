<template>
<div id="user"  class = "usery">
    <div>
    <avatar :username=name :src=userdata.url :size="150" class="centerprofile"></avatar>
    <h1 class="centre">
        <br><br>
        <b-taglist attached class="true">
            <b-tag type="is-dark" size="is-medium">UserID</b-tag>
            <b-tag type="is-info" size="is-medium">{{userdata.id}}</b-tag>
        </b-taglist>
        <b-taglist attached class="true">
            <b-tag type="is-dark" size="is-medium">E-mail</b-tag>
            <b-tag type="is-info" size="is-medium">{{userdata.email}}</b-tag>
        </b-taglist>
        <b-taglist attached class="true">
            <b-tag type="is-dark" size="is-medium">UserName</b-tag>
            <b-tag type="is-info" size="is-medium">{{name}}</b-tag>
        </b-taglist>
        <!--<b-taglist attached class="true">
                    <b-tag type="is-dark" size="is-medium">Friends</b-tag>
                    <b-tag type="is-info" size="is-medium">{{userdata.Friends.length}}</b-tag>
                </b-taglist>-->
        <b-taglist attached class="true">
            <b-tag type="is-dark" size="is-medium">ContactName</b-tag>
            <b-tag type="is-info" size="is-medium">{{name}}</b-tag>
        </b-taglist>
    </h1>
    </div>
</div>
</template>

<script>
import {
    users
} from "../firebaseConfig.js"
import Avatar from "vue-avatar";
export default {
    data: function () {
        return {
            email: 'none',
            link: '',
        }
    },
    components: {
        Avatar
    },
    props: {
        name: String,
        userdata: Object
    },

};
</script>

<style lang="scss" scoped>
#user {
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 500px;
    padding: 1em;
}

h1 {
    text-align: center;
}

.centre {
    justify-content: center;
    
}
.usery {
    background-image: linear-gradient(to right bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);
}
.centerprofile {
    display: flex;
    justify-content: center;
}
</style>
