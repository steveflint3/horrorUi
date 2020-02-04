import React from 'react';

const TodoItem = props => (
  props.status === 'all' ||
  (props.status === 'incomplete' && !props.isCompleted) ||
  (props.status === 'complete' && props.isCompleted) ? (
    <div className={`todo ${props.isCompleted && 'todo-is-completed'}`}>
      <div className={'checkbox'} onClick={props.onClick}>
        {props.isCompleted && (
          <span>&#x2714;</span>
        )}
      </div>
      <input
        type="text"
        value={props.content}
        onKeyDown={props.onKeyDown}
        onChange={props.onChange}
      />
    </div>
  ) : null
);

export default TodoItem;