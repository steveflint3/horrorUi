import React, {useState} from 'react';
import {render} from 'react-dom';

import Todo from './todo.jsx';

const App = () => {
  const [statusView, setStatusView] = useState('all');

  const toggleStatusView = (e) => {
    e.preventDefault();
    setStatusView(e.currentTarget.innerHTML.toLowerCase());
  };

  return (
    <Todo status={statusView} toggleStatusView={toggleStatusView}/>
  );
};

render(<App />, document.getElementById('root'));