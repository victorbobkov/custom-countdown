const inputContainer = document.getElementById('input-container')
const countdownForm = document.getElementById('countdownForm')
const dateElement = document.getElementById('date-picker')

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0]
dateElement.setAttribute('min', today)

let countdownTitle = ''
let countdownDate = ''

// Event Listeners
countdownForm.addEventListener('submit', (event) => {
   // Take Values from Form Input
   event.preventDefault()
   countdownTitle = event.srcElement[0].value
   countdownDate = event.srcElement[1].value
   console.log(countdownTitle, countdownDate)
})