import React from 'react';

const TodoItem = props => (
  props.context === 'all' ||
  (props.context === 'incomplete' && !props.isCompleted) ||
  (props.context === 'complete' && props.isCompleted) ? (
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