import { insertFilters, getFilters } from './historyFilters';
import { renderHistory } from './renderHistory';

const filters = getFilters();


document.querySelector('.history__filters__datalist').addEventListener('change', (e) => {
    const value = e.target.value;
    insertFilters('activityName', value);
    renderHistory();
})

document.querySelector('.history__filters__sortBy').addEventListener('change', (e) => {
    const value = e.target.value;
    insertFilters('sortBy', value);
    renderHistory();
})