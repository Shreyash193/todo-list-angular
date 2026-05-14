import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos-items',
  imports: [],
  templateUrl: './todos-items.html',
  styleUrl: './todos-items.css',
})
export class TodosItems {
  @Input() todo!: Todo;
  @Output() todelete = new EventEmitter<Todo>();
  onRemove() {
    this.todelete.emit(this.todo);
    console.log("Removing todo with sno:", this.todo.sno);
  }
}
