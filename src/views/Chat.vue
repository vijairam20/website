<template>
<div v-if="loading" id="chat">
   <div id="users">
  <section class="hero is-dark">
  <h1>Friends</h1>
  </section>
  <user @click.native="loadChat" :name="friend"></user>
    
  </div>
<div id="chatrarea"></div>
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
    friend:function(){
        return this.$store.state.friends
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
