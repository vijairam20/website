<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<style lang="scss">
body,html{
  height: 100vh;
}
body::-webkit-scrollbar {
    width: 0em;
}
 
body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
#app{
  height: 100vh;
}
</style>
