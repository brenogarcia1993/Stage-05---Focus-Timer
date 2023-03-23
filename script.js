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

        if(seconds <= 0) {
            seconds = 60

            minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
        }
        
        secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

        if(minutes <= 0 && seconds == 0) {
            
            setButton.classList.remove('hide')
            stopButton.classList.add('hide')
            pauseButton.classList.add('hide')
            playButton.classList.remove('hide')
            
            return

        }
        countdown()
        
    }, 1000)
}

// function leftZero() {
//     let secondsWithZero = Number(secondsDisplay.innerHTML)

//     if(seconds < 10) {
//         secondsWithZero = '0' + secondsWithZero
//     }
        
//     secondsDisplay.innerHTML = secondsWithZero
//     leftZero()
// }


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

function buttonSound() {
    soundOnButton.classList.toggle('hide')
    soundOffButton.classList.toggle('hide')
}

function buttonSetTimer() {
    minutes = prompt('Quantos minutos?')
    minutesDisplay.innerHTML = String(minutes).padStart(2, "0")
    seconds = prompt('Quantos segundos?')
    secondsDisplay.innerHTML = seconds
    
}