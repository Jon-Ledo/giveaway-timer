const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let futureDate = new Date(2021, 10, 24, 11,30,0)

const year = futureDate.getFullYear()
const month = months[futureDate.getMonth()]
const day = weekdays[futureDate.getDay()]
const date = futureDate.getDate()
const hour = futureDate.getHours()
const min = futureDate.getMinutes()

// Update text
giveaway.textContent = `giveaway ends on ${day}, ${month} ${date} ${year}, ${hour}:${min}am`

// future time in milliseconds
const futureTime = futureDate.getTime()
console.log(futureTime);

function getRemaingingTime() {
  const today = new Date().getTime()
  const t = futureTime - today
  console.log(t); // t is in milliseconds
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr

  // values in ms
  const oneDay = 24*60*60*1000
  const oneHour = 60*60*1000
  const oneMinute = 60*1000
  // calculate all values
  let days = Math.trunc(t/oneDay)
  let hours = Math.trunc((t%oneDay) / oneHour)
  let minutes = Math.trunc((t % oneHour) / oneMinute)
  let seconds = Math.trunc((t % oneMinute) / 1000)

  // set values array
  const values = [days, hours, minutes, seconds]

  function format(item) {
    if (item < 10) {
      return item = `0${item}`
    }
    return item
  }

  items.forEach((item, index) => { // assign an index number to each item
    item.innerHTML = format(values[index]) // use the index to match to value within the new array
  })
  if (t < 0) {
    clearInterval(countdown) // stops execution of the countdown
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway is over<h4>`
  }
}

// countdown
let countdown = setInterval(getRemaingingTime, 1000)
getRemaingingTime()
