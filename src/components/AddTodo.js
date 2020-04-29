import React, { useState } from "react";

const AddTodo = (props) => {
  const [state, setState] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-todo">
      <h1>Add Todo</h1>
      <input
        type="text"
        placeholder="Todo Title"
        name="title"
        onChange={(e) => handleInputChange(e)}
      />
      <br />
      <textarea
        placeholder="Description"
        name="description"
        onChange={handleInputChange}
      />
      <br />
      <br />
      <div className="todo-add-btn center">
        <button
          className="btn"
          onClick={() => {
            props.handleAdd(state.title, state.description);
            props.history.push("/");
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
