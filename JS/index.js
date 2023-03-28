// EcmaScript - ES6 Modules
// default import
import resetControls from "./controls.js"

// named import
import {countdown, resetTimer} from "./timer.js"



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


playButton.addEventListener('click', buttonPlay)    //Callback
pauseButton.addEventListener('click', buttonPause)  //Callback
stopButton.addEventListener('click', buttonStop)    //Callback
soundOnButton.addEventListener('click', buttonSound)
soundOffButton.addEventListener('click', buttonSound)
setButton.addEventListener('click', buttonSetTimer)

function buttonPlay() {
    playButton.classList.add('hide')
    pauseButton.classList.remove('hide')
    setButton.classList.add('hide')
    stopButton.classList.remove('hide')

    countdown()
}


function buttonPause() {
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
    clearTimeout(stopCount)
}

function buttonStop() {
    resetControls()
    resetTimer()
    clearTimeout(stopCount)
    
}

function buttonSound() {
    soundOnButton.classList.toggle('hide')
    soundOffButton.classList.toggle('hide')
}

function buttonSetTimer() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
        resetTimer()
        return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
       
}

