import * as loginActions from '../login/actionTypes';

const initialState = {
  username: '',
};

export default (state = initialState, action) => {
  switch (action.type) {

    case loginActions.LOGIN_SUCCESS:
      return {
        ...state,
        username: action.username
      };
    case loginActions.LOGIN_RESET:
      return initialState;
    default:
      return state;

  }
}