import { useState, FunctionComponent } from "react";

type TodoItem = {
  title: string;
  completed: boolean;
  id: number;
};

const getFirstNumber = <ElementType,>(array: ElementType[]) => {
  return array[0];
};

const numbers = [1, 2, 3, 5];
const firstNumber = getFirstNumber(numbers);
console.log(firstNumber);

const myStrings = ["1", "2", "3"];
const firstString = getFirstNumber(myStrings);
console.log(firstString);

// type TodoListProps = {
//   something: string;
// };

const TodoList: FunctionComponent = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [input, setInput] = useState("");

  const onSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    console.log("values", input);
    const newItem = { title: input, completed: false, id: Date.now() };
    console.log(newItem, "newItem");
    setTodoList([...todoList, newItem]);
    setInput("");
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("changing onChangeINput", e.target.value);
    setInput(e.target.value);
  };

  const deleteItem = (itemId: number) => {
    const newList = todoList.filter((element) => element.id !== itemId);
    setTodoList(newList);
  };

  const markAsCompleted = (itemId: number) => {
    const updatedList = todoList.map((element) => {
      return element.id === itemId ? { ...element, completed: true } : element;
    });
    console.log(updatedList, "updatedList");
    setTodoList(updatedList);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl mb-10">Todos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="add-todo"
          value={input}
          className="border-solid border-2 mr-2 p-2"
          placeholder="Type your todo item"
          onChange={onChangeInput}
        />
        <button>Add item</button>
      </form>
      <ul className="mt-10">
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className={"mb-2 " + (todo.completed ? "line-through" : "")}
          >
            <input
              name="mark-as-completed"
              type="checkbox"
              onClick={() => markAsCompleted(todo.id)}
            />
            <span className="ml-2">{todo.title}</span>
            <button
              className="border-green border-solid bg-black text-white ml-2 rounded-xl pl-2 pr-2 text-sm"
              onClick={() => deleteItem(todo.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
