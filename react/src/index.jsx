import React, {useState} from 'react';
import {render} from 'react-dom';

import Todo from './todo.jsx';
import {ListViewContext} from './listViewContext.jsx';

const App = () => {
  const [listView, setListView] = useState('all');

  const toggleListView = (e) => {
    e.preventDefault();
    setListView(e.currentTarget.innerHTML.toLowerCase());
  };

  return (
    <ListViewContext.Provider value={listView}>
      <Todo toggleListView={toggleListView}/>
    </ListViewContext.Provider>
  );
};

render(<App />, document.getElementById('root'));