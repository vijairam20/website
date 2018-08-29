<template>
    <div id="dashboard">
        <nav>
            <router-link to="/dashboard/chat"><i class="fas fa-comment fa-3x"></i></router-link>
            <router-link to="/dashboard/search"><i class="fas fa-search fa-3x"></i></router-link>
            <router-link to="/dashboard/settings"><i class="fas fa-cog fa-3x"></i></router-link>
            <router-link to="/login"><i class="fas fa-sign-out-alt fa-3x"></i></router-link>
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
    width: 100% ;
}

nav{
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    background-color: black;
    justify-content: space-around;
    color: white!important;
}

</style>
