import { Component, OnInit } from '@angular/core';
import { Student,Stud,Students } from '../stud';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  

  students = Student;
  thisStud: Stud;
  editStud: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  deleteStudent(stud): void {
    this.editStud = false;
    const index = this.students.indexOf(stud);
    if( window.confirm("Are you sure?")){
      this.students.splice(index, 1);
    }
  }
  updateStudent(stud: Stud) :void {
    this.editStud = true;
    this.thisStud = stud;
  }
  updStudent(updateForm): void {
    this.thisStud = null;
    this.editStud = false;
  }
}
