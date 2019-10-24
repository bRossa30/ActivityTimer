import moment from 'moment';

const clock = document.querySelector('.clock');
let startTimer; //declare global variable to enable clearing interval on pause
let timeOnPause = [0, 0, 0];

const startInterval = (start) => {
    const interval = setInterval(() => {
        const newTime = new moment();
        const diff = moment.duration(newTime.diff(start));
        let timer = [diff.get('hours'), diff.get('minutes'), diff.get('seconds')];
        timer = timer.map((el, i) => el += timeOnPause[i]);
        clock.textContent = timer.map(el => el < 10 ? `0${el}` : el).join(':');
    }, 1000);
    return interval;
}

const startClock = () => {
    const startTime = new moment();
    startTimer = startInterval(startTime);
}

const pauseClock = () => {
    clearInterval(startTimer);
    const timeArr = clock.textContent.split(':');
    timeOnPause = timeArr.map(el => parseInt(el));
}

const stopClock = () => {
    clearInterval(startTimer);
    timeOnPause = [0, 0, 0];
}

const resetClock = () => {
    timeOnPause = [0, 0, 0];
    clock.textContent = "00:00:00";
}

const getTime = () => clock.textContent;

export { startClock, pauseClock, stopClock, resetClock, getTime }