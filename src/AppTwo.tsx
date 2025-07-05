import TodoList from "./components/TodoList";
// import ThemeContextExample from "./components/ThemeContextExample";
import ThemeContextExample from "./components/ThemeContextExample";

// using generics example in Typescript
const getFirstNumber = <ElementType,>(array: ElementType[]) => {
  return array[0];
};

const numbers = [1, 2, 3, 5];
const firstNumber = getFirstNumber(numbers);
console.log(firstNumber);

const myStrings = ["1", "2", "3"];
const firstString = getFirstNumber(myStrings);
console.log(firstString);

function AppTwo() {
  return (
    <>
      <TodoList />
      <ThemeContextExample />
    </>
  );
}

export default AppTwo;
