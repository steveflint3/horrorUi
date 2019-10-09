import React, { useState } from 'react';

import TodoItem from './todoItem.jsx';
import {ListViewContext} from './listViewContext.jsx';
import {todoList} from './todoList.js';

const Todo = props => {
  const [todos, setTodos] = useState(todoList);

  function handleKeyDown(e, i) {
    if (e.key === 'Enter') {
      createTodoAtIndex(e, i);
    }
    if (e.key === 'Backspace' && todos[i].content === '') {
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  }

  function createTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: '',
      isCompleted: false,
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  function removeTodoAtIndex(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
    setTimeout(() => {
      if (i === 0) {
        document.forms[0].elements[i].focus()
      } else {
        document.forms[0].elements[i - 1].focus();
      }
    }, 0);
  }

  function toggleTodoCompleteAtIndex(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }

  return (
    <ListViewContext.Consumer>
      {context => (
        <>
          <ul className="todo-list-nav">
            <li 
              className={context === 'all' ? 'active' : ''}
              onClick={props.toggleListView}
            >
              All
            </li>
            <li 
              className={context === 'complete' ? 'active' : ''}
              onClick={props.toggleListView}
            >
              Complete
            </li>
            <li 
              className={context === 'incomplete' ? 'active' : ''}
              onClick={props.toggleListView}
            >
              Incomplete
            </li>
          </ul>
          <form className="todo-list">
            <h1><b>Todosies {context.toUpperCase()}</b></h1>
            <ul>
              {todos.map((todo, i) => (
                <TodoItem
                  key={i}
                  isCompleted={todo.isCompleted}
                  content={todo.content}
                  context={context}
                  onClick={() => toggleTodoCompleteAtIndex(i)}
                  onKeyDown={e => handleKeyDown(e, i)}
                  onChange={e => updateTodoAtIndex(e, i)}
                />
              ))}
            </ul>
          </form>
        </>
      )}
    </ListViewContext.Consumer>
  );
};

export default Todo;