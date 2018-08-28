<template>
    <div id="dashboard">
        <nav>
            <router-link to="/dashboard/chat">chat</router-link>
            <router-link to="/dashboard/search">search</router-link>
        </nav>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

export default {
created : function(){
  //  this.$router.replace('dasboard/chat')
}
}
</script>

<style lang="scss" scoped>
#dashboard{
    display: grid;
    grid-template-columns: 5% 90% ;
    height: 100%;
}

nav{
    display: flex;
    flex-direction: column;
    background-color: black;

}
</style>
