import { uuid } from "uuidv4";
import { showPopup } from '../popup/popup';

let activities = [];

const saveActivityInLocalStorage = () => {
    localStorage.setItem("activities", JSON.stringify(activities));
}

const getActivitiesFromLocalStorage = () => {
    const activitiesJSON = localStorage.getItem("activities");

    return activitiesJSON ? JSON.parse(activitiesJSON) : [];
}

const addActivity = (activityName) => {
    if (!activityName) {
        showPopup('Can not add activity whith empty name', 'ok');
        return;
    };
    if (activities) {
        if (activities.some(activity => activity.activityName === activityName)) {
            return showPopup('Activity is just on the list', 'ok');
        }
    }
    activities.push({
        id: uuid(),
        activityName,
        selected: false
    });
    saveActivityInLocalStorage();
}

const removeActivity = (id) => {
    const index = activities.findIndex(a => a.id === id);

    if (index > -1) {
        activities.splice(index, 1);
        saveActivityInLocalStorage();
    }
}

const disselectAllActivities = () => {
    activities.map(a => {
        if (a.selected === true) {
            a.selected = false
        }
    });
    saveActivityInLocalStorage();
    styleCurrentActivity();
}

const styleCurrentActivity = () => {
    const currentActivity = getCurrentActivity();
    const previousLi = document.querySelector('.js-activities li.active');
    previousLi && previousLi.classList.remove('active');
    if (currentActivity) {
        const currentLi = document.querySelector(`.js-activities li[id='${currentActivity.id}']`);

        currentLi && currentLi.classList.add('active');
    }
}

const selectActivity = (activity) => {
    disselectAllActivities();
    activity.selected = true;
    saveActivityInLocalStorage();
    styleCurrentActivity();
}

const getCurrentActivity = () => activities.find(a => a.selected === true);

const getActivities = () => activities;

activities = getActivitiesFromLocalStorage();


export { addActivity, getActivities, removeActivity, selectActivity, getCurrentActivity, disselectAllActivities }