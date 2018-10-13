<template>
<div id="user">
   <h1></h1>
</div>
</template>

<script>
import {
    storage
} from "../firebaseConfig.js";
import {
  addProfilePicToStorage
} from "../chat.js"
export default {
    data: function () {
        return {
            imageData: "",
            file: "",
            files: [],
            isAttachment: false
        };
    },
    methods: {

        uploadProfilePicture: function () {
            var profilepic = storage.ref().child("profilepicture").child(this.$store.state.currentUserDetails.username)
            profilepic.put(this.file)
            .then((data) => {
                this.file = "";
                this.imageData = "";
                this.files = "";
                this.isAttachment = false ;
                 this.$toast.open({
                    message: 'Profile Picture added',
                    type: 'is-success'
                })
              profilepic.getDownloadURL().then((link)=>{
                  console.log(link);
                  addProfilePicToStorage(link)
              }).catch()
            })
            .catch((err) => {
              console.log(err);
            });

        },
        findAttachments: function (files) {
            this.imageData = "";
            let uploadfile = files[0];
            this.file = uploadfile;
            if (uploadfile.type === "image/png" || uploadfile.type === "image/jpeg" || uploadfile.type === "image/jpg") {
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = e => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.imageData = e.target.result;
                };

                reader.readAsDataURL(uploadfile);

            } else {
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
