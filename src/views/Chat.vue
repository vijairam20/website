<template>
    <div id="chat">
        <div id="users">
            <user username=friend></user>
        </div>
        <div id="chatArea" style="background-color:grey">

        </div>
    </div>
</template>

<script>
import user from '@/components/user.vue';
import {getFriends} from "../chat.js"
export default {
components:{
    user
},
created:function(){
    getFriends(this.$store.state.currentUser.id)
    this.friends = this.$store.state.friends[0]
    console.log(this.friends)
},
data:function(){
    return{
        friends : ''
    }
}
}
</script>

<style scoped>
    #chat{
        display: grid;
        grid-template-areas: 30% 70%;
        min-width: 100%;
        min-width: 100vh;
    }
    
</style>
