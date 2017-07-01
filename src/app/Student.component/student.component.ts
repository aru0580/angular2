import { Component,EventEmitter,OnInit} from '@angular/core';
import {StudentService} from '../service';

@Component({
  selector: 'stu-root',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  inputs: ['parentData'],
  outputs:['childEvent']
})


export class StudentComponent implements OnInit{
public status=false;
public fname;
public lname;
public cone=false;
 Student=[];
 constructor(private _studentservice : StudentService){}
ngOnInit(){
this.Student=this._studentservice.getStudents();
  }
  apply()
  {
  this.cone=!this.cone;
  }
  onShowChange()
  {
  this.status=!this.status;
  
  }

  
public style="italic";
public size="30px";
public parentData:String;
childEvent=new EventEmitter<string>();
onChange(value:string)
{
  this.childEvent.emit(value);
  
}
}