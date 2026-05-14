import { Component, signal } from '@angular/core';
import { Todos } from './mycomponent/todos/todos';

@Component({
  selector: 'app-root',
  imports: [Todos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tudo-list');
   
}
