import { addActivity } from './activities';
import { renderActivities } from './render';
import { renderHistoryFilters } from '../history/historyRender.js';

const btnActivityFormShow = document.querySelector('.js-activities-show-form');
const activitiesForm = document.querySelector('.js-activities-form');

btnActivityFormShow.addEventListener('click', () => {
    btnActivityFormShow.classList.toggle('invisible');
    activitiesForm.classList.toggle('invisible');
    activitiesForm.activityName.setAttribute('tabindex', '0');
    setTimeout(() => {
        activitiesForm.activityName.focus();
    }, 300)
})

activitiesForm.addEventListener('submit', e => {
    e.preventDefault();
    const activityName = e.target.elements.activityName.value;
    e.target.elements.activityName.value = "";
    addActivity(activityName);
    renderActivities();
    renderHistoryFilters();
    btnActivityFormShow.classList.toggle('invisible');
    activitiesForm.classList.toggle('invisible');
})

activitiesForm.addEventListener('reset', e => {
    btnActivityFormShow.classList.toggle('invisible');
    activitiesForm.classList.toggle('invisible');
})