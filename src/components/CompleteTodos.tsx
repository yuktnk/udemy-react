import React from "react";

const style = {
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

type CompleteTodosProps = {
  todos: string[];
  onClickBack: any;
};

export const CompleteTodos: React.FC<CompleteTodosProps> = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div style={style}>
      <p className="title">完了済のtodo</p>
      <ul>
        {todos.map((todo: string, index: number) => {
          return (
            <li key={todo} className="list-row">
              <p>{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
