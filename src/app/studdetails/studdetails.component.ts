import { Component, OnInit } from '@angular/core';
import { Student,Stud,Students } from '../stud';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-studdetails',
  templateUrl: './studdetails.component.html',
  styleUrls: ['./studdetails.component.css']
})
export class StuddetailsComponent implements OnInit {
    submitted = false;
    student = {};
    
    student1: Stud;
    students = Student;
    
  
  
    constructor(private router:Router) { }
  
    ngOnInit() {
      
    }
    onSubmit(studentform): void { 
      
      this.students.push(studentform.value);
      this.router.navigate(['../view-students']);
  
    }
  }