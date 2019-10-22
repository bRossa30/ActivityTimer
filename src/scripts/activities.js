import uuidv4 from "uuidv4";

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
        alert('Can not add activity whith empty name');
        return;
    };
    if (activities) {
        if (activities.some(activity => activity.activityName === activityName)) {
            return alert('zadanie jest już na liście');
        }
    }
    activities.push({
        id: uuidv4(),
        activityName
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

//before selecting activity you can't start the clock
const selectActivity = (activity = null) => {
    const currentLi = document.querySelector(`.activities__list li[id='${activity.id}']`);
    const previousLi = document.querySelector('.activities__list li.active');

    previousLi && previousLi.classList.remove('active');
    currentLi && currentLi.classList.add('active');
}

const getCurrentActivity = () =>  document.querySelector('.activities__list li.active p');

const getActivities = () => activities;

activities = getActivitiesFromLocalStorage();


export { addActivity, getActivities, removeActivity, selectActivity, getCurrentActivity }