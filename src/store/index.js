import { createStore } from 'redux';

import rootReducer from './reducers';

//set initial state by root reducer
const store = createStore(rootReducer);

export default store;