import Countdown from './countdown.js'

const dreaminCountdown = new Countdown({
    container: '#dreamin',
    date: '2024-03-26',
    time: '20:42:00',
    postMessage: 'Personalised post counter message',
});
const summitCountdown = new Countdown({
    container: '#summit',
    date: '2024-03-24',
    time: '23:42:00',
    postMessage: true,
});
