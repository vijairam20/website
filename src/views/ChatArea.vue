<template>
   <div id="chatarea">
       <div id="status">
       <h1><user :name="username"></user></h1>
       <h1>{{status}}</h1>
       </div>
       <div id="area">
           
               <messagec v-for="message in messages" :key="message.id" :text="message.text" :sender="message.sender.id"></messagec>
           

       </div>
       <div id="cta">
        <b-field grouped>
            <b-input v-model="message" placeholder="Chat..." expanded rounded></b-input>
            <p class="control">
                <button @click="sendMessage" class="button is-link">Send</button>
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
    status:''
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
    background-color: white;
    min-width: 100%;
    height: 100%;
    grid-template-rows: 5% 90% 5% ;
}
#cta{
    padding: 0em 2em ;
    min-width: 100%;
}

#status{
   display: flex;
   justify-content: center;
}

#area{
padding: 3em;
margin-right: 2em;
}
</style>
