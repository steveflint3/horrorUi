import React, { useState } from 'react';

import TodoItem from './todoItem.jsx';
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
    <>
      <ul className="todo-list-nav">
        <li 
          className={props.status === 'all' ? 'active' : ''}
          onClick={props.toggleStatusView}
        >
          All
        </li>
        <li 
          className={props.status === 'complete' ? 'active' : ''}
          onClick={props.toggleStatusView}
        >
          Complete
        </li>
        <li 
          className={props.status === 'incomplete' ? 'active' : ''}
          onClick={props.toggleStatusView}
        >
          Incomplete
        </li>
      </ul>
      <form className="todo-list">
        <h1><b>Todosies {props.status.toUpperCase()}</b></h1>
        <ul>
          {todos.map((todo, i) => (
            <TodoItem
              key={i}
              isCompleted={todo.isCompleted}
              content={todo.content}
              status={props.status}
              onClick={() => toggleTodoCompleteAtIndex(i)}
              onKeyDown={e => handleKeyDown(e, i)}
              onChange={e => updateTodoAtIndex(e, i)}
            />
          ))}
        </ul>
      </form>
    </>
  );
};

export default Todo;