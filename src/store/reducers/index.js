import {combineReducers} from 'redux';

//import tasks reducer
import tasks from './tasksReducer';

//combine all reducers on store
export default combineReducers({
    tasks,
});