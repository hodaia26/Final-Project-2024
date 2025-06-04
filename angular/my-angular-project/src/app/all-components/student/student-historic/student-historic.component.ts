import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coursim } from 'src/app/Models/Coursim';
import { Student } from 'src/app/Models/Student';
import { StudentInCourse } from 'src/app/Models/StudentInCourse';
import { Teacher } from 'src/app/Models/Teacher';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-historic',
  templateUrl: './student-historic.component.html',
  styleUrls: ['./student-historic.component.css']
})
export class StudentHistoricComponent implements OnInit {
  student: Student | any;
  sics: StudentInCourse[] = [];
  courses: Coursim[] = [];
  teachers: Teacher[] = [];

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Obtenez les données du student à partir du localStorage avec la clé 'student'
      const studentData = localStorage.getItem('student');
      if (studentData) {
        // Analysez les données JSON
        this.student = JSON.parse(studentData);
        this.loadStudentData();
      }
    });
  } 

  loadStudentData() {
    this.studentService.getStudentincourses().subscribe((hodaia) => {
      this.sics = hodaia; // Stockez la liste des prof dans la variable    
      this.sics = this.sics.filter(sic => sic.idStudent === this.student.Idstudent);
      this.loadCoursesData();
    });
  }

  loadCoursesData() {
    this.studentService.getCourses().subscribe((coursim) => {
      console.log(coursim);
      
      this.courses = coursim; // Stockez la liste des prof dans la variable
      this.courses = this.courses.filter(course => course.classEnd !== null &&  course.classEnd !== "" && course.Statut === "1");      // Filtrer this.courses en fonction de this.sics
      this.courses = this.courses.filter(course => {
        return this.sics.some(sic => sic.IdCourse === course.Idcourse);
      });
    });
  }

}
