import './clockControls';
import './activitiesForm';
import './historyForm';
import '../styles/style.scss'
import { renderActivities, handleClickActivitySection } from './render';
import { renderHistory } from './renderHistory';

renderActivities();
renderHistory();
handleClickActivitySection(); //anable disselecet current activity then click on activities section