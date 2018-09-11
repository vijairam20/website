<template>
    <div id="search">
        <h1>Search</h1>
        <div id="cta">
        <input v-model.number="id" placeholder="id" class="input is-rounded" type="search">
        <button @click="searchUser" class="button is-success">Search</button>
        </div> 
        <!--TODO:replace with v-if-->  
        <div v-show=toshow class="cta2">
        <user class="result" :name=result></user>
        <button @click="addUser" class="button is-success">Add</button>

        </div>     
    </div>
</template>

<script>
import {getUserByID} from '../user.js'
import {getAllUsers ,addFriend} from '../chat.js'
import user from "@/components/user.vue"
export default {
    name : 'Search',
    components:{
        user
    },
    data:function(){
        return{
            id:0,
            result : '',
            friend : '',
            toshow : false,
        }
    },
    methods:{
        searchUser : function(){
            let userid = getUserByID(this.id)
            if(userid === 'none'){
                this.result = 'none'
            }else{
            this.result = userid[0]
            this.friend = userid[1]
            this.toshow = true 
            }
        },
        addUser: function(){
            //TODO: update in production  
            //addFriend(this.friend)
        }
    }
    ,
    created :function(){
        getAllUsers()
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

#search{
    
    
    min-width: 100vw;
    height: 100vh;
    background-color: lighten($color: black, $amount: 40%);
   //background-color: white;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   text-align: center;
}

.result{
    font-family: 'Montserrat', sans-serif;
    h1{
        padding-top: 0.5em;
        color : white;
        font-size: 2em;
        font-weight: 600;
        text-align: center;
    }
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

#cta2{
    display: flex;
    justify-content: center;
    flex-direction: row;
}
</style>
