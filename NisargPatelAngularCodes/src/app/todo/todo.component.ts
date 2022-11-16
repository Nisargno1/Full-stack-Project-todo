import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number = 1;
  todo: Todo[] | any;

  constructor(private serviceTodo: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date()) //If the server is slow, it displays a default value and increase user experience.

    if (this.id != -1) {
      this.serviceTodo.retrieveTodo('Nisarg', this.id).subscribe({
        next: (data) => this.todo = data
      })
    }
  }

  saveTodo() {
    if (this.id == -1) {
      this.serviceTodo.createTodo('Nisarg', this.todo).subscribe({
        next: (data: any[]) => {
          console.log(data)
          this.router.navigate(['todos']);
        }
      })
    } else {
      this.serviceTodo.updateTodo('Nisarg', this.id, this.todo).subscribe({
        next: (data: any[]) => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      });
    }
  }


}
