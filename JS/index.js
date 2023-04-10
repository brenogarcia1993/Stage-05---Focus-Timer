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
let stopCount
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)

const controls = Controls({
    playButton,
    pauseButton,
    stopButton,
    setButton
})


const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    stopCount,
    resetControls: controls.reset,
    minutes
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
    clearTimeout(stopCount)
}

function buttonStop() {
    controls.reset()
    timer.reset()
    clearTimeout(stopCount)
    
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

        minutes = newMinutes
        timer.updateDisplay(minutes, 0)
        timer.updateMinutes(minutes)
       
}

