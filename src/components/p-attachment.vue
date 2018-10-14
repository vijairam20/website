<template>
    <div id="photo-cta">
                 <b-field class="file">
        <b-upload @input="findAttachments" drag-drop>
            <section class="section">
                    <div class="content has-text-centered">
                        <p>
                            <b-icon
                                icon="upload"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Drop your files here or click to upload</p>
                    </div>
                </section>
        </b-upload>
                 </b-field>
            <div class="image-preview" v-if="imageData.length > 0">
         
                <img class="preview" :src="imageData">
               <button class="button is-link" @click="sendAttachment">send</button>
            </div>
            <div v-if="isAttachment">
                <!--TODO: Display files details -->
                <button class="button is-link" @click="sendAttachment">send</button>
            </div>
    </div> 
</template>

<script>
import { getRoomByFriend } from "../chat.js";
export default {
  data: function() {
    return { imageData: "", file: "" , files:[] , isAttachment:false}; 
  },
  methods: {
   
    sendAttachment: function() {
      let currentUser = this.$store.state.currentUser;
      let myRoom = getRoomByFriend(this.$route.params.id);
      currentUser
        .sendMessage({
          text: this.file.name,
          roomId: myRoom.id,
          attachment: {
            file: this.file,
            name: this.file.name,
            type: this.file.type
          }
        })
        .then(messageId => {
          this.file = "";
          this.imageData = "";
          this.isAttachment = false 
        })
        .catch(err => {
          console.log(`Error adding message to ${myRoom.name}: ${err}`);
        });
    },
    findAttachments:function(files){
     this.imageData = ""
     let uploadfile = files[0]
      this.file = uploadfile;
      if(uploadfile.type === "image/png"  || uploadfile.type==="imgae/jpeg" || uploadfile.type ==="image/png" ){
         var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = e => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.imageData = e.target.result;
        };

        reader.readAsDataURL(uploadfile);

      }
      else{
          this.isAttachment = true 
      }
      console.log(uploadfile)
    }
  }
};
</script>

<style lang="scss" scoped>
#photo-cta {
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 500px;
  padding: 1em;
}

.image-preview {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
}

img.preview {
  max-width: 300px;
  max-height: 300px;
  background-color: white;
  border: 1px solid #ddd;
  padding: 5px;
  margin-bottom: 0.5em;
}
h1 {
  text-align: center;
}

img {
  max-width: 300px;
  max-width: 300px;
}
</style>
