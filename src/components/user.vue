<template>
     <div id="user">
         <span></span>
         <h1>{{name}}</h1>
     </div>
</template>

<script>
export default {
name:'user',
props:{
    name:''

}
}
</script>

<style  lang ="scss" scoped>
#user{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30px;
}
span{
        border-radius: 50%;
        background-color: lighten($color: black, $amount: 10%);
}

h1{
    font-family: sans-serif;
    font-size: 1.5em;
}
</style>
