import { combineReducers } from 'redux';

import tasks from './taskReducer';
import settings from './settingsReducer';

export default combineReducers({
    tasks,
    settings
});
