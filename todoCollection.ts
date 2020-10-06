import {TodoItem} from "./todoItem";

export class TodoCollection {
    // private number, starts at top of list and counts when it should as you use the methods
    private nextId: number = 1;

    // TodoItem is the type expected in todoItems
    constructor(public userName: string, public todoItems: TodoItem[] = []) {
    }

    addTodo(task: string): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++
        }
        this.todoItems.push(new TodoItem(this.nextId, task));
        return this.nextId;
    }

    getTodoById(id: number): TodoItem {
        return this.todoItems.find(item => item.id === id)
    }

    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}