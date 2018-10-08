<template>
    <li class="message" :class="styleText">
    <div class="text">
    <h1>{{text}}</h1>
    <div class="attachment" v-if = "isAttachment">
        <h1>{{this.link.file.name}}</h1>
        <button @click = "openInNewTab"><i class="fas fa-arrow-circle-down"></i></button>
    </div>
    </div>
    </li>
</template>

<script>
export default {
name:'message',
props:{
    text:String,
    sender:String,
    attachment:[Object,String]
},data:function(){
    return{
        link:Object
    }
},
mounted:function(){
if(!(this.attachment === "none")){
  let currentUser = this.$store.state.currentUser
  currentUser.fetchAttachment({ url: this.attachment.link })
  .then(url => {
    console.log(url)
    this.link = url 
  })
  .catch(err => {
    console.log('Error fetching attachment:', err)
  })
    }
},computed:{
    styleText:function(){
        let senderflag = false
        let receiverflag = false  
        if(this.sender == this.$store.state.currentUser.id){
            
                senderflag = true 
            }
            else{
                receiverflag = true
            }
        return{
            receiver: receiverflag,
            sender:   senderflag,
        }    
    },
    isAttachment:function(){
        if(!(this.attachment === "none")){
            return true 
        }
        return false
    },
    filename:function(){
        return this.link.file.name
    }
},methods:{
    openInNewTab :function() {
        console.log(`${this.link} on click event`)
  var win = window.open(this.link.link, '_blank');
  win.focus();
}
}
}

</script>

<style>

   h1{
       margin: 0.5em 0em ;
   }
.receiver
{
justify-content: flex-start;
color:blue;
}
.sender
{

justify-content: flex-end;
color: red;
}

.text{
    display: flex;
    flex-direction: column;
    border-radius: 0.8em;
    padding: 0.5em 0.5em;
    background-color: #eeeeee;
    align-content: inherit;
    width: 40%;
}

.message{
    display: flex;
    background-color: transparent;
}
</style>
