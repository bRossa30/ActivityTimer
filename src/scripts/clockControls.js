import { startClock, pauseClock, stopClock, resetClock } from './clock';
import { getCurrentActivity } from './activities';
import { toggleDisableSelectActivitySection, renderCurrentActivityTitle, renderActivities } from './render'

const btnStart = document.querySelector('.clock__controls--start');
const btnReset = document.querySelector('.clock__controls--reset');
const btnPause = document.querySelector('.clock__controls--pause');
const btnStop = document.querySelector('.clock__controls--stop');

btnStart.addEventListener('click', function () {
    if (!getCurrentActivity()) {
        alert('please select activity');
        return;
    }  
    renderCurrentActivityTitle();
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnStop.disabled = false;
    toggleDisableSelectActivitySection();
    startClock();
});

btnReset.addEventListener('click', () => {
    resetClock();
    btnStart.classList.toggle('hidden');
    btnReset.classList.toggle('hidden');
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = true;
    toggleDisableSelectActivitySection();
    renderActivities();
    renderCurrentActivityTitle();
});

btnPause.addEventListener('click', () => {
    pauseClock();
    btnPause.disabled = true;
    btnStart.disabled = false;
});

btnStop.addEventListener('click', () => {
    stopClock();
    btnStop.disabled = true;
    btnPause.disabled = true;
    btnStart.classList.toggle('hidden');
    btnReset.classList.toggle('hidden');
});