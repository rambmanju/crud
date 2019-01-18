import { Component, OnInit } from '@angular/core';
import { Student, Students } from '../student';
import { Router } from '@angular/router';


@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
    submitted = false;
    student = {};
    
    student1: Student;
    students = Students;
    
  
  
    constructor(private router:Router) { }
  
    ngOnInit() {
      
    }
    onSubmit(studentsform): void { 
      
      this.students.push(studentsform.value);
      this.router.navigate(['../view-students']);
  
    }
  }