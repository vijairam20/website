<template>
  <div id="home">
    <div id="navbar">
      <span class = "logo">Quanta</span>
      <div id="DIV_1">
	      <div id="DIV_2">
	      	<router-link id="P_3" class="button is-link" to="/home">
	  	    	HOME
	  	    </router-link>
	      </div>
      </div>
    </div>
    <div id="content">
    <div id="cta">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto consequatur, cumque dicta eos, 
        odio veniam doloribus ipsum quasi facilis ullam. Odit minima fuga velit. Esse reprehenderit error voluptatibus 
        atque!</p>
      <router-link id = "btn" class="button is-link" to="/signup">Sign Up</router-link>
      <router-link id = "btn" class="button is-link" to="/login">Login</router-link>
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
background-color: #eeeeee;

}
#navbar{
  height: 18vh;
  text-align: left;
  padding-left : 20px;
  background-color: rgb(24, 19, 19);
}
#content{
display: grid;
grid-template-columns: 50% 50% ;
height: 40vh;
}
#cta{
  width: 100%;
  text-align: center;
  padding: 50px;
  padding-bottom: 80px;
  font-size: 2em;
}

#isohero{
  background-color: lighten($color: darkred, $amount: 20%);
}

#btn {
    bottom: 0px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    height: 69px;
    left: 0px;
    letter-spacing: 1px;
    position: relative;
    right: 0px;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    top: 0px;
    width: 275.328px;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 137.656px 34.5px;
    transform-origin: 137.656px 34.5px;
    caret-color: rgb(255, 255, 255);
    background: rgb(108, 108, 109) none repeat scroll 0% 0% / auto padding-box border-box;
    border: 0px none rgb(255, 255, 255);
    font: normal normal 700 normal 16px / normal Lato, Calibri, Arial, sans-serif;
    margin: 15px 30px;
    outline: rgb(255, 255, 255) none 0px;
    overflow: hidden;
    padding: 25px 120px 25px 60px;
    transition: all 0.5s ease 0s;
}/*#BUTTON_1**/

#btn:after {
    bottom: -64px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    content: '->';
    cursor: pointer;
    display: block;
    height: 138px;
    left: 197.734px;
    letter-spacing: 1px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    top: 0px;
    width: 82.5938px;
    z-index: 1;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 41.2969px 69px;
    transform: matrix(0.939693, -0.34202, 0.34202, 0.939693, 0, 0);
    transform-origin: 0px 0px;
    caret-color: rgb(255, 255, 255);
    background: rgba(255, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
    border: 0px none rgb(255, 255, 255);
    font: normal normal 700 normal 16px / normal Lato, Calibri, Arial, sans-serif;
    margin: -5px 0px 0px -5px;
    outline: rgb(255, 255, 255) none 0px;
    transition: all 0.3s ease 0s;
}/*#BUTTON_1:after*/

#btn:before {
    bottom: 0px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    content: '>>';
    cursor: pointer;
    display: block;
    height: 69px;
    left: 205.328px;
    letter-spacing: 1px;
    position: absolute;
    right: 10px;
    speak: none;
    text-decoration: none solid rgb(255, 255, 255);
    top: 0px;
    width: 60px;
    z-index: 2;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 30px 34.5px;
    transform-origin: 30px 34.5px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: normal normal 400 normal 22.4px / 67.2px icomoon;
    outline: rgb(255, 255, 255) none 0px;
}/*#BUTTON_1:before*/

#DIV_1 {
    background-position: 0px 0px;
    color: rgb(0, 0, 238);
    cursor: pointer;
    height: 36px;
    text-align: right;
    text-decoration: none solid rgb(0, 0, 238);
    white-space: nowrap;
    width: 61px;
    column-rule-color: rgb(0, 0, 238);
    perspective-origin: 30.5px 20px;
    transform-origin: 30.5px 20px;
    caret-color: rgb(0, 0, 238);
    background: rgba(0, 0, 0, 0) none repeat scroll 0px 0px / auto padding-box border-box;
    border-top: 4px solid rgb(42, 159, 255);
    border-right: 0px none rgb(0, 0, 238);
    border-bottom: 0px none rgb(0, 0, 238);
    border-left: 0px none rgb(0, 0, 238);
    font: normal normal 400 normal 15px / 21px raleway, sans-serif;
    list-style: none outside none;
    outline: rgb(0, 0, 238) none 0px;
    position:absolute;
    right:10px;
}/*#DIV_1*/

#DIV_1:after {
    color: rgb(0, 0, 238);
    cursor: pointer;
    text-align: right;
    text-decoration: none solid rgb(0, 0, 238);
    white-space: nowrap;
    column-rule-color: rgb(0, 0, 238);
    caret-color: rgb(0, 0, 238);
    border: 0px none rgb(0, 0, 238);
    font: normal normal 400 normal 15px / 21px raleway, sans-serif;
    list-style: none outside none;
    outline: rgb(0, 0, 238) none 0px;
    position:absolute;
    right:10px;
}/*#DIV_1:after*/

#DIV_1:before {

    color: rgb(0, 0, 238);
    cursor: pointer;
    text-align: right;
    text-decoration: none solid rgb(0, 0, 238);
    white-space: nowrap;
    column-rule-color: rgb(0, 0, 238);
    caret-color: rgb(0, 0, 238);
    border: 0px none rgb(0, 0, 238);
    font: normal normal 400 normal 15px / 21px raleway, sans-serif;
    list-style: none outside none;
    outline: rgb(0, 0, 238) none 0px;
    position:absolute;
    right:10px;
}/*#DIV_1:before*/

#DIV_2 {
    
    background-position: 0px 0px;
    color: rgb(0, 0, 238);
    cursor: pointer;
    height: 36px;
    text-align: center;
    text-decoration: none solid rgb(0, 0, 238);
    white-space: nowrap;
    width: 61px;
    column-rule-color: rgb(0, 0, 238);
    perspective-origin: 30.5px 18px;
    transform-origin: 30.5px 18px;
    caret-color: rgb(0, 0, 238);
    background: rgba(0, 0, 0, 0) none repeat scroll 0px 0px / auto padding-box border-box;
    border: 0px none rgb(0, 0, 238);
    font: normal normal 400 normal 15px / 21px raleway, sans-serif;
    list-style: none outside none;
    outline: rgb(0, 0, 238) none 0px;
    position:absolute;
    right:10px;
}/*#DIV_2*/

#DIV_2:after {
    
    color: rgb(0, 0, 238);
    cursor: pointer;
    text-align: center;
    text-decoration: none solid rgb(0, 0, 238);
    white-space: nowrap;
    column-rule-color: rgb(0, 0, 238);
    caret-color: rgb(0, 0, 238);
    border: 0px none rgb(0, 0, 238);
    font: normal normal 400 normal 15px / 21px raleway, sans-serif;
    list-style: none outside none;
    outline: rgb(0, 0, 238) none 0px;
    position:absolute;
    right:10px;
}/*#DIV_2:after*/

#DIV_2:before {
    
    color: rgb(0, 0, 238);
    cursor: pointer;
    text-align: center;
    text-decoration: none solid rgb(0, 0, 238);
    white-space: nowrap;
    column-rule-color: rgb(0, 0, 238);
    caret-color: rgb(0, 0, 238);
    border: 0px none rgb(0, 0, 238);
    font: normal normal 400 normal 15px / 21px raleway, sans-serif;
    list-style: none outside none;
    outline: rgb(0, 0, 238) none 0px;
    position:absolute;
    right:10px;
}/*#DIV_2:before*/

#P_3 {
    
    background-position: 0px 0px;
    color: rgb(42, 159, 255);
    cursor: pointer;
    display: inline-block;
    height: 23px;
    text-align: center;
    text-decoration: none solid rgb(42, 159, 255);
    white-space: nowrap;
    width: 44.625px;
    column-rule-color: rgb(42, 159, 255);
    perspective-origin: 30.3125px 18px;
    transform-origin: 30.3125px 18px;
    caret-color: rgb(42, 159, 255);
    background: rgba(0, 0, 0, 0) none repeat scroll 0px 0px / auto padding-box border-box;
    border: 0px none rgb(42, 159, 255);
    font: normal normal 400 normal 15px / 23px raleway, sans-serif;
    list-style: none outside none;
    margin: 0px;
    outline: rgb(42, 159, 255) none 0px;
    padding: 5px 8px 8px;
    position:absolute;
    right:10px;
}/*#P_3*/

#P_3:after {
    
    color: rgb(42, 159, 255);
    cursor: pointer;
    text-align: center;
    text-decoration: none solid rgb(42, 159, 255);
    white-space: nowrap;
    column-rule-color: rgb(42, 159, 255);
    caret-color: rgb(42, 159, 255);
    border: 0px none rgb(42, 159, 255);
    font: normal normal 400 normal 15px / 23px raleway, sans-serif;
    list-style: none outside none;
    outline: rgb(42, 159, 255) none 0px;
    position:absolute;
    right:10px;
}/*#P_3:after*/

#P_3:before {
    
    color: rgb(42, 159, 255);
    cursor: pointer;
    text-align: center;
    text-decoration: none solid rgb(42, 159, 255);
    white-space: nowrap;
    column-rule-color: rgb(42, 159, 255);
    caret-color: rgb(42, 159, 255);
    border: 0px none rgb(42, 159, 255);
    font: normal normal 400 normal 15px / 23px raleway, sans-serif;
    list-style: none outside none;
    outline: rgb(42, 159, 255) none 0px;
    position:absolute;
    right:10px;
}/*#P_3:before*/



.logo{
  font-size: 5.5em;
  font-family: 'Reem Kufi', sans-serif;
  color: rgb(188, 188, 253);
}
</style>

