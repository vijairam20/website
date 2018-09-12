<template>
    <div>
            <b>This is the settings screen.</b>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#settings{
$fc : black;
$bg : white;
    h1{
        color: $fc;
        text-align: center;
        //TODO: change font-family 
        font-family: 'Reem Kufi', sans-serif;
        font-weight: 600;
        font-size: 2em;
    }
    width: 100%;
    //background: lighten($color: black, $amount: 20%);
    background-color: $bg;
    height: 100vh;
}

</style>

