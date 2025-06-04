import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coursim } from 'src/app/Models/Coursim';
import { StudentInCourse } from 'src/app/Models/StudentInCourse';
import { Teacher } from 'src/app/Models/Teacher';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Location } from '@angular/common';
import { Student } from 'src/app/Models/Student';
import { StudentService } from 'src/app/Services/student.service';
@Component({
  selector: 'app-my-student',
  templateUrl: './my-student.component.html',
  styleUrls: ['./my-student.component.css']
})
export class MyStudentComponent {

  teacher: Teacher | any;
  courses: Coursim[] = [];
  sics: StudentInCourse[] = [];
  course: Coursim | any;
  eleves: Student[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private teacherService: TeacherService,
    private studentservice: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Obtenez les données du teacher à partir du localStorage avec la clé 'teacher'
      const teacherData = localStorage.getItem('teacher');
      if (teacherData) {
        // Analysez les données JSON
        this.teacher = JSON.parse(teacherData);
      }
    });
  
    this.teacherService.getCourses().subscribe((coursim) => {
      this.courses = coursim; // Stockez la liste des cours dans la variable
      this.courses = this.courses.filter(course => course.IDTeacher === this.teacher.Idteacher);
      console.log('cours',this.courses);

 
  
    this.studentservice.getStudentincourses().subscribe((sic) => {
      this.sics = sic; // Stockez la liste des sic dans la variable
      // Filtrer this.courses en fonction de this.sics
      this.sics = this.sics.filter(sic => {
        
        return this.courses.some(course => course.Idcourse === sic.IdCourse);

      });
      console.log('sics',this.sics);

  
    this.teacherService.getStudents().subscribe((nao) => {
      this.eleves = nao; // Stockez la liste des étudiants dans la variable
      this.eleves = this.eleves.filter(eleve => {
        return this.sics.some(sic => sic.idStudent === eleve.Idstudent);
      });
      console.log('student',this.eleves);
    });
  });
});
  }

  EnvoyerMessage(eleve: any) {
    localStorage.setItem('student', JSON.stringify(eleve))
    const teacherData = localStorage.getItem('teacher');
    if (teacherData) {
      // Analysez les données JSON
      this.teacher = JSON.parse(teacherData);
    }
    console.log(this.teacher);

    this.router.navigate(['/teacher-message', this.teacher.Idteacher])
  }


}
