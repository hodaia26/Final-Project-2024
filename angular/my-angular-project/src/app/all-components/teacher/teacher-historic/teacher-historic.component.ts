import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coursim } from 'src/app/Models/Coursim';
import { StudentInCourse } from 'src/app/Models/StudentInCourse';
import { Teacher } from 'src/app/Models/Teacher';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-teacher-historic',
  templateUrl: './teacher-historic.component.html',
  styleUrls: ['./teacher-historic.component.css']
})
export class TeacherHistoricComponent implements OnInit {
  teacher: Teacher | any;
  courses: Coursim[] = [];
  sics: StudentInCourse[] = [];

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Obtenez les données du student à partir du localStorage avec la clé 'student'
      const teacherData = localStorage.getItem('teacher');
      if (teacherData) {
        // Analysez les données JSON
        this.teacher = JSON.parse(teacherData);
        this.loadTeacherData();
        console.log(this.courses);
      }
    });
  }

  loadTeacherData() {
    this.teacherService.getCourses().subscribe((coursim) => {
      this.courses = coursim; // Stockez la liste des cours dans la variable
      this.courses = this.courses.filter(course => course.classEnd !== null &&  course.classEnd !== "" && course.Statut === "1");
      this.courses = this.courses.filter(course => course.IDTeacher === this.teacher.Idteacher);
      this.loadCoursesData();
    });
  }
  
  loadCoursesData() {
    this.teacherService.getStudentincourses().subscribe((sic) => {
      this.sics = sic; // Stockez la liste des sic dans la variable
      // Filtrer this.courses en fonction de this.sics
      this.sics = this.sics.filter(sic => {
        return this.courses.some(course => course.Idcourse === sic.IdCourse);
      });
    });
  }

}
