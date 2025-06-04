import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coursim } from 'src/app/Models/Coursim';
import { Student } from 'src/app/Models/Student';
import { StudentInCourse } from 'src/app/Models/StudentInCourse';
import { StudentService } from 'src/app/Services/student.service';
import { Notification } from 'src/app/Models/Notification';

@Component({
  selector: 'app-student-futur-course',
  templateUrl: './student-futur-course.component.html',
  styleUrls: ['./student-futur-course.component.css']
})
export class StudentFuturCourseComponent implements OnInit {
  student: Student | any;
  sics: StudentInCourse[] = [];
  courses: Coursim[] = [];
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
    private router: Router,
   
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
    this.studentService.getStudentincourses().subscribe((sic) => {
      this.sics = sic; // Stockez la liste des prof dans la variable
      this.sics = this.sics.filter(sic => sic.idStudent === this.student.Idstudent);
      this.loadCoursesData();
    });
  }

  loadCoursesData() {
    this.studentService.getCourses().subscribe((coursim) => {
      this.courses = coursim; // Stockez la liste des prof dans la variable
      this.courses = this.courses.filter(course => course.classEnd === null ||  course.classEnd === "" && course.Statut === "1");
      // Filtrer this.courses en fonction de this.sics
      this.courses = this.courses.filter(course => {
        return this.sics.some(sic => sic.IdCourse === course.Idcourse);
      });
      localStorage.setItem('course', JSON.stringify(coursim))
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
      this.courseFormData.Statut = "2";
      this.courseFormData.Date = course.Date;
      this.courseFormData.Domaine = course.Domaine;
      this.courseFormData.TeacherName = course.TeacherName;
      this.courseFormData.Subject = course.Subject;
    }
    this.studentService.GetNotification().subscribe((noti) => {
      this.notifications = noti; // Stockez la liste complète des étudiants dans la variable
    const notifcount = this.notifications.length; // Compter le nombre d'étudiants
    // Affectez la nouvelle valeur de Idcourse
    this.newnotification.IdNotification = notifcount + 1;
    this.newnotification.Content = ' Votre cours avec ' + this.courseFormData.TeacherName +' a été modifier' ;
    this.newnotification.Date = this.date;
    this.newnotification.IdCourse = this.courseFormData.Idcourse;
    this.newnotification.Readed = '0';
  
    });
    
  
    
    this.studentService.ModifyCourse(this.courseFormData).subscribe((mod: any) => {
      this.studentService.AddNotification(this.newnotification).subscribe((response: any) => {
        if (response) {
          console.log('envoie réussi');
        }
      });
      // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
      if (mod) {
        alert('Course delete.');
        window.location.reload(); // Actualise la page après l'alerte
      } 
      else {
        console.log('La suppression a échoué');
      }
    });
  } 

}
