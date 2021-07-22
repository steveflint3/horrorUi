import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import * as select from './selector';
import * as actions from '../login/actions';

const UserHome = props =>   {
  const dispatch = useDispatch();
  const user = useSelector(select.user);
  
  const logOut = () => {
    return dispatch(actions.loginReset());
  }

  if (!user.username) {
    props.setView('login');
    return (null);
  } 
  else return (
    <div className="userHome">
      <h1>Welcome {user.username}</h1>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default UserHome;