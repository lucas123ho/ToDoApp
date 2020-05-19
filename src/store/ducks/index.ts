import { combineReducers } from 'redux';

import route from './route';
import list from './list';

export default combineReducers({
    route,
    list
});