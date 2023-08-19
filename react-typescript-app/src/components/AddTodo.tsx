import React, {useRef} from "react";

/**
 * onAddTodo is a function that takes string input and returns void,
 *
 * Syntax for defining a function pointer in typescript:
 * functionName: (function param: datatype of the Param) => return type
 *
 * onAddTodo: (text: string) => void
 */
const AddTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {

    const todoFormTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        /** todoFormTextInputRef.current?.value/todoFormTextInputRef.current!.value
         * ! - when confident that value will not be null
         * ? - when unsure
         */
        const enteredText = todoFormTextInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            return;
        }

        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='text'>Todo Text</label>
            <input type='text' id='text'/>
            <button>Add Todo</button>
        </form>
    );
};

export default AddTodo;