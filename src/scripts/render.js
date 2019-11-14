import { getActivities, removeActivity, selectActivity, getCurrentActivity, disselectAllActivities } from './activities';
import { renderHistoryFilters } from './renderHistory'



const activities = getActivities();

const renderActivities = () => {
    const activitiesList = document.querySelector('.activities__list');


    activitiesList.textContent = "";

    activities && activities.forEach(activity => {
        activitiesList.appendChild(renderSingleActivityDOM(activity));
    });

}

const renderSingleActivityDOM = (activity) => {
    const singleActivityLi = document.createElement('li');
    const pActivityName = document.createElement('p');
    const buttonRemove = document.createElement('button');

    singleActivityLi.setAttribute('id', activity.id);
    pActivityName.textContent = activity.activityName;
    buttonRemove.textContent = 'delete';
    buttonRemove.classList.add('btn--remove');
    buttonRemove.classList.add('invisible');
    singleActivityLi.addEventListener('mouseover', () => {
        buttonRemove.classList.remove('invisible');
    })
    singleActivityLi.addEventListener('mouseout', () => {
        buttonRemove.classList.add('invisible');
    })
    singleActivityLi.addEventListener('click', () => {
        selectActivity(activity);
    })
    buttonRemove.addEventListener('click', (e) => {
        e.stopPropagation(); //stop the action of eventListener at li node
        removeActivity(activity.id);
        renderActivities();
        renderHistoryFilters();
    })
    singleActivityLi.appendChild(pActivityName);
    singleActivityLi.appendChild(buttonRemove);

    return singleActivityLi;
}

const renderCurrentActivityTitle = () => {
    const title = document.querySelector('.activitiy-title');
    const currentActivity = getCurrentActivity();

    title.textContent = '';
    currentActivity && (title.textContent = currentActivity.activityName);
}

const handleClickActivitySection = () => {
    const activitySection = document.querySelector('.activities');

    activitySection.addEventListener('click', disselectAllActivities, true);
}

//to disable selecting another activity when click is working
const toggleDisableSelectActivitySection = () => {
    const activitySection = document.querySelector('.activities');

    activitySection.classList.toggle('inactive')
}



export { renderActivities, renderCurrentActivityTitle, toggleDisableSelectActivitySection, handleClickActivitySection }