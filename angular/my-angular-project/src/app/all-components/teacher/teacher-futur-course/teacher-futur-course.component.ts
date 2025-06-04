import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coursim } from 'src/app/Models/Coursim';
import { StudentInCourse } from 'src/app/Models/StudentInCourse';
import { Teacher } from 'src/app/Models/Teacher';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Location } from '@angular/common';
import { Notification } from 'src/app/Models/Notification';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-teacher-futur-course',
  templateUrl: './teacher-futur-course.component.html',
  styleUrls: ['./teacher-futur-course.component.css']
})
export class TeacherFuturCourseComponent {
  teacher: Teacher | any;
  courses: Coursim[] = [];
  sics: StudentInCourse[] = [];
  course: Coursim | any;
  courseFormData: Coursim = new Coursim(0,0,0,'','','','','','','','','','','');
  notifications: Notification[] = [];
  newnotification: Notification = new Notification(0,'',1,'','');

  currentDate = new Date();

  // Obtenez les composants de la date
  year = this.currentDate.getFullYear();
  month = (this.currentDate.getMonth() + 1).toString().padStart(2, '0'); // +1 car les mois commencent à 0
  day = this.currentDate.getDate().toString().padStart(2, '0');

  date = `${this.day}-${this.month}-${this.year}`;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private teacherService: TeacherService,
    private studentService: StudentService,

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
        this.loadStudentData();
        console.log('le prof qui doit faire cours',this.teacher);
      }
    });
  }

  loadStudentData() {
    this.teacherService.getCourses().subscribe((coursim) => {
      this.courses = coursim; // Stockez la liste des cours dans la variable
      this.courses = this.courses.filter(course => course.classEnd === null ||  course.classEnd === "" && course.Statut === "1");
      this.courses = this.courses.filter(course => course.IDTeacher === this.teacher.Idteacher);
      this.loadCoursesData();
      console.log('le cours prevu par le student' ,this.courses);

    });
  }
  
  loadCoursesData() {
    this.teacherService.getStudentincourses().subscribe((sic) => {
      this.sics = sic; // Stockez la liste des sic dans la variable
      // Filtrer this.courses en fonction de this.sics
      this.sics = this.sics.filter(sic => {
        return this.courses.some(course => course.Idcourse === sic.IdCourse);
        
      });
      console.log('this.sics', this.sics);
    });
  }

  DeleteCourse(idCourse: number) {
    this.course = this.courses.filter(course => course.Idcourse === idCourse );
     {
      const course = this.course[0];
      this.courseFormData.Idcourse = course.Idcourse;
      this.courseFormData.idSubject = course.idSubject;
      this.courseFormData.IDTeacher = course.IDTeacher;
      this.courseFormData.classStart = course.classStart;
      this.courseFormData.classEnd = course.classEnd;
      this.courseFormData.units = course.units;
      this.courseFormData.Type = course.Type;
      this.courseFormData.Date = course.Date;
      this.courseFormData.Statut = "2";
      this.courseFormData.Domaine = course.Domaine;
      this.courseFormData.TeacherName = course.TeacherName;
      this.courseFormData.Subject = course.Subject;
    }
    this.studentService.GetNotification().subscribe((noti) => {
      this.notifications = noti; // Stockez la liste complète des étudiants dans la variable
    const notifcount = this.notifications.length; // Compter le nombre d'étudiants
    // Affectez la nouvelle valeur de Idcourse
    this.newnotification.IdNotification = notifcount + 1;
    this.newnotification.Content = ' your cours with   ' + this.courseFormData.TeacherName +' was delete' ;
    this.newnotification.Date = this.date;
    this.newnotification.IdCourse = this.courseFormData.Idcourse;
    this.newnotification.Readed = '0';
  
    });
    
    this.teacherService.ModifyCourse(this.courseFormData).subscribe((mod: any) => {
      this.studentService.AddNotification(this.newnotification).subscribe((response: any) => {
        if (response) {
          console.log('envoie réussi');
        }
      });
      // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
      if (mod) {
        alert('Course delete.');
        this.route.params.subscribe(params => {
          const id = params['id'];
          // Obtenez les données du teacher à partir du localStorage avec la clé 'teacher'
          const teacherData = localStorage.getItem('teacher');
          if (teacherData) {
            this.teacher = JSON.parse(teacherData);
            window.location.reload(); 
          }
        });
      } 
      else {
        console.log('La suppression a échoué');
      }
    });
  } 

}
