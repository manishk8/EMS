import { createStore } from 'redux';
import { reducerName } from './reducer';

let store = createStore(reducerName, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;