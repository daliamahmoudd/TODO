import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  
  constructor(public dialog: MatDialogRef<EditTodoComponent>, 
    @Inject(MAT_DIALOG_DATA) public todo:Todo) { }

  ngOnInit(): void {
  }
  close(){
    this.dialog.close();
  }
  submitEditted(form:any)
  {
    this.todo.text=form.value.updatedText;
    this.dialog.close(this.todo)
  }
}
