import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { Button, Input } from "./UI";

export const TodoForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      dispatch(addTodo(input));
    } else {
      alert("Input field is mandatory, do not leave blank");
    }
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter a todo item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button className="bg-purple-600 hover:bg-purple-700">Add Item</Button>
    </form>
  );
};
