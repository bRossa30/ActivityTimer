import { uuid } from 'uuidv4';
import moment from 'moment';
import { getCurrentActivity } from '../activities/activities';
import { getTime } from '../clock/clock';

let history = [];

const saveHistoryInLocalStorage = () => {
    localStorage.setItem('history', JSON.stringify(history));
}

const getHistoryFromLocalStorage = () => {
    const historyJSON = localStorage.getItem('history');

    return historyJSON ? JSON.parse(historyJSON) : [];
}

const getHistory = () => history;

const registerActivityInHistory = () => {
    const historyItem = {
        id: uuid(),
        date: moment().valueOf(),
        activity: getCurrentActivity().activityName,
        activityTimeInSec: moment.duration(getTime()).asSeconds()
    };
    history.push(historyItem);
    saveHistoryInLocalStorage();
}

history = getHistoryFromLocalStorage();

export { saveHistoryInLocalStorage, getHistory, registerActivityInHistory }