// EcmaScript - ES6 Modules
// default import
import Controls from "./controls.js"

// named import
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"

import { 
    playButton,
    pauseButton,
    setButton,
    stopButton,
    soundOnButton,
    soundOffButton,
    minutesDisplay,
    secondsDisplay, 
} from "./elements.js"




const controls = Controls({
    playButton,
    pauseButton,
    stopButton,
    setButton
})

const sound = Sound()

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
    
})


// playButton.addEventListener('click', buttonPlay)    //Callback
// pauseButton.addEventListener('click', buttonPause)  //Callback
// stopButton.addEventListener('click', buttonStop)    //Callback
// soundOnButton.addEventListener('click', buttonSoundOn)
// soundOffButton.addEventListener('click', buttonSoundOff)
// setButton.addEventListener('click', buttonSetTimer)

// function buttonPlay() {
    
//     controls.play()
//     timer.countdown()
//     sound.pressButton()
// }


// function buttonPause() {
//     controls.pause()
//     timer.hold()
//     sound.pressButton()
    
// }

// function buttonStop() {
//     controls.reset()
//     timer.reset()
//     sound.pressButton()
    
    
// }

// function buttonSoundOn() {
//     soundOnButton.classList.add('hide')
//     soundOffButton.classList.remove('hide')
//     sound.bgAudio.play()
// }

// function buttonSoundOff() {
//     soundOnButton.classList.remove('hide')
//     soundOffButton.classList.add('hide')
//     sound.bgAudio.pause()
// }
// function buttonSetTimer() {
//     let newMinutes = controls.getMinutes()
//         if (!newMinutes) {
//            timer.reset()
//            return
//         }

        
//         timer.updateDisplay(newMinutes, 0)
//         timer.updateMinutes(newMinutes)
       
       
// }

