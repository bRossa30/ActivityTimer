import '../../node_modules/@fortawesome/fontawesome-free/js/all';
import './customScrolls';
import './clockControls';
import './activitiesForm';
import './historyForm';
import './historyEvents';
import '../styles/style.scss';
import { renderActivities, handleClickActivitySection } from './render';
import { renderHistory, renderHistoryFilters } from './renderHistory';

renderActivities();
renderHistoryFilters();
renderHistory();
handleClickActivitySection(); //anable disselecet current activity then click on activities section


