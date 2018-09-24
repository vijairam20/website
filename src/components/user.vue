<template>
<div id="user">
    <avatar :username=name></avatar>
    <h1>{{name}}</h1>
    <!-- <div id="data">
    <h1>{{name}}</h1>
    </div> -->
</div>
</template>

<script>
import Avatar from "vue-avatar";
export default {
name:'user',
components:{
    Avatar
},
data:function(){
    return {
   
    }
},props:{
    name:String
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
