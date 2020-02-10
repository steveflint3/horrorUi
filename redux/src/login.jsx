import React from 'react';
import {connect} from 'react-redux';

import * as actions from './login/actions';

const Login = props => {
  if (props.user.loggedIn) {
    props.setView('user');
    return (null);
  } 
  else return (
    <>
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={props.loginSubmit}>
        <div className="inputContainer">
          <input onChange={props.loginInputChange} type="text" id="username" value={props.user.username} required />
          <label>Username</label>
        </div>
        <div className="inputContainer">
          <input onChange={props.loginInputChange} type="password" id="password" value={props.user.password} required />
          <label>Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
    {props.user.loginError &&
      <p style={{color:'indianred', textAlign: 'center'}}>Incorrect Username or Password</p>
    }
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  loginInputChange: (e) => {
    e.preventDefault();
    return dispatch(actions.loginInputChange(e));
  },
  loginSubmit: (e) => {
    e.preventDefault();
    return dispatch(actions.loginSubmit());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);