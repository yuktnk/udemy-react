import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setCompleteTodos] = useState(["ううう", "えええ"]);

  return (
    <>
      <div class="input-area">
        <input type="text" placeholder="to do input" />
        <button>追加</button>
      </div>
      <div class="incomplete-area">
        <p class="title">未完了のtodo</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo} class="list-row">
                <p>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div class="complete-area">
        <p class="title">完了済のtodo</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo} class="list-row">
                <p>{todo}</p>
                <button>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};