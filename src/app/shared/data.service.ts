import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  todos:Todo[]=[
    new Todo('Todo Project completed',true),
    new Todo('start a new project '),
  ];
  constructor() { }
  getAllTodos(){
    return this.todos;
  }
  addTodo(todo:Todo){
    this.todos.push(todo);
  }
  updateTodos(index:number , updated:Todo){
    this.todos[index] = updated;
  }
  deleteTodo(index:number){
    this.todos.splice(index,1);
  }
}
