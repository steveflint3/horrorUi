import * as actionType from './actionTypes';

const initialState = {
  password: '',
  username: '',
  loggedIn: false,
  loginError: false
};

export default (state = initialState, action) => {
  switch (action.type) {

    case actionType.LOGIN_INPUT_CHANGE:
      return {
        ...state,
        [action.key]: action.value
      };
    case actionType.LOGIN_SUBMIT:
      return state;
    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true
      };
    case actionType.LOGIN_FAILURE:
      return {
        ...state,
        loginError: true
      };
    case actionType.LOGIN_RESET:
      return initialState;
    default:
      return state;

  }
}