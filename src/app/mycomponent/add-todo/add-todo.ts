import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css',
})
export class AddTodo {
  title = '';
  desc = '';

  @Output() toAdd = new EventEmitter<Todo>();

  onSubmit() {
    const todo: Todo = {
      sno: 0,
      title: this.title,
      desc: this.desc,
      active: true,
    };

    this.toAdd.emit(todo);
    this.title = '';
    this.desc = '';
  }
}
