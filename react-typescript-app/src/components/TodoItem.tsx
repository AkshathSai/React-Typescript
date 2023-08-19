import Todo from "../models/Todo";
import classes from "./TodoItem.module.css"

const TodoComponent: React.FC<{ todo: Todo; onRemoveTodo: () => void }> = (props) => {
    return <li className={classes.item} onClick={props.onRemoveTodo}> {props.todo.name}</li>;
}

export default TodoComponent;