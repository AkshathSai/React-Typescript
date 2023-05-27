import React from "react";
import Todo from "../models/Todo";
import TodoComponent from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {

    return (
        <ul>
            {props.items.map((item) => (
                    // <li key={item.id}>{item.name}</li>
                    <TodoComponent key={item.id} todo={item} />
            ))
            }
        
        </ul>
    );
}

export default Todos;