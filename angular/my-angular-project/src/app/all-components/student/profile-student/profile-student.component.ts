import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/Models/Student';
import { Teacher } from 'src/app/Models/Teacher';
import { StudentInCourse } from 'src/app/Models/StudentInCourse';
import { Notification } from 'src/app/Models/Notification';
import { CoursimOfTeacher } from 'src/app/Models/CoursimOfTeacher';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent implements OnInit {
  student: Student | any; // Déclarez la propriété 'student' ici
  teachers: Teacher[] = []; // Déclarez une variable pour stocker les étudiants
  notifications: Notification[] = [];
  sics: StudentInCourse[] = [];
  modifynotification: Notification = new Notification(0,'',1,'','');
  cots: CoursimOfTeacher[]=[];

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private studentService: StudentService,
    private teacherService:TeacherService
  ) { }
   currentstudent:Student =JSON.parse( localStorage.getItem('student')!);

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

this.studentService.GetTeachersByClass(this.currentstudent.NameClass).subscribe((res) => {
      this.teachers = res; 
      this.teachers=this.teachers.filter(r => r.Statut === '1');
          console.log('les professeurs en fonction dla classe',res);
          

this.teacherService.getCoursimOfTeacher().subscribe((coursimofteacher) => {
this.cots=coursimofteacher;

this.cots = this.cots.filter(cot => {
 

  return this.teachers.some(teacher => teacher.Idteacher === cot.IdTeacher); 
});         
});
  this.studentService.getStudentincourses().subscribe((sic) => {
    this.sics = sic; // Stockez la liste des prof dans la variable
    this.sics = this.sics.filter(sic => sic.idStudent === this.student.Idstudent);
    console.log('sic',this.sics);


  this.studentService.GetNotification().subscribe((not) => {
    this.notifications = not; // Stockez la liste des prof dans la variable
    this.notifications = this.notifications.filter(notification => {
      return this.sics.some(sic => sic.IdCourse === notification.IdCourse); 
    });
    this.notifications = this.notifications.filter(notification => notification.Readed == "0" )

      
  });
});
});
  } 


  
  showTeacherDetails(teacher: any) {
    localStorage.setItem('teacher', JSON.stringify(teacher))
    this.router.navigate(['/info-teacher', teacher.Idteacher]);
  }

  ReadNoti(){
    console.log(this.notifications);

    this.studentService.Modifynotification(this.notifications).subscribe((mod: any) => {
      // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
      if (mod) {
        console.log('La modification est réussite');
      } 
      else {
        console.log('La suppression a échoué');
      }
    });
  }

}