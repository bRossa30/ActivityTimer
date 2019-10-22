import { getActivities, removeActivity, selectActivity, getCurrentActivity } from './activities';

const activities = getActivities();

const renderActivities = () => {
    const activitiesList = document.querySelector('.activities__list');

    activitiesList.textContent = "";
    activities && activities.forEach(activity => activitiesList.appendChild(renderSingleActivityDOM(activity)));
}

const renderSingleActivityDOM = (activity) => {
    const singleActivityLi = document.createElement('li');
    const pActivityName = document.createElement('p');
    const buttonRemove = document.createElement('button');

    singleActivityLi.setAttribute('id', activity.id);
    pActivityName.textContent = activity.activityName;
    buttonRemove.textContent = 'x';
    singleActivityLi.addEventListener('click', () => {
        selectActivity(activity);
        // renderCurrentActivityTitle();
    })
    buttonRemove.addEventListener('click', (e) => {
        e.stopPropagation(); //stop the action of eventListener at li node
        removeActivity(activity.id);
        renderActivities();
        // renderCurrentActivityTitle();
    })
    singleActivityLi.appendChild(pActivityName);
    singleActivityLi.appendChild(buttonRemove);

    return singleActivityLi;
}

const renderCurrentActivityTitle = () => {
    const title = document.querySelector('.activitiy-title');
    const currentActivity = getCurrentActivity();

    title.textContent = '';
    currentActivity && (title.textContent = currentActivity.textContent); //if activity is not selected or were removed clear the title
}

const toggleDisableSelectActivitySection = () => {
    const activitySection = document.querySelector('section.activities');

    activitySection.classList.toggle('inactive')
}

export { renderActivities, renderCurrentActivityTitle, toggleDisableSelectActivitySection }