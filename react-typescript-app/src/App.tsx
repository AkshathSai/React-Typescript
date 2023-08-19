import Todos from './components/Todos';
import Todo from './models/Todo';
import AddTodo from "./components/AddTodo";

function App() {

  const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];

  const addTodoHandler = (todoText: string) => {
    //Manipulate the todos[] using state management in this arrow function
  };



  return (
    <div>
        <AddTodo onAddTodo={addTodoHandler}/>
        <Todos items={todos} />
    </div>
  );
}

export default App;
