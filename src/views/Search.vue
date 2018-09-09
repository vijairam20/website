<template>
    <div id="search">
        <h1>Search</h1>
        <div id="cta">
        <input v-model.number="id" class="input is-rounded" type="search">
        <button @click="searchUser" class="button is-success">Search</button>
        </div>        
        <h1>{{result}}</h1>

    </div>
</template>

<script>
import {getUserByID} from '../user.js'
import { setTimeout } from 'timers';
export default {
    name : 'Search',
    data:function(){
        return{
            id:0,
            result : '',
        }
    },
    methods:{
        searchUser : function(){
            let userid = getUserByID(this.id)
            if(userid === 'none'){
                this.result = 'none'
            }else{
            this.result = userid 
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

#search{
    font-family: 'Montserrat', sans-serif;
    
    h1{
        padding-top: 0.5em;
        color : black;
        font-size: 2em;
        font-weight: 600;
        text-align: center;
    }
    height: 100vh;
   // background-color: lighten($color: black, $amount: 20%);
   background-color: white;
}

input{
    
    width : 350px;
    
}
button{
margin-left: 0.5em;
}
#cta{
    margin-top: 3em;
  display: flex;
  justify-content:center;
}
</style>
