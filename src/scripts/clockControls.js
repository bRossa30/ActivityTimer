import { startClock, pauseClock, stopClock, resetClock } from './clock';
import { getCurrentActivity, disselectAllActivities } from './activities';
import { toggleDisableSelectActivitySection, renderCurrentActivityTitle } from './render'
import { showPopup } from './popup';

const btnStart = document.querySelector('.clock__controls--start');
const btnReset = document.querySelector('.clock__controls--reset');
const btnPause = document.querySelector('.clock__controls--pause');
const btnStop = document.querySelector('.clock__controls--stop');

btnStart.addEventListener('click', function () {
    if (!getCurrentActivity()) {
        showPopup('please select activity', 'ok');
        return;
    }  
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnStop.disabled = false;
    renderCurrentActivityTitle();
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
    disselectAllActivities();
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