import TinyDatePicker from 'tiny-date-picker';
import moment from 'moment';
import { insertFilters, getFilters } from './historyFilters';
import { log } from 'util';
import { renderHistory } from './historyRender';

const filters = getFilters();


document.querySelector('.js-his-filter-activity').addEventListener('change', (e) => {
    const value = e.target.value;
    insertFilters('activityName', value);
    renderHistory();
})

document.querySelector('.js-his-filter-sort').addEventListener('change', (e) => {
    const value = e.target.value;
    insertFilters('sortBy', value);
    renderHistory();
})

TinyDatePicker('.js-his-filter-date', {
    // mode: 'dp-below'
    format(date) {
        return moment(date).format('YYYY-MM-DD')
    }
}).on('statechange', (_, picker) => {
    let value = Date.parse(picker.state.selectedDate);
    insertFilters('startDate', value);
    renderHistory();
});
