<template>
    <div id="chat">
        <div id="users">
             <!-- <userc v-for="u in users" :key="u.id" :name="u.data().name"/> -->
        </div>
        <div id="window">

        </div>
    </div>
</template>

<script>
import userc from "@/components/user.vue"
import user from '@/user.js'
import { METHODS } from 'http';
export default {
    name:'chat',
    data:function(){
        return{
            users : user.getAllUsers(),
        }
    },
    components:{
        'user':userc
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped >
#chat{
    display: grid;
    grid-template-columns: 30% 70%;
    width:100%;
    min-height: 100vh;
}
#users{
    height: 100%;
    width: 100% ;
}
#window{
    background-color: lighten($color: blue, $amount: 10%);
    width: 100%;
    height: 100%;
}
</style>
