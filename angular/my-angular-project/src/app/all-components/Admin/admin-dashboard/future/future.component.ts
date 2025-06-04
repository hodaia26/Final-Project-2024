import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coursim } from 'src/app/Models/Coursim';
import { StudentInCourse } from 'src/app/Models/StudentInCourse';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit  {
  sics: StudentInCourse[] = [];
  courses: Coursim[] = [];

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.studentService.getStudentincourses().subscribe((sic) => {
      this.sics = sic; // Stockez la liste des prof dans la variable
      this.loadCoursesData();
    });
  }

  loadCoursesData() {
    this.studentService.getCourses().subscribe((coursim) => {
      this.courses = coursim; // Stockez la liste des prof dans la variable
      this.courses = this.courses.filter(course => course.classEnd === null || course.classEnd === "" );
      // Filtrer this.courses en fonction de this.sics
      this.courses = this.courses.filter(course => {
        return this.sics.some(sic => sic.IdCourse === course.Idcourse);
      });
    });
  }

}
