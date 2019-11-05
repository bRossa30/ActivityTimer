import { getHistory } from './history';
import { getFilters } from './historyFilters';
import moment from 'moment';
import { getActivities } from './activities';

const history = getHistory();
const filters = getFilters();
const activities = getActivities();


const renderHistoryFilters = () => {
    //set activity name filter options
    const historyFilterDatalist = document.querySelector('.history__filters__datalist');
    let activitiesInhistory = [];

    historyFilterDatalist.textContent = "";
    historyFilterDatalist.appendChild(defaultActivityNameFilter());

    //taking activity names from activities saved in history
    activitiesInhistory = history.map(h => h.activity);

    //taking activity names from current activity list
    activitiesInhistory = activitiesInhistory.concat(activities.map(a => a.activityName));

    //removing duplicates 
    activitiesInhistory = [... new Set(activitiesInhistory)];

    activitiesInhistory.forEach(activity => historyFilterDatalist
        .appendChild(renderSingleActivityInHistoryfilters(activity)))

}

const defaultActivityNameFilter = () => {
    const option = document.createElement('option');
    option.setAttribute('value', 'Select all');
    option.textContent = 'Select all';
    return option;
}

const renderSingleActivityInHistoryfilters = (activityName) => {

    const option = document.createElement('option');
    option.setAttribute('value', activityName);
    option.textContent = activityName;

    return option;
}

const filterHistoryByActivity = (history) => {

    if (filters.activityName === 'Select all') return history;
    return history.filter(h => h.activity === filters.activityName);
}

const filterHistoryByDate = (history) => {
    if (filters.startDate === '' || isNaN(filters.startDate)) return history;
    return history.filter(h => h.date > filters.startDate);
}

const sortHistory = (table) => {

    switch (filters.sortBy) {
        case 'lastDate':
            table.sort((a, b) => a.date < b.date ? 1 : -1)
            break;
        case 'erliesDate':
            table.sort((a, b) => a.date > b.date ? 1 : -1)
            break;
        case 'minTime':
            table.sort((a, b) => a.activityTimeInSec > b.activityTimeInSec ? 1 : -1)
            break;
        case 'maxTime':
            table.sort((a, b) => a.activityTimeInSec < b.activityTimeInSec ? 1 : -1)
            break;
    }
}

const renderHistory = () => {
    const historyList = document.querySelector('ul.history');
    const filteredHistory = filterHistoryByDate(filterHistoryByActivity(history));

    sortHistory(filteredHistory);
    historyList.textContent = "";

    filteredHistory && filteredHistory.forEach(h => historyList.appendChild(renderSingleHistoryElementDOM(h)));
}

const renderSingleHistoryElementDOM = ({ date, activity, activityTimeInSec }) => {
    const li = document.createElement('li');
    const pActivityName = document.createElement('p');
    const pDate = document.createElement('p');
    const pTime = document.createElement('p');
    const activityDate = moment(date);
    const time = moment.duration(activityTimeInSec, 'seconds').asMilliseconds();
    pDate.textContent = activityDate.format("YYYY-MM-DD HH:mm:SS");
    pActivityName.textContent = activity;
    pTime.textContent = moment.utc(time).format("HH:mm:ss")
    li.appendChild(pDate);
    li.appendChild(pActivityName);
    li.appendChild(pTime);

    return li;
}

export { renderHistory, renderHistoryFilters }