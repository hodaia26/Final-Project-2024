import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coursim } from 'src/app/Models/Coursim';
import { Teacher } from 'src/app/Models/Teacher';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Notification } from 'src/app/Models/Notification';
import { StudentService } from 'src/app/Services/student.service';
import {  } from 'src/app/Models/Notification';
import { Student } from 'src/app/Models/Student';
import { StudentInCourse } from 'src/app/Models/StudentInCourse';
import { SubjectOfCoursim } from 'src/app/Models/SubjectOfCoursim';
import { CalendarEvent, CalendarView  } from 'angular-calendar';
import { TimeOfCourse } from 'src/app/Models/TimeOfCourse';
import { Disponibilite } from 'src/app/Models/Disponibilite';
interface CustomCalendarEvent extends CalendarEvent {
  id: number;
}
@Component({
  selector: 'app-teacher-modify-course',
  templateUrl: './teacher-modify-course.component.html',
  styleUrls: ['./teacher-modify-course.component.css']
})
export class TeacherModifyCourseComponent {
   
date2: Date = new Date(); 
calendarView: CalendarView = CalendarView.Day;

view: string = 'week';
viewDate: Date = new Date();

locale: string = 'fr'; // Choisissez votre locale
modifyTime: TimeOfCourse = new TimeOfCourse (5,this.date2,this.date2,1);
oldTime: TimeOfCourse = new TimeOfCourse (5,this.date2,this.date2,1);
TimeFormData : Disponibilite = new Disponibilite (5,this.date2,this.date2,1);
dispos: Disponibilite[] = [];

student: Student | any; // Déclarez la propriété 'student' ici
teacher: Teacher | any;
courses: Coursim [] = [];
studentincourses: StudentInCourse | any;
courseStartDate = new Date(); // Date actuelle
courseEndDate = new Date();
subjects: SubjectOfCoursim[] = [];



events: CustomCalendarEvent[] = [];
eventes: CustomCalendarEvent[] = [];
timeofcourses: TimeOfCourse[]=[];

  // Créez un objet pour stocker les données de l'utilisateur
  courseFormData: Coursim = new Coursim(0,0,0,'','','','','','','','','','','');
  notifications: Notification[] = [];
  newnotification: Notification = new Notification(0,'',1,'','');

  currentDate = new Date();

  // Obtenez les composants de la date
  year = this.currentDate.getFullYear();
  month = (this.currentDate.getMonth() + 1).toString().padStart(2, '0'); // +1 car les mois commencent à 0
  day = this.currentDate.getDate().toString().padStart(2, '0');

  date = `${this.day}-${this.month}-${this.year}`;
// Déclarez un formulaire réactif pour gérer les entrées de l'utilisateur

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private studentService:StudentService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id']; // id affiché dans url
      // Obtenez les données du student à partir du localStorage avec la clé 'course'
      this.studentService.getCourses().subscribe((coursim) => {
        this.courses = coursim; // Stockez la liste des prof dans la variable
        this.courses = this.courses.filter(course => course.Idcourse == id);

        //du tableau coursim
        if (this.courses.length > 0) {
          const course = this.courses[0];
          this.courseFormData.Idcourse = course.Idcourse;
          this.courseFormData.idSubject = course.idSubject;
          this.courseFormData.IDTeacher = course.IDTeacher;
          this.courseFormData.classStart = course.classStart;
          this.courseFormData.units = course.units;
          this.courseFormData.Type = course.Type;
          this.courseFormData.Date = course.Date;
          this.courseFormData.Statut = course.Statut;
          this.courseFormData.Domaine = course.Domaine;
          this.courseFormData.TeacherName = course.TeacherName;
          this.courseFormData.Subject = course.Subject;
        }
      

      //time of course

      this.teacherService.getTimeOfCourse().subscribe((time) => {
        this.timeofcourses = time; // Stockez la liste complète des étudiants dans la variable
        this.timeofcourses = this.timeofcourses.filter(timeofcourse => timeofcourse.idcourse == id);

        if (this.timeofcourses.length > 0) {
          const timeofcourse = this.timeofcourses[0];
          this.modifyTime.IdTime = timeofcourse.IdTime;
          this.modifyTime.DateStart = timeofcourse.DateStart;
          this.modifyTime.dateend = timeofcourse.dateend;
          this.modifyTime.idcourse = this.courseFormData.Idcourse;  
          this.oldTime.IdTime = timeofcourse.IdTime;
          this.oldTime.DateStart = timeofcourse.DateStart;
          this.oldTime.dateend = timeofcourse.dateend;
          this.oldTime.idcourse = this.courseFormData.Idcourse;  
        }
        
      this.teacherService.getEventData().subscribe((data) => {
          this.events = data;
          this.events = data.filter(event => {
            return this.courses.some(course => course.Idcourse === event.id);
          });
        });
  console.log(this.courses);
      this.teacherService.getDisponibilite().subscribe((data) => {
        this.eventes = data;
        this.eventes = this.eventes.filter(evente => evente.id == this.courseFormData.IDTeacher);
        });
  console.log(this.eventes);    
    });
 
    

  this.studentService.GetNotification().subscribe((noti) => {
    this.notifications = noti; // Stockez la liste complète des étudiants dans la variable
  const notifcount = this.notifications.length; // Compter le nombre d'étudiants
  // Affectez la nouvelle valeur de Idcourse
  this.newnotification.IdNotification = notifcount + 1;
  this.newnotification.Content = this.courseFormData.TeacherName  + ' has modified the course ' ;
  this.newnotification.Date = this.date;
  this.newnotification.IdCourse = this.courseFormData.Idcourse;
  this.newnotification.Readed = '0';

  });

});
  
});

}

get combinedEvents(): CalendarEvent[] {
  // Fusionnez les deux tableaux d'événements
  return this.events.concat(this.eventes);
}
increment(): void {
  if (this.calendarView === CalendarView.Day) {
    this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.viewDate.getDate() + 1);
  } else if (this.calendarView === CalendarView.Week) {
    this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.viewDate.getDate() + 7);
  } else if (this.calendarView === CalendarView.Month) {
    this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1, this.viewDate.getDate());
  }
}
decrement(): void {
  if (this.calendarView === CalendarView.Day) {
    this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.viewDate.getDate() - 1);
  } else if (this.calendarView === CalendarView.Week) {
    this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.viewDate.getDate() - 7);
  } else if (this.calendarView === CalendarView.Month) {
    this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() - 1, this.viewDate.getDate());
  }
}
today(): void {
  this.viewDate = new Date();
}

eventClicked({ event, sourceEvent }: { event: CalendarEvent<any>; sourceEvent: MouseEvent | KeyboardEvent; }): void {
  alert(event.color!.primary)
  if(event.color!.primary!="DarkRed"){
   // Cette méthode est appelée lorsqu'un événement est cliqué
   console.log('your choose :', event);
   // Affichez l'horaire de l'événement dans la console
   console.log('hours of event  :', event.start);
    //const clickedHour = event.date.getHours();
    const clickedDate = event.start;

    // Calculer la date + 1 heure
    const datePlusOneHour = new Date(clickedDate);
    datePlusOneHour.setHours(clickedDate.getHours() + 1);
    const datePlustwoHour = new Date(clickedDate);
    datePlustwoHour.setHours(clickedDate.getHours() + 2);
    this.modifyTime.DateStart = datePlusOneHour;
    this.modifyTime.dateend = datePlustwoHour;

    console.log('all of  du cours:', this.modifyTime);


    // Obtenez les composants de la ClassStart et Date de Coursim
    var yearStart = clickedDate.getFullYear();
    var monthStart = (clickedDate.getMonth() + 1).toString().padStart(2, '0'); // +1 car les mois commencent à 0
    var dayStart = clickedDate.getDate().toString().padStart(2, '0');
    var hoursStart = clickedDate.getHours().toString().padStart(2, '0');
    var minutesStart = clickedDate.getMinutes().toString().padStart(2, '0');

    var ClassStart = `${hoursStart}:${minutesStart}`;
    var  DateStart = `${dayStart}-${monthStart}-${yearStart}`;

//COURSEFORMDATA c'est dans coursim
    this.courseFormData.Date = DateStart ;
    this.courseFormData.classStart = ClassStart ;
    // pour supprimer la disponibilité
    const teacherData = localStorage.getItem('teacher');
    if (teacherData) {
      // Analysez les données JSON
      this.teacher = JSON.parse(teacherData);
   
     this.teacherService.getDispo().subscribe((data) => {
       this.dispos = data;
       this.dispos = this.dispos.filter(dispo => dispo.IdTeacher === this.teacher.Idteacher);
   
       // Convertissez la chaîne en objet Date
     const originalDate = new Date(event.start);

     // Obtenez les composants de la date (année, mois, jour, heure, minute, seconde)
     const year = originalDate.getFullYear();
     const month = (originalDate.getMonth() + 1).toString().padStart(2, '0'); // Les mois commencent à zéro, donc ajoutez 1 et assurez-vous d'avoir deux chiffres
     const day = originalDate.getDate().toString().padStart(2, '0');
     const hours = originalDate.getHours().toString().padStart(2, '0');
     const minutes = originalDate.getMinutes().toString().padStart(2, '0');
     const seconds = originalDate.getSeconds().toString().padStart(2, '0');

     // Formatez la nouvelle chaîne de date
     const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;


     this.dispos = this.dispos.filter(dispo => dispo.DateStart.toString() ===  formattedDate);
      

     if (this.dispos.length > 0) {
     const disp = this.dispos[0];
     this.TimeFormData.IdDisponibilite = disp.IdDisponibilite;
     this.TimeFormData.DateStart = event.start;       
     }

     });
   }
   
 }
 
 }





















  Cancel() {
    const studentData = localStorage.getItem('student');
    if (studentData) {
      // Analysez les données JSON
      this.teacher = JSON.parse(studentData);
      
      this.router.navigate(['/teacher-futur-courses', this.teacher.Idstudent]);
    }
  }
  
 // SaveChanges() {
   // this.teacherService.ModifyCourse(this.courseFormData).subscribe((mod: any) => {
    ////  this.studentService.AddNotification(this.newnotification).subscribe((response: any) => {
    //    if (response) {
     //     console.log('envoie réussi');
     //   }
     // });
      // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
     // if (mod) {
     //   alert('Modification réussie.');
      //  this.Cancel();
    //  } 
     // else {
     //   console.log('La modification a échoué');
   //   }
   // });
  //}
  
  SaveChanges() {
  console.log('notif',this.newnotification);

  this.studentService.AddNotification(this.newnotification).subscribe((response: any) => {
    if (response) {
      console.log('winn');
    }
  });
  this.studentService.ModifyCourse(this.courseFormData).subscribe((mod: any) => {
    // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
    if (mod) {

      if (this.oldTime.DateStart !== this.modifyTime.DateStart){
      this.teacherService.ModifyTime(this.modifyTime).subscribe((res: any) => {
        // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
        if (res) {
          this.teacherService.DeleteDisponinbilite(this.TimeFormData).subscribe((mod: any) => {
              alert('update good.');                
           });
          this.Cancel();
        }
         else {
          // Gérez le cas où l'inscription a échoué (par exemple, affichez un message d'erreur)
          console.log('Réssayez');
        }
      });
    } 
    else {

      this.Cancel();


    } 
    } 


    else {
      console.log('modify error');
    }
  });
} 


}



//}





//}
