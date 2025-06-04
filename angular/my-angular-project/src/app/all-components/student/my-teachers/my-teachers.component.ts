import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coursim } from 'src/app/Models/Coursim';
import { Student } from 'src/app/Models/Student';
import { StudentInCourse } from 'src/app/Models/StudentInCourse';
import { Teacher } from 'src/app/Models/Teacher';
import { StudentService } from 'src/app/Services/student.service';
import { TeacherService } from 'src/app/Services/teacher.service';
@Component({
  selector: 'app-my-teachers',
  templateUrl: './my-teachers.component.html',
  styleUrls: ['./my-teachers.component.css']
})
export class MyTeachersComponent {
  student: Student | any; // Déclarez la propriété 'student' ici
  sics: StudentInCourse[] = [];
  courses: Coursim[] = [];
  teachers: Teacher[] = [];

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private router: Router,
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
      }
    });

    this.studentService.getStudentincourses().subscribe((sic) => {
      this.sics = sic; // Stockez la liste des prof dans la variable
      this.sics = this.sics.filter(sic => sic.idStudent === this.student.Idstudent);
      console.log(this.sics);
 

    this.teacherService.getCourses().subscribe((coursim) => {
      this.courses = coursim; // Stockez la liste des cours dans la variable
      this.courses = this.courses.filter(course => {
        return this.sics.some(sic => sic.IdCourse === course.Idcourse); 
      });
  
    console.log(this.courses);
    this.studentService.getTeachers().subscribe((res) => {
      this.teachers = res; // Stockez la liste des prof dans la variable
      
      this.teachers = this.teachers.filter(teacher => {
        return this.courses.some(course => course.IDTeacher === teacher.Idteacher); 
      });
    
    console.log(this.teachers);
    });
  });

});
    
  }

  EnvoyerMessage(teacher: any) {
    localStorage.setItem('teacher', JSON.stringify(teacher))
    const studentData = localStorage.getItem('student');
    if (studentData) {
      // Analysez les données JSON
      this.student = JSON.parse(studentData);
    }
    this.router.navigate(['/student-message', this.student.Idstudent])
  }

}
