<template>
<div id="user">
    <h1>{{name}}</h1>
    <h1>{{userdata.email}}</h1>
    <avatar :username=name :src=userdata.url :size="100"></avatar>
    <h1>{{userdata.id}}</h1>
    <h1>{{userdata.name}}</h1>
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
        userdata : Object
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
</style>
