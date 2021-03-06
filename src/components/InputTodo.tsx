import React from "react";

const style = {
  backgroundColor: " #c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

type InputTodoProps = {
  todoText: string;
  onChange: any;
  onClick: any;
  disabled: boolean;
};

export const InputTodo: React.FC<InputTodoProps> = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        value={todoText}
        onChange={onChange}
        type="text"
        placeholder="to do input"
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
