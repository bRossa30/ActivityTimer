import uuidv4 from 'uuidv4';
import moment from 'moment';
import { getCurrentActivity } from './activities';
import { getTime } from './clock';

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
        id: uuidv4(),
        date: moment().valueOf(),
        activity: getCurrentActivity().activityName,
        activityTimeInSec: moment.duration(getTime()).asSeconds()
    };
    history.push(historyItem);
    saveHistoryInLocalStorage();
}

history = getHistoryFromLocalStorage();

export { saveHistoryInLocalStorage, getHistory, registerActivityInHistory }