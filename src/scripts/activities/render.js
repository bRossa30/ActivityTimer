import { getActivities, removeActivity, selectActivity, getCurrentActivity, disselectAllActivities } from './activities';
import { renderHistoryFilters } from '../history/historyRender';
import { asideCollapse } from '../layout/layout';
import variables from '../../styles/abstracts/_variables.scss';


const activities = getActivities();

const renderActivities = () => {
    const activitiesList = document.querySelector('.js-activities');

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
    singleActivityLi.classList.add('list__item');
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
        window.innerWidth <= variables.xsBreakpoint && asideCollapse();
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
    const title = document.querySelector('.clock__title');
    const currentActivity = getCurrentActivity();

    title.textContent = '\xA0';
    currentActivity && (title.textContent = currentActivity.activityName);
}

const handleClickActivitySection = () => {
    const activitySection = document.querySelector('.js-section-activities');

    activitySection.addEventListener('click', disselectAllActivities, true);
}

//to disable selecting another activity when click is working
const toggleDisableSelectActivitySection = () => {

    document.querySelector('.js-section-activities').classList.toggle('inactive');
    document.querySelector('.menu-mobile').classList.toggle('inactive');

}


export { renderActivities, renderCurrentActivityTitle, toggleDisableSelectActivitySection, handleClickActivitySection }