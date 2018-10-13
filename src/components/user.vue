<template>
<div id="user">
    <avatar :username=name :src=link></avatar>
    <h1>{{name}}</h1>
    <!-- <div id="data">
    <h1>{{name}}</h1>
    </div> -->
</div>
</template>

<script>
import Avatar from "vue-avatar";
import { users , storage } from "../firebaseConfig.js"
export default {
name:'user',
components:{
    Avatar
},
data:function(){
    return {
   link : ''
    }
},props:{
    name:String,
},created:function(){
     var profilepic = storage.ref().child("profilepicture").child(this.name);
     profilepic.getDownloadURL().then((url)=>{
                  console.log(url);
                  this.link = url ;
              }).catch()
}
}



</script>

<style style="scss" scoped>
#user{
    display: flex;
    flex-direction: row;
    padding: 0.5em;
    margin-bottom: 1em;
}

h1{
    margin: auto 0.5em ;
    font-size: 1em;
    font-weight: bold;
}

#user:active{
    background-color: lightslategray;
}
</style>
