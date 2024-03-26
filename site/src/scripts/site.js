import CountdownV2 from 'Scripts/countdown-v2.js'

// JS DEFINED COUNTDOWN CLASS
// const dreaminCountdown = new Countdown({
//     container: '#dreamin',
//     date: '2024-10-26',
//     time: '20:42:00',
//     postMessage: 'Personalised post counter message',
// });



// NUNJUCKS TEMPLATE COUNTDOWNS
const counters = document.querySelectorAll('.countdown-container')

if(counters) {
    for (const counter of counters) {
        const countdown = new CountdownV2({container: `#${counter.getAttribute('id')}`})
    }
}
