import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div class="input-area">
      <input
        value={todoText}
        onChange={onChange}
        type="text"
        placeholder="to do input"
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
