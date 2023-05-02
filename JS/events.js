import {
  playButton,
  pauseButton,
  setButton,
  stopButton,
  soundOffButton,
  soundOnButton
} from "./elements.js"

export default function({controls, timer, sound}) {
    

playButton.addEventListener("click", buttonPlay); //Callback
pauseButton.addEventListener("click", buttonPause); //Callback
stopButton.addEventListener("click", buttonStop); //Callback
soundOnButton.addEventListener("click", buttonSoundOn);
soundOffButton.addEventListener("click", buttonSoundOff);
setButton.addEventListener("click", buttonSetTimer);

function buttonPlay() {
  controls.play();
  timer.countdown();
  sound.pressButton();
}

function buttonPause() {
  controls.pause();
  timer.hold();
  sound.pressButton();
}

function buttonStop() {
  controls.reset();
  timer.reset();
  sound.pressButton();
}

function buttonSoundOn() {
  soundOnButton.classList.add("hide");
  soundOffButton.classList.remove("hide");
  sound.bgAudio.play();
}

function buttonSoundOff() {
  soundOnButton.classList.remove("hide");
  soundOffButton.classList.add("hide");
  sound.bgAudio.pause();
}
function buttonSetTimer() {
  let newMinutes = controls.getMinutes();
  if (!newMinutes) {
    timer.reset();
    return;
  }

  timer.updateDisplay(newMinutes, 0);
  timer.updateMinutes(newMinutes);
}

}