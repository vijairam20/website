<template>
    <div>
    <div class="file-upload-form">
                Upload an image file:
                <input type="file" @change="previewImage" accept="image/*">
            </div>
            <div class="image-preview" v-if="imageData.length > 0">
         
                <img class="preview" :src="imageData">
               <button class="button is-link" @click="sendImage">send</button>
    </div>
    </div> 
</template>

<script>
import {getRoomByFriend} from '../chat.js'
export default {
    data: function(){
        return {imageData: "" ,file:''}  // we will store base64 format of image in this string
    },
    methods: {
        previewImage: function(event) {
            // Reference to the DOM input element
            var input = event.target;
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.file=input.files[0];
                    this.imageData = e.target.result;
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
              
            }
        }
        ,
        sendImage: function(){
            let currentUser = this.$store.state.currentUser
        let myRoom = getRoomByFriend(this.$route.params.id)
        currentUser.sendMessage({
    text: "see1",
    roomId: myRoom.id,
    attachment:{
        file:this.file,
        name:this.file.name,
        type:this.file.type
    }
})
.then(messageId => {
}).catch(err => {
  console.log(`Error adding message to ${myRoom.name}: ${err}`)
})
        }
    }
}
</script>

<style>
.file-upload-form, .image-preview {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 20px;
}
img.preview {
    width: 200px;
    background-color: white;
    border: 1px solid #DDD;
    padding: 5px;
}

</style>
