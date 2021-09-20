import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div class="complete-area">
      <p class="title">完了済のtodo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} class="list-row">
              <p>{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
