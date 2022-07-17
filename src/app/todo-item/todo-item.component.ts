import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  constructor() { }
  @Input() todo!:Todo;
  @Output() todoClick: EventEmitter<void>= new EventEmitter();
  @Output() todoEdit: EventEmitter<void>= new EventEmitter();
  @Output() todoDelete: EventEmitter<void>= new EventEmitter();
  
  ngOnInit(): void {
  }
  onTodoClicked()
  {
   this.todoClick.emit(); 
  }
  onTodoEdit(){
     this.todoEdit.emit();
  }
  onDelete(){
   this.todoDelete.emit();
  }
}
