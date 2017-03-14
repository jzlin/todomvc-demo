import { Component } from '@angular/core';

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
}
