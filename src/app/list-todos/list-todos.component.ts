import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  public message: any;
   todos: Todo[] | any = [];
   
  constructor(private todoService: TodoDataService, private router: Router) { }

  ngOnInit(): void {   
    this.refershTodo(); 
  }

  refershTodo(){
    this.todos = this.todoService.retrieveAllTodos('Nisarg').subscribe({
      next: (response: any) => {this.todos = response, console.log(response)}
    })
  }

  deleteTodo(id: number){
    console.log('delete todo'+ id)
    this.todos = this.todoService.deleteTodo('Nisarg', id).subscribe({
                      next: (response: any) => {
                        console.log(response)
                        this.message = `Id ${id} has been deleted succesfully. `
                        this.refershTodo();
                      }
                    })
  }
  
  updateTodo(id: number){
    console.log("update id: "+id)
    this.router.navigate(['todos', id])
  }


  addTodo(){
    this.router.navigate(['todos', -1])
  }
}
