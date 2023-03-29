export default function Timer({
    minutesDisplay,
    secondsDisplay,
    stopCount,
    resetControls,
}) {

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(stopCount)
}

function countdown() {
    stopCount = setTimeout(function() {
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

    return {
        countdown, //Shorthand properties
        resetTimer,
    }
    
}