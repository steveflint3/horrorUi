import React from 'react';
import {connect} from 'react-redux';

import * as actions from './login/actions';

const UserHome = props =>   {
  if (!props.user.loggedIn) {
    props.changeView('login');
    return (null);
  } 
  else return (
    <div className="userHome">
      <h1>Welcome {props.user.username}</h1>
      <button onClick={props.logOut}>Log Out</button>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logOut: () => {
    return dispatch(actions.loginReset());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHome);