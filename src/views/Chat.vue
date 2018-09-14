<template>
<div v-if="loading" id="chat">
   <div id="users">
  <section class="hero is-dark">
  <h1>Friends</h1>
  </section>
    <user v-for="friend in friends" :key="friend" :name="friend" @click.native="loadChat"></user>
  </div>
<!-- <router-view></router-view> -->
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
    this.loading = true 

},
data:function(){
    return{
        loading : false 
    }
},
methods:{
    loadChat : function(){
        console.log("check")
    }
},
computed:{
    friends:function(){
       let rooms = this.$store.state.friends
       let friendsList = []
       
       for(var i = 0 ; i < rooms.length ; i++){
           
           for(var j = 0 ; j < rooms[i].member_user_ids.length ; j++){
               let cont = rooms[i].member_user_ids[j]
                if(!(cont === this.$store.state.currentUser.id))
                {
                    console.log(cont)
                    friendsList.push(cont)
                }
           }
           
       }
       console.log(friendsList)
       return friendsList
    }
}
}
</script>

<style scoped lang="scss">
    #chat{
        display: grid;
        grid-template-columns: 30% 70%;
        min-width: 100%;
        height: 100% ;
    //    min-height: 100vh ;        
  //      background-color: white;
    }
    #users{
        background-color: white;
        height: 100%;
    }

    h1{
        font-size: 2em;
    }

    button{
        background-color: transparent;
        border: 0 ;
    }
</style>
