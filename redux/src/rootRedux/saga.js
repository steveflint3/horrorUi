import {all} from 'redux-saga/effects';
import user from '../login/saga.js';

function* rootSaga() {
  yield all([user()]);
}

export default rootSaga;