import {useRef} from "react";

const AddTodo = () => {

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