import { Component, OnInit } from '@angular/core';
import { Students,Student } from '../student';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  

  studentsmany = Students;
  thisStudent: Student;
  editStudent: boolean = false;
  students: any;
  constructor() { }

  ngOnInit() {
  }
  deleteStudents(student): void {
    this.editStudent = false;
    const index = this.studentsmany.indexOf(student);
    if( window.confirm("Are you sure?")){
      this.studentsmany.splice(index, 1);
    }
  }
  updateStudents(student: Student):void {
    this.editStudent = true;
    this.thisStudent = student;
  }
  updStudents(): void {
    this.thisStudent = null;
    this.editStudent = false;
  }
}
