// JavaScript 
const audio = document.getElementById('dwa');
let count = 0;
function playPause() {
    if(count == 0){
        count = 1;
        audio.play();
            }else{
                count = 0;
                audio.pause();
                audio.currentTime = 0;
                }
                }
