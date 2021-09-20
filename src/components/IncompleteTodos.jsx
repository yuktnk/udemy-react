import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div class="incomplete-area">
      <p class="title">未完了のtodo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} class="list-row">
              <p>{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
