<template>
   <div id="chatarea"  class="slide-right">
       <div id="status">
           <div class="al">
        <b-dropdown>
            <a slot="trigger">
                <i class="fas fa-bars al"></i>
            </a>

            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-item>Something else</b-dropdown-item>
        </b-dropdown>
        </div>
       <h1><user :name="username"></user></h1>
       <h1>{{status}}</h1>
       
       </div>
       <div id="area">
          
           <ul>
               <messagec class="message" v-for="message in messages" :key="message.id" :text="message.text" :sender="message.sender.id"></messagec>
            </ul>
        </div>
       <div id="cta">
        <b-field grouped>	   
            <input v-model="message" placeholder="Chat..." class="input is-rounded" type = "search" v-on:keyup.13="sendMessage"></input>	           
            <p class="control">	            
                <button @click="sendMessage" class="button is-link"><b-icon
                icon="send"
                size="is-small">
            </b-icon></button>	 
            </p>          
        </b-field>
       </div>
   </div>
</template>

<script>
import {getRoomByFriend} from '../chat.js'
import user from '@/components/user.vue'
import messagec from '@/components/message.vue'
import { stat } from 'fs';
export default {
name:'chatArea',
beforeRouteUpdate (to, from, next) {
  this.initialize(to.params.id);
  next();
},
created:function(){
    this.initialize(this.$route.params.id)
},
data:function(){
    return{
    roomId:'',
    messages:[],
    message:'',
    status:'',
    }
},
components:{
    user,messagec
},computed:{
  username:function(){
     return this.$route.params.id;
  }   
},methods:{

   

    sendMessage:function(){
        if(this.message.length > 0){
        let currentUser = this.$store.state.currentUser
        let myRoom = getRoomByFriend(this.$route.params.id)
        currentUser.sendMessage({
    text: this.message,
    roomId: myRoom.id
})
.then(messageId => {
}).catch(err => {
  console.log(`Error adding message to ${myRoom.name}: ${err}`)
})
}
    this.message=""
    },

    initialize:function(id){
        this.messages=[]
        this.message=''
        this.roomId=0 
    let room = getRoomByFriend(id)
    let currentUser = this.$store.state.currentUser
currentUser.subscribeToRoom({
  roomId: room.id,
  hooks: {
    onNewMessage: message => {
    this.messages.push(message)
},

  },
  messageLimit: 40
})
    }
}
}

</script>

<style lang="scss" scoped>
#chatarea{
    display: grid;
    background-image: linear-gradient(to left, #1f0c43, #26062d, #22031c, #18010d, #000000);
    min-width: 100%;
    height: 100%;
    grid-template-rows: 5% 90% 5% ;
}
#cta{
    padding: 1em 2em;
    float:bottom;
    min-width: 100%;
    font-size:1.05em;
}

#status{
   display: flex;
   color: white;
   justify-content: center;
   height: 5em;
   background-color: rgb(73, 73, 73);
}

#area{
padding: 3em;
margin-right: 2em;
}

#tabs{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size-adjust: 1.5em;
}

.message
{
    border-radius: 0.8em;
    padding: 0.5em 0.5em;
    background-color: #eeeeee;
    align-content: inherit;
    width: 40%;
}

.search
{
    width:80%;
    font-family: Arial, Helvetica, sans-serif;
    border-radius:1em;
    margin-bottom:1em;
    padding-bottom: 1em;
    padding-top: 1em;
    padding-right: 1em;
    margin-right:1em;
    position: absolute;
}

.al
{
    position: left;
    backface-visibility: 100%;
    margin-right: 10px;
}

.slide-right {
	-webkit-animation: slide-right 0.8s both;
	        animation: slide-right 0.8s both;
}

@-webkit-keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
  }
}
@keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
  }
}

</style>
