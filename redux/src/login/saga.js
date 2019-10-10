import {put, takeEvery, all, call, select, delay} from 'redux-saga/effects';

import * as actions from './actions';
import * as actionType from './actionTypes';
import {users} from './users.js';

export function* loggingIn() {
  const stateUser = yield select(state => state.user);
  const sessionUser = users.filter(user => user.username === stateUser.username);
  if (sessionUser[0] === undefined) {
    yield put(actions.loginUserFailure());
    yield delay(1500);
    yield put(actions.loginReset());
  }
  else {
    if (sessionUser[0].password !== stateUser.password) {
      yield put(actions.loginUserFailure());
      yield delay(1500);
      yield put(actions.loginReset());
    } else {
      yield put(actions.loginUserSuccess());
    }
  }
}

export function* loginUser() {
  yield takeEvery(actionType.LOGIN_SUBMIT, loggingIn);
}

export default function* root() {
  yield all([call(loginUser)]);
};