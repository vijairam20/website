<template>
    <div id="about">
        <div id="navbar">
            <span class = "focus-in-contract-bck">Quanta<sup class = "focus-in-contract-bck-spec">TM</sup></span>
        </div>
    </div>
</template>

<script>
export default {
name: 'about',
components :{
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
</style>

