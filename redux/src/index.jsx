import React, {useState} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './rootRedux/store.js';

import App from './app.jsx';
import {ViewContext} from './viewContext.jsx';

const Index = () => {
  
  const [view, setView] = useState('login')
  const changeView = view => { setView(view) }

  return (
    <Provider store={store}>
      <ViewContext.Provider value={{view, changeView}}>
        <App/>
      </ViewContext.Provider>
    </Provider>
  );

};

render(<Index />, document.getElementById('root'));