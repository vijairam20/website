<template>
    <div>
          <b id="Head">This is the settings screen.</b>
    <div>
     <b-field class="options">Toggle Options
        <b-switch v-model="isSwitchedCustom" , class="Toggle"  true-value="Yes"  false-value="No" {{isSwitchedCustom}}> -->
        </b-switch>
        </b-field>
    </div>
    </div>
</template>

<script>
export default {
    data() {
            return {
                
                isSwitchedCustom : 'Yes',
                   
            }
        },

}
</script>

<style lang="scss" scoped>

#Head
{
    font-size: 2.5em;
    font-weight: bolder;
}
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

.options{
    color : #eeeeee;
    font-size: 1.5em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;

}
</style>

