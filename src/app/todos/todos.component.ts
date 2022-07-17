import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todo !:Todo[];
  invalid=false;
  constructor(private data:DataService , private dialog: MatDialog) { }

  ngOnInit(): void {
    this.todo=this.data.getAllTodos();
  }
  onFormSubmit(form :any){
  if(form.valid){
    this.data.addTodo(form.value);
  }  
  else{
    this.invalid=true;
  }
  form.reset();
}
setCompleted( todo:Todo){
  todo.completed=!todo.completed;
}
onTodoEdit(index:number , todo:Todo){
  let dialogRef = this.dialog.open(EditTodoComponent, {
    width: '500px',
    data:todo
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result){
      // console.log(todo);
      this.data.updateTodos(index , todo);
    }
  });
}
onTodoDelete(index:number){
  this.data.deleteTodo(index)
}
}