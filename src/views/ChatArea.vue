<template>
   <div id="chatarea">
       <div id="status">
       <h1><user :name="username"></user></h1>
       </div>
       <div id="area">
           <h1></h1>
       </div>
       <div id="cta">
        <b-field grouped>
            <b-input placeholder="Chat..."  expanded rounded></b-input>
            <p class="control">
                <button class="button is-link">Search</button>
            </p>
        </b-field>
       </div>
   </div>
</template>

<script>
import user from '@/components/user.vue'
export default {
name:'chatArea',

components:{
    user
},computed:{
  username:function(){
     return this.$route.params.id;
  }   
}
}
</script>

<style lang="scss" scoped>
#chatarea{
    display: grid;
    background-color: white;
    min-width: 100%;
    height: 100%;
    grid-template-rows: 5% 90% 5% ;
}
#cta{
    padding: 0em 1em ;
    min-width: 100%;
}

#status{
   display: flex;
   justify-content: center;
}
</style>
