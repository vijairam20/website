<template>
<div v-if="loading" id="chat"  class="swing-in-left-fwd">
   <div id="users">
  <section class="hero is-dark">
  <h1>Friends</h1>
  </section>
    <user v-for="friend in friends" :key="friend" :name="friend" @click.native="loadChat(friend)"></user>
    <div v-show="nofriends">
        <p>
            Let's find you some friends 
            Go to search
        </p>
    </div>
  </div>
<div>
<router-view/>
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
    this.loading = true 

},
data:function(){
    return{
        loading : false ,
        nofriends:false
    }
},
methods:{
    loadChat : function(friend){
        console.log("check")
        this.$router.push({ name: 'chatarea', params: { id: friend }})
    }
},
computed:{
    friends:function(){
        if(this.$store.state.friends.length <= 0){
            this.nofriends = true  
        }
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

    .swing-in-left-fwd {
	-webkit-animation: swing-in-left-fwd 0.8s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.3s both;
	        animation: swing-in-left-fwd 0.8s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.3s both;
}

@-webkit-keyframes swing-in-left-fwd {
  0% {
    -webkit-transform: rotateY(100deg);
            transform: rotateY(100deg);
    -webkit-transform-origin: left;
            transform-origin: left;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    -webkit-transform-origin: left;
            transform-origin: left;
    opacity: 1;
  }
}
@keyframes swing-in-left-fwd {
  0% {
    -webkit-transform: rotateY(100deg);
            transform: rotateY(100deg);
    -webkit-transform-origin: left;
            transform-origin: left;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    -webkit-transform-origin: left;
            transform-origin: left;
    opacity: 1;
  }
}
</style>
