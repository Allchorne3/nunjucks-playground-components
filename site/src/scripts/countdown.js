import moment from 'moment'
import isValidTime from 'Utils/validTime.js'

class Countdown {
    constructor(options) {
        // Default values
        const defaults = {
            time: '00:00:00', 
            postMessage: false
        }

        // Merge options with defaults
        const event = {...defaults, ...options}

        this.container = document.querySelector(event.container)
        this.date = event.date
        this.time = event.time
        this.postMessage = event.postMessage

        // Error handling
        switch (true) {
            case !this.container:
                console.warn(`Container element ${event.container} can not be found!`)
                break
            case !this.date:
                console.warn(`Please provide a date for your counter in ${event.container}`)
                break
            case !moment(event.date, 'YYYY-MM-DD').isValid():
                console.warn(`The target date (${event.date}) in container "${event.container}" is not valid. The correct format is 'YYYY-MM-DD'`)
                break
            case !isValidTime(this.time):
                console.warn(`The target time (${event.time}) in ${event.container} is not valid. Use a 24 hour clock with the format 'HH:mm:ss'`)
                break
        }

        this.days = this.container.querySelector('.days span')
        this.hours = this.container.querySelector('.hours span')
        this.minutes = this.container.querySelector('.minutes span')
        this.seconds = this.container.querySelector('.seconds span')
        this.targetDate = moment(`${this.date}T${this.time}`)

        // Run the updateCounter function
        this.updateCounter()
    }

    updateCounter() {
        let currentDate

        let counter = setInterval(() => {
            // Set the current date
            currentDate = moment()

            // Calculate the difference between the target date/time and the current date/time
            const timeRemaining = moment.duration(this.targetDate.diff(currentDate))

            // If the target date has arrived
            if (timeRemaining.asSeconds() <= 0) {
                // Clear the counter interval
                clearInterval(counter)

                // If postMessage is provided, create a message when countdown has finished
                if (this.postMessage) {
                    const message = document.createElement('p')
                    message.classList.add('countdown-complete')
                    message.textContent = typeof this.postMessage === 'string' ? this.postMessage : 'Event is live!'
                    this.container.appendChild(message)

                    // Remove the countdown element
                    this.container.querySelector('.is-countdown').remove()
                }
                return
            }

            // Assign the value of days, hours, minutes, and seconds to the relevant DOM elements
            this.days.textContent = Math.floor(timeRemaining.asDays())
            this.hours.textContent = timeRemaining.hours()
            this.minutes.textContent = timeRemaining.minutes()
            this.seconds.textContent = timeRemaining.seconds()

        }, 1000)
    }
}

export default Countdown

// Example usage
//const dreaminCountdown = new Countdown({
//    container: '#dreamin',
//    date: '2024-03-24',
//    time: '20:42:00',
//    postMessage: 'Personalised post counter message', //or simply, true, for default message
//});