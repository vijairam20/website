<template>
   <div id="chatarea"  class="slide-right">
       <div id="status">
           
       <h1><user :name="username"></user></h1>
       <h1>{{status}}</h1>
       <div class="al">
        <b-dropdown>
            <a slot="trigger">
                <i class="fas fa-bars al fa-3x"></i>
            </a>

            <b-dropdown-item @click.native="deleteroom">Delete</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-item>Something else</b-dropdown-item>
        </b-dropdown>
        </div>
       </div>
       <div id="area">
          
           <ul id="chatmessages">
               <messagec v-for="message in messages" :key="message.id" :text="message.text" :sender="message.sender.id" :attachment="message.attachment"></messagec>
            </ul>
        </div>
       <div id="cta">
        <b-field grouped>	   
            <input v-model="message" placeholder="Chat..." class="input is-rounded" type = "search" v-on:keyup.13="sendMessage"/>	           
            <p class="control">	            
                <button @click="sendMessage" class="button is-link"><b-icon
                icon="send"
                size="is-small">
            </b-icon></button>	
            </p>
            <p class="control">
                <button @click="record" class="button is-link"><b-icon icon="microphone" icon-pack="fas"></b-icon></button>
            </p>
            <p class="control">
                <button class="button is-link" @click="upload"><i class="fas fa-paperclip"></i></button>
            </p>
          	
                        
        </b-field>

       </div>
   </div>
</template>

<script>
import { getRoomByFriend, findAttachment, deleteRoom } from "../chat.js";
import user from "@/components/user.vue";
import messagec from "@/components/message.vue";
import pattachment from "@/components/p-attachment.vue";
import { stat } from "fs";
import { getUserByID } from "../user.js";
import {dictate} from "../speech.js"
export default {
  name: "chatArea",
  beforeRouteUpdate(to, from, next) {
    this.initialize(to.params.id);
    next();
  },
  created: function() {
    this.initialize(this.$route.params.id);
  },
  data: function() {
    return {
      friend: "",
      roomId: "",
      messages: [],
      message: "",
      status: "",
      currentRoom: ""
    };
  },
  watch: {},
  components: {
    user,
    messagec,
    "p-attachment": pattachment
  },
  computed: {
    username: function() {
      return this.$route.params.id;
    }
  },
  methods: {
    sendMessage: function() {
      if (this.message.length > 0) {
        let currentUser = this.$store.state.currentUser;
        let myRoom = getRoomByFriend(this.$route.params.id);
        currentUser
          .sendMessage({
            text: this.message,
            roomId: myRoom.id
          })
          .then(messageId => {})
          .catch(err => {
            console.log(`Error adding message to ${myRoom.name}: ${err}`);
          });
      }
      this.message = "";
    },
    scrollToEnd: function() {
      var messageDisplay = this.$el.querySelector("#area");
      messageDisplay.scrollTop = messageDisplay.scrollHeight;
    },
    initialize: function(id) {
      this.messages = [];
      this.message = "";
      this.roomId = 0;

      let room = getRoomByFriend(id);
      this.friend = this.$route.params.id;
      console.log(this.friend);
      this.currentRoom = room;
      let currentUser = this.$store.state.currentUser;
      currentUser.subscribeToRoom({
        roomId: room.id,
        hooks: {
          onNewMessage: message => {
            if (!message.attachment) {
              message.attachment = "none";
            }

            this.messages.push(message);
            this.scrollToEnd();
          },
          onUserCameOnline: user => {
            this.status = "ONLINE";
            console.log(`User ${user.name} came online`);
          },
          onUserWentOffline: user => {
            this.status = "OFFLINE";
            console.log(`User ${user.name} went offline`);
          }
        },
        messageLimit: 40
      });
    },
    deleteroom: function() {
      deleteRoom(this.currentRoom);
    },
    upload: function() {
      this.$modal.open({
        parent: this,
        component: pattachment,
        hasModalCard: false
      });
    },
     record:function(){
    console.log("record")
    this.message=dictate()
  }
  },
  updated: function() {
    this.scrollToEnd();
  },
 
};
</script>

<style lang="scss" scoped>
#chatarea {
  display: grid;
  // background-image: linear-gradient(
  //   to left,
  //   #1f0c43,
  //   #26062d,
  //   #22031c,
  //   #18010d,
  //   #000000
  // );
  min-width: 100%;
  height: 100vh;
  grid-template-rows: 10% 80% 10%;
  overflow: hidden;
}
#cta {
  padding: 1em 2em;
  float: bottom;
  min-width: 100%;
  font-size: 1.05em;
}
.al {
  display: flex;
  justify-content: center;
  padding-top: 0.5em;
  color: black;
}
#status {
  display: flex;
  color: white;
  justify-content: space-around;
  background-color: rgb(73, 73, 73);
}
#area {
  display: block;
  max-height: 85vh;
  padding: 3em;
  padding-top: 0.5em;
  margin-right: 2em;
  overflow-y: auto;
}
#tabs {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size-adjust: 1.5em;
}
.search {
  width: 80%;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 1em;
  margin-bottom: 1em;
  padding-bottom: 1em;
  padding-top: 1em;
  padding-right: 1em;
  margin-right: 1em;
  position: absolute;
}
.al {
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
button:not(:nth-child(2)) {
  margin-left: 0.5em;
}
</style>
