import { addActivity } from './activities';
import { renderActivities } from './render';

const btnActivityFormShow = document.querySelector('.activities__show-form');
const activitiesForm = document.querySelector('.activities__form');

btnActivityFormShow.addEventListener('click', () => {
    btnActivityFormShow.classList.toggle('hidden');
    activitiesForm.classList.toggle('hidden');
})

activitiesForm.addEventListener('submit', e => {
    e.preventDefault();
    const activityName = e.target.elements.activityName.value;
    e.target.elements.activityName.value = "";
    addActivity(activityName);
    renderActivities();
    btnActivityFormShow.classList.toggle('hidden');
    activitiesForm.classList.toggle('hidden');
})

activitiesForm.addEventListener('reset', e => {
    btnActivityFormShow.classList.toggle('hidden');
    activitiesForm.classList.toggle('hidden');
})