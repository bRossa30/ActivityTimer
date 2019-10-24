import { getHistory } from './history';
import { getFilters } from './historyFilters';
import moment from 'moment';

const history = getHistory();
const filters = getFilters();

const filterHistory = () => {
    if (filters.activityName === 'Select all') return history;
    return history.filter(h => h.activity === filters.activityName);
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
    const filteredHistory = filterHistory();

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

const defaultFilterHistorySelect = () => {
    const option = document.createElement('option');
    option.setAttribute('value', 'Select all');
    option.textContent = 'Select all';
    return option;
}

const renderActivityInHistoryfilters = ({ activityName }) => {

    const option = document.createElement('option');
    option.setAttribute('value', activityName);
    option.textContent = activityName;

    return option;
}

export { renderHistory, renderActivityInHistoryfilters, defaultFilterHistorySelect }