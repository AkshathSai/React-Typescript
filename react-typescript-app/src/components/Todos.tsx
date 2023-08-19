import React from "react";
import Todo from "../models/Todo";
import TodoComponent from "./TodoItem";
import classes from "./Todos.module.css"

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {

    return (
        <ul className={classes.todos}>
            {props.items.map((item) => (
                    // <li key={item.id}>{item.name}</li>
                    <TodoComponent
                        key={item.id}
                        todo={item}
                        onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
                    />
            ))}
        </ul>
    );
}

export default Todos;