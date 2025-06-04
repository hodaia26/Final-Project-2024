import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/Models/Student';
import { Teacher } from 'src/app/Models/Teacher';
import { Coursim } from 'src/app/Models/Coursim';
import { StudentInCourse } from 'src/app/Models/StudentInCourse';
import { TeacherService } from 'src/app/Services/teacher.service';
import { FormControl, FormGroup } from '@angular/forms';
import { SubjectOfCoursim } from 'src/app/Models/SubjectOfCoursim';
import { CalendarEvent, CalendarView, } from 'angular-calendar';
import { CalendarModule } from 'angular-calendar';
import { TimeOfCourse } from 'src/app/Models/TimeOfCourse';
import { Disponibilite } from 'src/app/Models/Disponibilite';
interface CustomCalendarEvent extends CalendarEvent {
  id: number;
}
@Component({
  selector: 'app-disponibilites',
  templateUrl: './disponibilites.component.html',
  styleUrls: ['./disponibilites.component.css']
})


export class DisponibilitesComponent {


  date2: Date = new Date();
  calendarView: CalendarView = CalendarView.Day;

  view: string = 'week';
  viewDate: Date = new Date();
  events: CustomCalendarEvent[] = [];
  eventes: CustomCalendarEvent[] = [];
  locale: string = 'fr'; // Choisissez votre locale
  newTime: Disponibilite = new Disponibilite(5, this.date2, this.date2, 1);
  teacher: Teacher | any;
  courses: Coursim []=[];



  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private router: Router,
    private studentService: StudentService
  ) { }



  ngOnInit() {
    const teacherData = localStorage.getItem('teacher');
    if (teacherData) {
      // Analysez les données JSON
      this.teacher = JSON.parse(teacherData);
    }
    console.log(this.teacher);

 // COTE RESERVER AU TABLEAU DE DISPONIBILITE
 this.studentService.getCourses().subscribe((coursim) => {
  this.courses = coursim; // Stockez la liste des prof dans la variable
  this.courses = this.courses.filter(course => course.IDTeacher === this.teacher.Idteacher);
  
  //trouver le rouge
this.teacherService.getEventData().subscribe((data) => {
    this.events = data;
    this.events = data.filter(event => {
      return this.courses.some(course => course.Idcourse === event.id);
    });
  });
});
//afficher le vert
    this.teacherService.getDisponibilite().subscribe((data) => {
      this.eventes = data;
      this.eventes = this.eventes.filter(evente => evente.id === this.teacher.Idteacher);

    });
  }


  
  get combinedEvents(): CalendarEvent[] {
    // Fusionnez les deux tableaux d'événements
    return this.events.concat(this.eventes);
  }




  // COTE RESERVER AU TABLEAU DE DISPONIBILITE

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

  flag = false
  hourClicked(event: { date: Date, sourceEvent: MouseEvent }): void {
    this.flag=true
    console.log
    (this.newTime)
    //const clickedHour = event.date.getHours();
    const clickedDate = event.date;

    // Calculer la date + 1 heure
    const datePlusOneHour = new Date(clickedDate);
    const datePlusTwoHour= new Date(clickedDate);
    datePlusOneHour.setHours(clickedDate.getHours() + 1);
    datePlusTwoHour.setHours(clickedDate.getHours() + 2);
    this.newTime.DateStart = datePlusOneHour;
    this.newTime.dateend = datePlusTwoHour;

    this.newTime.IdTeacher = this.teacher.Idteacher;

    console.log('donnée du cours:', this.newTime);
    this.flag = true
  }

  CreateDisponibilite() {
   
    console.log(this.eventes);
    if (this.flag) 

      {
        alert("true")
        this.teacherService.CreateDisponibilite(this.newTime).subscribe((res: any) => {
          // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
          if (res) {
            alert('disponibilité add ');
            window.location.reload(); // Actualise la page après l'alerte

            // Redirigez l'utilisateur vers la page de profil
          } else {
            // Gérez le cas où l'inscription a échoué (par exemple, affichez un message d'erreur)
            alert('impossible');

          }
        });
      }
      else{
        alert("error")
      }

    }
  }
