// EcmaScript - ES6 Modules
// default import
import Controls from "./controls.js"

// named import
import Timer from "./timer.js"

const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const setButton = document.querySelector('.set')
const soundOnButton = document.querySelector('.sound-on')
const soundOffButton = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')



const controls = Controls({
    playButton,
    pauseButton,
    stopButton,
    setButton
})


const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
    
})


playButton.addEventListener('click', buttonPlay)    //Callback
pauseButton.addEventListener('click', buttonPause)  //Callback
stopButton.addEventListener('click', buttonStop)    //Callback
soundOnButton.addEventListener('click', buttonSound)
soundOffButton.addEventListener('click', buttonSound)
setButton.addEventListener('click', buttonSetTimer)

function buttonPlay() {
    
    controls.play()
    timer.countdown()
}


function buttonPause() {
    controls.pause()
    timer.hold()
    
}

function buttonStop() {
    controls.reset()
    timer.reset()
    
    
}

function buttonSound() {
    soundOnButton.classList.toggle('hide')
    soundOffButton.classList.toggle('hide')
}

function buttonSetTimer() {
    let newMinutes = controls.getMinutes()
        if (!newMinutes) {
           timer.reset()
           return
        }

        
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
       
       
}

