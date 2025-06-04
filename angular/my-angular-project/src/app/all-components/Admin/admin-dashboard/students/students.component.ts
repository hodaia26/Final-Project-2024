import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/Student';
import { StudentService } from 'src/app/Services/student.service';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  eleves: Student[] = []; // Déclarez une variable pour stocker les étudiants
  eleve : Student | any ;
  studentFormData :Student=new Student(0,'','','','','','');
  constructor(private teacherService: TeacherService,private studentService: StudentService, private location: Location,
    ) {}

  ngOnInit() {
      this.teacherService.getStudents().subscribe((stu) => {
      this.eleves = stu; // Stockez la liste des étudiants dans la variable
    });
  }

  



}