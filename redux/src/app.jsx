import React, { useState } from 'react';

import Login from './login/login.jsx';
import UserHome from './userHome.jsx';

import {ViewContext} from './viewContext.jsx';

const App = () => (
  <ViewContext.Consumer>
    {({view, changeView})=>
      view === "login" ?
      (<Login changeView={changeView}/>) :
      (<UserHome changeView={changeView}/>)
    }
  </ViewContext.Consumer>
);

export default App;