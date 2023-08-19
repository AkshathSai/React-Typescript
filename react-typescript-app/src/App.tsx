import Todos from './components/Todos';
import Todo from './models/Todo';
import AddTodo from "./components/AddTodo";
import {useState} from "react";

function App() {

    //const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];
    const[todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {

      /**
       *  1. We need to update state because that is what re-renders the component
       *  2. Manipulate the todos[] using state management in this arrow function
       */
      const newTodo = new Todo(todoText);
      setTodos((prevTodos) => { //prevTodos is Previous State
          return prevTodos.concat(newTodo);
      });

  };

  const removeTodoHandler = (todoId: string) => {
      setTodos((prevTodos) => {
         return prevTodos.filter(todo => todo.id !== todoId);
      });
  };

  return (
    <div>
        <AddTodo onAddTodo={addTodoHandler}/>
        <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
