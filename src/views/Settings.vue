<template>
    <div>
          <b id="Head">This is the settings screen.</b>
    <div class="options">
        <br><br>
        <b-tooltip label="Discoverable Mode lets other users find you.">
     <b-field>Discoverable Mode
        <b-switch v-model="isSwitchedCustom"  class="Toggle" size="is-medium" true-value="On"  false-value="Off" > 
            {{isSwitchedCustom}}
        </b-switch>
        </b-field>
     </b-tooltip>
        <br><br>Choose Your Theme :
        <b-tooltip label="Pick your theme. More on their way !" position="is-right">
        <b-dropdown v-model="isPublic" hoverable>
        <button class="button is-primary" type="button" slot="trigger">
            <template v-if="isPublic">
                <b-icon icon="earth"></b-icon>
                <span>Dark</span>
            </template>
            <template v-else>
                <b-icon icon="account-multiple"></b-icon>
                <span>Light</span>
            </template>
            <b-icon icon="menu-down"></b-icon>
        </button>

        <b-dropdown-item :value="true">
            <div class="media">
                <b-icon class="media-left" icon="earth"></b-icon>
                <div class="media-content">
                    <h3>Dark</h3>
                    <small>Comfortable on the eyes for long usage. [Violet,Black]</small>
                </div>
            </div>
        </b-dropdown-item>

        <b-dropdown-item :value="false">
            <div class="media">
                <b-icon class="media-left" icon="account-multiple"></b-icon>
                <div class="media-content">
                    <h3>Light</h3>
                    <small>Makes it easy to read text and is lively. [White,Green]</small>
                </div>
            </div>
        </b-dropdown-item>
        </b-dropdown>
     </b-tooltip>
        <br><br><br><br>
     <b-dropdown hoverable>
            <button class="button is-info" slot="trigger">
                <span>Hover me!</span>
                <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-item>Something else</b-dropdown-item>
        </b-dropdown>

    </div>

    </div>
</template>

<script>
export default {
    data() {
            return {
                isSwitchedCustom : 'On',
                isPublic: true,  
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

 .tag {
        cursor: pointer;
    }
</style>

