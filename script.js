const inputContainer = document.getElementById('input-container')
const countdownForm = document.getElementById('countdownForm')
const dateElement = document.getElementById('date-picker')

const countdownElement = document.getElementById('countdown')
const countdownElementTitle = document.getElementById('countdown-title')
const countdownBtn = document.getElementById('countdown-button')
const timeElements = document.querySelectorAll('span')

const completeElement = document.getElementById('complete')
const completeElementInfo = document.getElementById('complete-info')
const completeBtn = document.getElementById('complete-button')

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0]
dateElement.setAttribute('min', today)

let countdownTitle = ''
let countdownDate = ''
let countdownValue = Date
let countdownActive

const second = 1000 // 1sec = 1000ms
const minute = second * 60
const hour = minute * 60
const day = hour * 24

// Populate Countdown / Complete UI
const updateDOM = () => {
   countdownActive = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownValue - now
      console.log('distance', distance)

      const days = Math.floor(distance / day)
      const hours = Math.floor((distance % day) / hour)
      const minutes = Math.floor((distance % hour) / minute)
      const seconds = Math.floor((distance % minute) / second)
      console.log(days, hours, minutes, seconds)

      // Hide Input
      inputContainer.hidden = true

      // If the countdown has ended, show complete
      if (distance < 0) {
         countdownElement.hidden = true
         clearInterval(countdownActive)
         completeElementInfo.textContent = `${countdownTitle} finished on ${countdownDate}`
         completeElement.hidden = false
      } else {
         // Else, show the countdown in progress
         countdownElementTitle.textContent = `${countdownTitle}`
         timeElements[0].textContent = `${days}`
         timeElements[1].textContent = `${hours}`
         timeElements[2].textContent = `${minutes}`
         timeElements[3].textContent = `${seconds}`
         completeElement.hidden = true
         countdownElement.hidden = false
      }
   }, second)
}

// Reset All Values
const reset = () => {
   // Hide Countdowns, show Input
   countdownElement.hidden = true
   completeElement.hidden = true
   inputContainer.hidden = false
   // Stop the countdown
   clearInterval(countdownActive)
   // Reset values
   countdownTitle = ''
   countdownDate = ''
}

// Event Listeners
countdownForm.addEventListener('submit', (event) => {
   // Take Values from Form Input
   event.preventDefault()
   countdownTitle = event.srcElement[0].value
   countdownDate = event.srcElement[1].value
   console.log(countdownTitle, countdownDate)
   // Check for valid date
   if (countdownDate === '') {
      alert('Please select a date for the countdown')
   } else {
      // Get number version of current Date, update DOM
      countdownValue = new Date(countdownDate).getTime()
      console.log(countdownValue)
      updateDOM()
   }
})


countdownBtn.addEventListener('click', reset)
completeBtn.addEventListener('click', reset)