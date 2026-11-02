import React from "react";

const NewTodo = () => {
  const submitHanlder = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHanlder}>
      <label htmlFor="text">Todo Text</label>
      <input id="text" type="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
