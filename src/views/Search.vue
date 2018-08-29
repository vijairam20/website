<template>
    <div id="search">
        <h1>Search</h1>
        <input class="input is-rounded" type="search">
        <button @click="searchUser" class="button">Button</button>

        <h1>{{result}}</h1>

    </div>
</template>

<script>
import {getUserById} from '../user.js'
export default {
    name : 'Search',
    data:function(){
        return{
        results: '' ,
        userid: 0 ,
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
    display: block;
    top: 10% ;
    margin : 0 auto;
}
</style>
