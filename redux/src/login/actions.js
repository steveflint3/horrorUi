import * as actionType from './actionTypes';

export const loginInputChange = (e) => ({
  type: actionType.LOGIN_INPUT_CHANGE,
  key: e.target.id,
  value: e.target.value
});

export const loginSubmit = () => ({
  type: actionType.LOGIN_SUBMIT
});

export const loginUserSuccess = (username) => ({
  type: actionType.LOGIN_SUCCESS,
  username
});

export const loginUserFailure = () => ({
  type: actionType.LOGIN_FAILURE
});

export const loginReset = () => {
  return ({
  type: actionType.LOGIN_RESET
})};