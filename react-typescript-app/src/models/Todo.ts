class Todo {
    id: string;
    name: string;

    constructor(todoText: string) {
        this.name = todoText;
        this.id = new Date().toISOString();
    }

}

export default Todo;