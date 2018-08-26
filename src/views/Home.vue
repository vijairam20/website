<template>
  <div id="home">
    <div id="navbar">
      <span class = "logo">Quanta</span>
    </div>
    <div id="content">
    <div id="cta">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto consequatur, cumque dicta eos, 
        odio veniam doloribus ipsum quasi facilis ullam. Odit minima fuga velit. Esse reprehenderit error voluptatibus 
        atque!</p>
    <router-link tag = "button" class="button is-link" to="/signup">signup</router-link>
    <router-link tag = "button" class="button is-link" to="/login">login</router-link>
    </div>
    <div id="isohero">
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {

}
}
</script>

<style lang="scss" scoped>
#home{
height: 100vh;

}
#navbar{
  height: 5vh;
  text-align: left;
  padding-left : 20px;
}
#content{
display: grid;
grid-template-columns: 50% 50% ;
height: 90vh;
}
#cta{
  width: 100%;
  text-align: center;
  padding: 150px;
  padding-bottom: 80px;
  font-size: 2em;
}

#isohero{
  background-color: lighten($color: red, $amount: 10%);
}
button{
  margin: 35px;
}

.logo{
  font-size: 2.5em;
  font-family: 'Reem Kufi', sans-serif;
  color: black;
}
</style>

