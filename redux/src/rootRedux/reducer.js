import {combineReducers} from 'redux';
import login from '../login/reducer.js';
import user from '../user/reducer.js';

const rootReducer = combineReducers({login,user});

export default rootReducer;