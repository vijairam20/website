<template>
    <div id="dashboard">
        <nav>
            <router-link to="/dashboard/chat"><i class="fas fa-comment fa-3x"></i></router-link>
            <router-link to="/dashboard/search"><i class="fas fa-search fa-3x"></i></router-link>
            <router-link to="/dashboard/settings"><i class="fas fa-cog fa-3x"></i></router-link>
            <router-link to="/login" @click.native="logout"><i class="fas fa-sign-out-alt fa-3x"></i></router-link>
        </nav>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import {signout} from '../user.js'
export default {
name:'Dashboard',
methods:{
    logout:function(){
        signout()
    }
},
confirmSignOut() {
                this.$dialog.confirm({
                    title: 'Sign Out',
                    message: 'Are you sure you want to <b>sign out</b> from this account?',
                    confirmText: 'Sign Out',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => this.$toast.open('Signed Out From Your Account!')
                })
},
mounted:function(){
// if(this.$store.firebaseUser.additionalUserInfo.isNewUser){
//       this.$toast.open({
//                     message: `Your User ID is ${this.$store.state.currentUserDetails.custom_data.key}`,
//                     type: 'is-info'
//                 })
// }
}
}
</script>

<style lang="scss" scoped>
#dashboard{
    display: grid;
    grid-template-columns: 5% 95% ;
    height: 100vh;
    width: 100% ;
    min-width: 100vw;
    background-image: linear-gradient(to left, #1f0c43, #26062d, #22031c, #18010d, #000000);
    text-align: center;
    position: absolute;
}

nav{
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    background-color: black;
    justify-content: space-around;
    color: white!important;
}

#back-settings{ 
    min-width: 100vw;
    height: 100vh;
    //background-image: radial-gradient(circle, #1f0c43, #2d062f, #2c071f, #260b14, #1c0f0f);
    //background-image: linear-gradient(to left top, #1f0c43, #26062d, #22031c, #18010d, #000000);
    //background-color: darken($color: rgba(0, 0, 0, 0.90), $amount: 80%);
   //background-color: white;
   background-image: linear-gradient(to left, #1f0c43, #26062d, #22031c, #18010d, #000000);
   text-align: center;
}

</style>
