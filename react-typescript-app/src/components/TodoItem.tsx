import Todo from "../models/Todo";

const TodoComponent: React.FC<{ todo: Todo }> = (props) => {
    return <li>{props.todo.name}</li>;
}

export default TodoComponent;