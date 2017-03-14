import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';
  todos: any[] = [];
  todo = '';
  filterType = 'All';
  toggleAll = false;

  constructor (private http: Http) {

  }

  addTodo () {
    this.todos.push({
      text: this.todo,
      done: false
    });
    this.todo = '';
  }

  clearCompleted () {
    this.todos = this.todos.filter(item => { return !item.done; });
  }

  filterTypeChanged (filterType: string) {
    this.filterType = filterType;
  }

  toggleAllChanged (value: boolean) {
    this.todos.forEach(item => {
      item.done = value
    });
  }

  updateToggleAllState () {
    this.toggleAll = this.todos.filter(item => { return !item.done; }).length === 0;
  }

  removeTodo (todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
