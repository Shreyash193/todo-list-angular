import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgFor, NgIf } from '@angular/common';
import { Todo } from '../../Todo';
import { AddTodo } from '../add-todo/add-todo';
import { TodosItems } from '../todos-items/todos-items';

@Component({
  selector: 'app-todos',
  imports: [NgFor, NgIf, AddTodo, TodosItems],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  todos: Todo[] = [];
  constructor() {
    if (this.isBrowser) {
      const localItem = localStorage.getItem("todos");
      this.todos = localItem ? JSON.parse(localItem) : [];
    }
  }

  onTodoDelete(todo: Todo) {
    console.log("Todo to delete:", todo);
    this.todos = this.todos.filter(t => t.sno !== todo.sno);
    this.saveTodos();
  }

  onTodoAdd(todo: Todo) {
    const sno = this.getNextSno();

    if (sno === null) {
      console.log("Todo limit reached. Serial numbers must be between 1 and 100.");
      return;
    }

    const newTodo = {
      ...todo,
      sno,
    };

    console.log("Todo to add:", newTodo);
    this.todos.push(newTodo);
    this.saveTodos();
  }

  private saveTodos() {
    if (this.isBrowser) {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  private getNextSno(): number | null {
    for (let sno = 1; sno <= 100; sno++) {
      if (!this.todos.some(todo => todo.sno === sno)) {
        return sno;
      }
    }

    return null;
  }
}
