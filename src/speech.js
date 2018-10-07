window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new SpeechRecognition();

export const dictate = ()=>{
    
    recognition.start();
  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    
    console.log(speechToText)
    //This needs to be sent back to the chatarea.vue
    return speechToText
  }
}