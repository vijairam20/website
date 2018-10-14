<template>
<div id="home">
	<div id="navbar">
		<span class="focus-in-contract-bck">Quanta<sup class = "focus-in-contract-bck-spec">TM</sup></span>
		<nav class="cl-effect-11 a" id="cl-effect-11">
			<router-link href="#cl-effect-11" data-hover="Home" to="/">Home</router-link>
			<router-link href="#cl-effect-11" data-hover="About" to="/about">About</router-link>
			<router-link href="#cl-effect-11" data-hover="Support" to="/support">Support</router-link>

		</nav>
	</div>
	<div id="content">
		<div id="cta">
			<p>Welcome to Quanta : The Chat App of the Future.<br><br> With Quanta, a top of the line chatting app, we would like to bring to you a highly customizable and responsive app. Chat at the speed of your thoughts. Never will Chatting be the same !</p>
			<p>
			:) </p>
			<router-link class="btn btn-3 btn-3e icon-arrow-right " to="/signup">SignUp</router-link>
			<router-link class="btn btn-3 btn-3e icon-arrow-right " to="/login">Login</router-link>
		</div>
		<div id="isohero">
		</div>
	</div>
</div>
</template>

<script>
import Settings from "./Settings";
export default {
	name: 'home',
	components: {}
}
</script>

<style lang="scss" scoped>
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

#home {
	height: 160vh;
	background-color: #eeeeee;
}

#navbar {
	overflow: hidden;
	height: 17vh;
	width: 100%;
	text-align: left;
	padding-left: 1.5em;
	background-color: rgb(24, 19, 19);
	position: fixed;
	display: flex;
	justify-content: space-around;
	z-index: 1;
}

#content {
	display: grid;
	grid-template-columns: 50% 50%;
	height: 90vh;
}

#cta {
	width: 100%;
	text-align: center;
	padding: 150px;
	padding-bottom: 80px;
	font-size: 2em;
}

#isohero {
	-webkit-animation: isohero 7s infinite alternate-reverse both;
	animation: isohero 7s infinite alternate-reverse both;
}

.logo {
	font-size: 5.5em;
	font-family: "Reem Kufi", sans-serif;
	color: rgb(188, 188, 253);
	margin-bottom: 2em;
}

*,
::after,
::before {
	box-sizing: border-box;
}

.btn {
	border: none;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	font-size: 3em;
	color: whitesmoke;
	background: none;
	cursor: pointer;
	padding: 20px 80px;
	display: inline-block;
	margin: 15px 30px;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 200;
	outline: none;
	position: relative;
	transition: all 0.3s ease 0.2s;
}

.btn::after {
	content: "->";
	position: absolute;
	z-index: -1;
	transition: all 0.3s ease 0.2s;
}

.btn::before,
.icon-heart::after,
.icon-star::after,
.icon-plus::after,
.icon-file::before {
	font-family: icomoon;
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	position: relative;
	-webkit-font-smoothing: antialiased;
}

.btn-6 {
	color: rgb(255, 255, 255);
	background: rgb(197, 175, 49);
	transition: none 0s ease 0s;
}

.btn-6:active {
	top: 2px;
}

.btn-6b {
	border: 4px solid rgb(197, 175, 49);
	border-radius: 15px;
}

.btn-6b:hover {
	background: transparent;
	color: goldenrod;
}

*,
::after,
::before {
	box-sizing: border-box;
}

.btn {
	border: none;
	font-family: inherit;
	font-size: inherit;
	color: inherit;
	background: none;
	cursor: pointer;
	padding: 25px 80px;
	display: inline-block;
	margin: 15px 30px;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 700;
	outline: none;
	position: relative;
	transition: all 0.3s ease 0s;
}

.btn::after {
	content: "";
	position: absolute;
	z-index: -1;
	transition: all 0.3s ease 0s;
}

.btn::before,
.icon-heart::after,
.icon-star::after,
.icon-plus::after,
.icon-file::before {
	font-family: icomoon;
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	position: relative;
	-webkit-font-smoothing: antialiased;
}

.btn-6 {
	color: rgb(255, 255, 255);
	background: goldenrod;
	transition: none 0s ease 0s;
}

.btn-6:active {
	top: 2px;
}

.btn-6b {
	border: 4px solid goldenrod;
	border-radius: 15px;
}

.btn-6b:hover {
	background: goldenrod;
	color: goldenrod;
}

.icon-arrow-right::before {
	content: "";
}

.btn-3 {
	background: rgb(252, 173, 38);
	color: rgb(255, 255, 255);
}

.btn-3:hover {
	background: rgb(242, 158, 13);
}

.btn-3:active {
	background: rgb(245, 133, 0);
	top: 20px;
}

.btn-3::before {
	position: relative;
	height: 100%;
	left: 0px;
	top: 0px;
	line-height: 3;
	font-size: 90%;
	width: 60px;
	text-align: center;
}

.btn-3e {
	padding-top: 1px;
	padding-left: 20mm;
	padding-bottom: 2px;
	padding-right: 30mm;
	overflow: hidden;
}

.btn-3e::before {
	left: auto;
	right: 10px;
	z-index: 2;
}

.btn-3e::after {
	width: 30%;
	height: 200%;
	background: rgba(255, 255, 255, 0.1);
	z-index: 1;
	right: 0px;
	top: 0px;
	margin: -5px 0px 0px -5px;
	transform-origin: 0px 0px 0px;
	transform: rotate(-20deg);
}

.btn-3e:hover::after {
	width: 40%;
}

.focus-in-contract-bck {
	font-size: 5.5em;
	font-family: "Reem Kufi", sans-serif;
	color: rgb(188, 188, 253);
	-webkit-animation: focus-in-contract-bck 1s
		cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s 2 alternate-reverse both;
	animation: focus-in-contract-bck 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s
		2 alternate-reverse both;
}

.focus-in-contract-bck-spec {
	font-size: 0.3em;
	font-family: "Reem Kufi", sans-serif;
	color: rgb(188, 188, 253);
	-webkit-animation: focus-in-contract-bck 1s
		cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s 2 alternate-reverse both;
	animation: focus-in-contract-bck 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s
		2 alternate-reverse both;
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
</style>
