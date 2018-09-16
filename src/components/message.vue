<template>
    <h1 :class="styleText">{{text}}</h1>
</template>

<script>
export default {
name:'message',
props:{
    text:String,
    sender:String
},data:function(){
    return{
        
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
    }
}
}

</script>

<style>

   
.receiver
{
text-align: left;

color:blue;
}
.sender
{
text-align: right;
color: red;

}
</style>
