import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export const TodoForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a todo item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="px-4 py-2 rounded-s focus:outline-0 focus:bg-slate-100"
      />
      <button className="py-2 px-4 bg-purple-800 text-white rounded-e hover:bg-purple-900 transition-all duration-200">
        Add Item
      </button>
    </form>
  );
};
