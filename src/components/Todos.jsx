import { FaDeleteLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { Button } from "./UI";

export const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="w-full lg:w-3/5">
      <h3 className="mb-3 text-center font-semibold text-2xl">Todo List</h3>
      <ul className="grid gap-4">
        {todos?.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center p-3 rounded bg-slate-800 text-white">
            <div className="flex-1 text-lg">{todo.text}</div>
            <Button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-600 hover:bg-red-700 rounded">
              <FaDeleteLeft />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
