import React from 'react';
import TodoItem from './TodoItem';
import './scss/TodoMain.scss';

const TodoMain = ({ todoList, remove }) => {
  return (
    <ul className='todo-list'>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          item={todo}
          remove={remove}
        />
        // 배열내의 객체를 일괄적으로 지정하고 싶으면
      ))}
    </ul>
  );
};

export default TodoMain;
