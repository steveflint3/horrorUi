import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import * as select from './selector';
import * as actions from './actions';

const Login = props => {

  const dispatch = useDispatch();
  const login = useSelector(select.login);

  const loginInputChange = (e) => {
    e.preventDefault();
    console.log(e)
    return dispatch(actions.loginInputChange(e));
  }

  const loginSubmit = (e) => {
    e.preventDefault();
    return dispatch(actions.loginSubmit());
  }

  if (login.loggedIn) {
    props.setView('user');
    return (null);
  } 
  else return (
    <>
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={loginSubmit}>
        <div className="inputContainer">
          <input onChange={loginInputChange} type="text" id="username" value={login.username} required />
          <label>Username</label>
        </div>
        <div className="inputContainer">
          <input onChange={loginInputChange} type="password" id="password" value={login.password} required />
          <label>Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
    {login.loginError &&
      <p style={{color:'indianred', textAlign: 'center'}}>Incorrect Username or Password</p>
    }
    </>
  );
};

export default Login;