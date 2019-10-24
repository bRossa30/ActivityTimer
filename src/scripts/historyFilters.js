const filters = {
    activityName: "Select all",
    date: '',
    time: '',
    sortBy: 'lastDate'
}

const insertFilters = (filter, value) => {
    for (var prop in filters) {
        if (prop === filter) {
            filters[prop] = value;
        }
    }
}

const getFilters = () => filters;

export { getFilters, insertFilters }