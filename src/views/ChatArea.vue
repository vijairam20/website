<template>
   <div id="chatarea">
       <div id="status">
       <h1><user :name="username"></user></h1>
       </div>
       <div id="area">
           <ul>
               <li v-for="message in messages" :key="message">{{message}}</li>
           </ul>
       </div>
       <div id="cta">
        <b-field grouped>
            <b-input v-model="message" placeholder="Chat..."  expanded rounded></b-input>
            <p class="control">
                <button @click="sendMessage" class="button is-link">Send</button>
            </p>
        </b-field>
       </div>
   </div>
</template>

<script>
import {getRoom} from '../chat.js'
import user from '@/components/user.vue'
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
    messages:[''],
    message:''
    }
},
components:{
    user
},computed:{
  username:function(){
     return this.$route.params.id;
  }   
},methods:{
    sendMessage:function(){
        let currentUser = this.$store.state.currentUser
        let myRoom = getRoom(this.$route.params.id)
        currentUser.sendMessage({
    text: this.message,
    roomId: myRoom.id
})
.then(messageId => {
  console.log(`Added message to ${myRoom.name}`)
}).catch(err => {
  console.log(`Error adding message to ${myRoom.name}: ${err}`)
})
    this.message=""
    },

    initialize:function(id){
        this.messages=[]
        this.message=''
        this.roomId=0 
    let room = getRoom(id)
    let currentUser = this.$store.state.currentUser
currentUser.subscribeToRoom({
  roomId: room.id,
  hooks: {
    onNewMessage: message => {
    this.messages.push(message.text)
      console.log(this.messages)
      console.log(`Received new message ${message.text}`)
}
  },
  messageLimit: 20
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
    padding: 0em 1em ;
    min-width: 100%;
}

#status{
   display: flex;
   justify-content: center;
}

#area{
    text-align: left;
}
</style>
