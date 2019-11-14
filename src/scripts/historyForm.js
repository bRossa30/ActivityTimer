import TinyDatePicker from 'tiny-date-picker';
import moment from 'moment';
import { insertFilters, getFilters } from './historyFilters';
import { log } from 'util';
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

TinyDatePicker('.date-picker-start', {
    // mode: 'dp-below'
    format(date) {
        return moment(date).format('YYYY-MM-DD')
    }
}).on('statechange', (_, picker) => {
    let value = Date.parse(picker.state.selectedDate);
    insertFilters('startDate', value);
    renderHistory();
});
