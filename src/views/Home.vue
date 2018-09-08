<template>
  <div id="home">
    <div id="navbar">
      <span class = "focus-in-contract-bck">Quanta<sup class = "focus-in-contract-bck-spec">TM</sup></span>
      <nav class="cl-effect-11 a" id="cl-effect-11">
					<a href="#cl-effect-11 a" data-hover="Home">Home</a>
					<a href="#cl-effect-11 a" data-hover="About">About</a>
					
				</nav>
    </div>
    <div id="content">
    <div id="cta">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto consequatur, cumque dicta eos, 
        odio veniam doloribus ipsum quasi facilis ullam. Odit minima fuga velit. Esse reprehenderit error voluptatibus 
        atque!</p>
      <router-link class = "btn btn-3 btn-3e icon-arrow-right button is-link" to="/signup">SignUp</router-link>
      <router-link class = "btn btn-3 btn-3e icon-arrow-right button is-link" to="/login">Login</router-link>
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
height: 180vh;
background-color: #eeeeee;

}
#navbar{
  overflow: hidden;
  height: 18vh;
  width:100%;
  text-align: left;
  padding-left : 20px;
  background-color: rgb(24, 19, 19);
  position:fixed;
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
    -webkit-animation: isohero 7s infinite alternate-reverse both;
    animation: isohero 7s infinite alternate-reverse both;
}

/*
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
    background: rgb(197, 175, 49) none repeat scroll 0% 0% / auto padding-box border-box;
    border: 0px none rgb(255, 255, 255);
    font: normal normal 700 normal 16px / normal Lato, Calibri, Arial, sans-serif;
    margin: 15px 30px;
    outline: rgb(255, 255, 255) none 0px;
    overflow: hidden;
    padding: 25px 120px 25px 60px;
    transition: all 1.5s ease 0s;
}/*#BUTTON_1*/

 /*
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
    transition: all 1.5s ease 0s;
}/*#BUTTON_1:after*/

/*
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
    padding: 30px;
    padding-right:30px;
    float: right;
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
    padding:20px;
    padding-right:20px;
    float: right;
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
    padding:20px;
    padding-right:20px;
    float: right;
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
    padding:20px;
    padding-right:20px;
    float: right;
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
    padding:20px;
    padding-right:20px;
    float: right;
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
    padding:20px;
    padding-right:20px;
    float: right;
}/*#DIV_2:before*/

#P_3 {
    
    background-position: 20px 20px;
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
    padding:20px;
    padding-right:20px;
    float: right;
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
    padding:20px;
    padding-right:20px;
    float: right;
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
    float: right;
    padding:20px;
    padding-right:20px;
}/*#P_3:before*/

*, ::after, ::before {
    box-sizing: border-box; }

.btn {
    border: none; 
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; 
    font-size: 3em; 
    color: whitesmoke; 
    background: none; 
    cursor: pointer; 
    padding: 20px 80px; 
    display: inline-block; 
    margin: 15px 30px; 
    text-transform: uppercase; 
    letter-spacing: 1px; font-weight: 200;
    outline: none;
    position: relative;
    transition: all 0.3s ease 0.2s;
    }
    
.btn::after { 
    content: "->"; 
    position: absolute; 
    z-index: -1; 
    transition: all 0.3s ease 0.2s; }
    
.btn::before, .icon-heart::after, .icon-star::after, .icon-plus::after, .icon-file::before {
     font-family: icomoon; 
     speak: none; 
     font-style: normal;
     font-weight: normal;
     font-variant: normal;
     text-transform: none; line-height: 1;
     position: relative; 
     -webkit-font-smoothing: antialiased; }

.btn-6 { 
    color: rgb(255, 255, 255); 
    background: rgb(197, 175, 49); 
    transition: none 0s ease 0s; }
    
.btn-6:active { 
    top: 2px; }
    
.btn-6b { 
    border: 4px solid rgb(197, 175, 49); 
    border-radius: 15px; 
}

.btn-6b:hover { background: transparent; color: goldenrod; }*,
::after, ::before { box-sizing: border-box; }
.btn { border: none; font-family: inherit; font-size: inherit; color: inherit; background: none; cursor: pointer; padding: 25px 80px; display: inline-block; margin: 15px 30px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; outline: none; position: relative; transition: all 0.3s ease 0s; }
.btn::after { content: ""; position: absolute; z-index: -1; transition: all 0.3s ease 0s; }
.btn::before, 
.icon-heart::after, 
.icon-star::after, 
.icon-plus::after,
.icon-file::before { font-family: icomoon; speak: none; font-style: normal; font-weight: normal; font-variant: normal; text-transform: none; line-height: 1; position: relative; -webkit-font-smoothing: antialiased; }
.btn-6
{ color: rgb(255, 255, 255); background: goldenrod; transition: none 0s ease 0s; }
.btn-6:active { top: 2px; }
.btn-6b { border: 4px solid goldenrod; border-radius: 15px; }
.btn-6b:hover { background: goldenrod; color: goldenrod; }
.icon-arrow-right::before {content: ""; }
.btn-3 { background: rgb(252, 173, 38); color: rgb(255, 255, 255); }
.btn-3:hover { background: rgb(242, 158, 13); }
.btn-3:active { background: rgb(245, 133, 0); top: 20px; }
.btn-3::before { position: relative; height: 100%; left: 0px; top: 0px; line-height: 3; font-size: 90%; width: 60px; text-align: center;}
.btn-3e { padding-top: 1px; padding-left: 20mm; padding-bottom: 2px; padding-right: 30mm; overflow: hidden; }
.btn-3e::before { left: auto; right: 10px; z-index: 2; }
.btn-3e::after { width: 30%; height: 200%; background: rgba(255, 255, 255, 0.1); z-index: 1; right: 0px; top: 0px; margin: -5px 0px 0px -5px; transform-origin: 0px 0px 0px; transform: rotate(-20deg); }
.btn-3e:hover::after { width: 40%; }

.focus-in-contract-bck {
    font-size: 5.5em;
  font-family: 'Reem Kufi', sans-serif;
  color: rgb(188, 188, 253);
	-webkit-animation: focus-in-contract-bck 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.2s 2 alternate-reverse both;
	        animation: focus-in-contract-bck 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.2s 2 alternate-reverse both;
}

.focus-in-contract-bck-spec {
    font-size: 0.3em;
  font-family: 'Reem Kufi', sans-serif;
  color: rgb(188, 188, 253);
	-webkit-animation: focus-in-contract-bck 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.2s 2 alternate-reverse both;
	        animation: focus-in-contract-bck 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.2s 2 alternate-reverse both;
}

@-webkit-keyframes focus-in-contract-bck {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(300px);
            transform: translateZ(300px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(12px);
            transform: translateZ(12px);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes focus-in-contract-bck {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(300px);
            transform: translateZ(300px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(12px);
            transform: translateZ(12px);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}

@-webkit-keyframes isohero {
  0% {
    background-position: 0% 50%;
    background-color: cyan;
  }
  100% {
    background-position: 100% 50%;
    background-color: indigo;
  }
}
@keyframes isohero {
  0% {
    background-position: 0% 50%;
    background-color: cyan;
  }
  100% {
    background-position: 100% 50%;
    background-color: indigo;
  }
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
  display: block;
}
*,
::after,
::before {
  box-sizing: border-box;
}
a:focus {
  outline: dotted thin;
}
a:active,
a:hover {
  outline: 0px;
}
a {
  text-decoration: none;
}
nav a {
  position: relative;
  display: inline-block;
  margin: 15px 25px;
  outline: none;
  color: rgb(255, 255, 255);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  text-shadow: rgba(255, 255, 255, 0.3) 0px 0px 1px;
  font-size: 1.35em;
}
nav a:hover,
nav a:focus {
  outline: none;
}
.cl-effect-11 a {
  padding: 10px 0px;
  border-top: 2px solid rgb(9, 114, 180);
  color: rgb(9, 114, 180);
  text-shadow: none;
}
.cl-effect-11 a::before {
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  padding: 10px 0px;
  max-width: 0px;
  border-bottom: 2px solid rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  content: attr(data-hover);
  transition: max-width 0.5s ease 0s;
}
.cl-effect-11 a:hover::before,
.cl-effect-11 a:focus::before {
  max-width: 100%;
}


.logo{
  font-size: 5.5em;
  font-family: 'Reem Kufi', sans-serif;
  color: rgb(188, 188, 253);
}
</style>