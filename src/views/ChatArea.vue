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
               <messagec v-for="message in messages" :key="message.id" :text="message.text" :sender="message.sender.id" :attachment="message.attachment"></messagec>
            </ul>
            <img src="https://chatkit-file-service-us1.s3.amazonaws.com/9aeb69cb-d766-4077-a17f-7dd5d2af01a7/15918312/desktop.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIARUOGSD3OWVXD3DJB%2F20180922%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20180922T163044Z&X-Amz-Expires=60&X-Amz-Security-Token=FQoGZXIvYXdzEAEaDIJ7bIFdlj2OMvkuVyK3A63%2FKr4jAG9d9CO6%2F3OFuJfCa0m%2Bw83E%2FzLPyTa%2FbiodkQobzmrs%2FKYZu9ARTjgvSIWJ%2FRr%2BEU2jXsd16Pc2vZ5aTtOHTF%2FD5xAyLk%2F1ULnlZHgySgfUYOFVh1KqY7RFw1oOeg72sZm8uOymoTQUOLPQC1%2Fj2lKkBPT6woCjSpR0QLMZ%2FgYVhjdhs2URMzqlrppXzKLFgC7vArwSg%2BNcdlaeKCAu1OmU0wDnNT6kJYJ01aPVbXJ0veaL54UovN0OtggD58blr7Jgddk6i89KI0I0GWEKIUCCkFzVx8%2FJxHz30bcT3p1E7IgTwKi8mjE%2Bq4gDtyQqpbevxpFJ5y5FgJhlNHU0lbkYN0jFUyBlGFsKQ1hzhjJDwEzgYCNybExet%2FF%2FQ9ygQv2KO0bxUAzWd5Q1QLK7YGIvugoZPSeBPz5q3H3muANYhgnNATDJE%2Fkg1q9FhiyKzNBK%2BDoU74xt1fsnUqHO9qrKmYqKEZck3%2Fp3%2FOs8uhtXxrPMiiHRC9diFIbrUPe6byMn86KZcwTNuBIDzeRW%2BNUxmY%2FifNLtyNPkKAzzH7Y%2BnZcWb4KNZvlrKR7XIKoqVX4ozriZ3QU%3D&X-Amz-SignedHeaders=host&X-Amz-Signature=0ea27622ec73dc17d9350c5c68e10386e77694bec38d72a8b9d7010f2ae33e18"/>
        </div>
       <div id="cta">
        <b-field grouped>	   
            <input v-model="message" placeholder="Chat..." class="input is-rounded" type = "search" v-on:keyup.13="sendMessage"/>	           
            <p class="control">	            
                <button @click="sendMessage" class="button is-link"><b-icon
                icon="send"
                size="is-small">
            </b-icon></button>	 
            <previewimage/>
            </p>          
        </b-field>
       </div>
   </div>
</template>

<script>
import {getRoomByFriend , findAttachment} from '../chat.js'
import user from '@/components/user.vue'
import messagec from '@/components/message.vue'
import previewimage from '@/components/previewimage.vue'
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
    user,messagec,previewimage
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
        if(!(message.attachment)){
            message.attachment="none"
        }
    this.messages.push(message)  
},

  },
  messageLimit: 40
})
    }
}
}
//https://jsfiddle.net/mani04/5zyozvx8/ image
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
