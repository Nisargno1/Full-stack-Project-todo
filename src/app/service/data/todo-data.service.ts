import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {TODO_JPA_API } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }
  retrieveAllTodos(username: string){
    return this.http.get<Todo[]>(`${TODO_JPA_API}/users/${username}/todos`)
  }

  deleteTodo(username: string, id: number ){
    return this.http.delete<Todo[]>(`${TODO_JPA_API}/users/${username}/todos/${id}`)
  }

  retrieveTodo(username: string, id: number){
    return this.http.get<Todo[]>(`${TODO_JPA_API}/users/${username}/todos/${id}`)
  }

  updateTodo(username: string, id: number, todo: Todo){
    return this.http.put<Todo[]>(`${TODO_JPA_API}/users/${username}/todos/${id}`, todo)
  }

  createTodo(username: string, todo: Todo){
    return this.http.post<Todo[]>(`${TODO_JPA_API}/users/${username}/todos/`, todo)
  }
}
