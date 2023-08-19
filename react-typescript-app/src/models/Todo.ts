/**
 * We can use the keywords,
 * 1. type
 * 2. Interface
 * 3. class
 *
 * to represent the data  models
 */

class Todo {
    id: string;
    name: string;

    constructor(todoText: string) {
        this.name = todoText;
        this.id = new Date().toISOString();
    }

}

export default Todo;