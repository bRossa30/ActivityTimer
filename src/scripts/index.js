import './clock/clockControls';
import './activities/activitiesForm';
import './history/historyForm';
import './layout/layout';
import '../styles/style.scss';
import { renderActivities, handleClickActivitySection } from './activities/render';
import { renderHistory, renderHistoryFilters } from './history/historyRender';

renderActivities();
renderHistoryFilters();
renderHistory();
handleClickActivitySection(); //anable disselecet current activity then click on activities section


