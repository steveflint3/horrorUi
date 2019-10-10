import {combineReducers} from 'redux';
import user from '../login/reducer.js';

const rootReducer = combineReducers({user});

export default rootReducer;