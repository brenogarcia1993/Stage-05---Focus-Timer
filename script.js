const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const setButton = document.querySelector('.set')
const soundOnButton = document.querySelector('.sound-on')
const soundOffButton = document.querySelector('.sound-off')
let minutes
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

// playButton.classList.add('hide')
// document.querySelector('.pause').classList.remove('hide')

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

function countdown() {
    setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        updateTimerDisplay(minutes, 0)

        if(minutes <= 0  && seconds == 0) {
            resetControls()
            return

        }

        if(seconds <= 0) {
            seconds = 60
            --minutes
        }
        
        // secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
        updateTimerDisplay(minutes, String(seconds -1))
        
        countdown()
        
    }, 1000)
}

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function buttonPause() {
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
}

function buttonStop() {
    setButton.classList.remove('hide')
    stopButton.classList.add('hide')
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')   
}

function resetControls() {
    setButton.classList.remove('hide')
    stopButton.classList.add('hide')
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
}

function buttonSound() {
    soundOnButton.classList.toggle('hide')
    soundOffButton.classList.toggle('hide')
}

function buttonSetTimer() {
    minutes = prompt('Quantos minutos?')
    updateTimerDisplay(minutes, 0)
    seconds = prompt('Quantos segundos?')
    updateTimerDisplay(minutes, seconds)    
}