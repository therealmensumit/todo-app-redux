import { TodoForm, Todos } from "./components";
export const App = () => {
  return (
    <>
      <div className="container py-16 grid gap-8 place-items-center">
        <h1 className="text-4xl leading-normal font-bold">
          Todo App using react-redux
        </h1>
        <TodoForm />
        <Todos />
      </div>
    </>
  );
};
