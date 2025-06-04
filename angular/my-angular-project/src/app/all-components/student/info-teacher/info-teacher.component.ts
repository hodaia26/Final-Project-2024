import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coursim } from 'src/app/Models/Coursim';
import { Student } from 'src/app/Models/Student';
import { StudentInCourse } from 'src/app/Models/StudentInCourse';
import { Teacher } from 'src/app/Models/Teacher';
import { StudentService } from 'src/app/Services/student.service';
import { TeacherService } from 'src/app/Services/teacher.service';
import { SubjectOfCoursim } from 'src/app/Models/SubjectOfCoursim';
import { CalendarEvent, CalendarView,  } from 'angular-calendar';
import { CalendarModule } from 'angular-calendar';
import { TimeOfCourse } from 'src/app/Models/TimeOfCourse';
import { Disponibilite } from 'src/app/Models/Disponibilite';
import { CoursimOfTeacher } from 'src/app/Models/CoursimOfTeacher';

interface CustomCalendarEvent extends CalendarEvent {
  id: number;
}
@Component({
  selector: 'app-info-teacher',
  templateUrl: './info-teacher.component.html',
  styleUrls: ['./info-teacher.component.css']
})

export class InfoTeacherComponent {



  date2: Date = new Date(); 
  calendarView: CalendarView = CalendarView.Day;

  view: string = 'week';
  viewDate: Date = new Date();
  //indispo avec map ds student service 
  events: CustomCalendarEvent[] = [];
  //dispo
  eventes: CustomCalendarEvent[] = [];
  locale: string = 'fr'; // Choisissez votre locale
  newTime: TimeOfCourse = new TimeOfCourse (5,this.date2,this.date2,1);
  cots: CoursimOfTeacher[]=[];
  newpay = {
    numero: '',
    date: '',
    code:'',
  };

  student: Student | any; // Déclarez la propriété 'student' ici
  teacher: Teacher | any;
  courses: Coursim []=[];
  studentincourses: StudentInCourse | any;
  newCourse: Coursim = new Coursim (1,1,1,'','','','','','','','','','','');
  courseStartDate = new Date(); // Date actuelle
  courseEndDate = new Date();
  date = new Date();
  newSic: StudentInCourse = new StudentInCourse (5,5,5,this.date,'',5,'','','','','','','','');
  subjects: SubjectOfCoursim[] = [];//il fait appel a celui du model
 //appaprtient a ts les types attebntion sans appel a la database juste html et ts
  newmatiere = {
    matiere: '',
  };
  
  TimeFormData : Disponibilite = new Disponibilite (5,this.date2,this.date2,1);
  dispos: Disponibilite[] = [];

  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
    

    const studentData = localStorage.getItem('student');
      if (studentData) {
        // Analysez les données JSON
        this.student = JSON.parse(studentData);
      }
      console.log(this.student);

      const teacherData = localStorage.getItem('teacher');
      if (teacherData) {
        // Analysez les données JSON
        this.teacher = JSON.parse(teacherData);
      
      console.log(this.teacher);

      this.teacherService.getCoursimOfTeacher().subscribe((coursimofteacher) => {
      this.cots=coursimofteacher;
      this.cots = this.cots.filter(cot => cot.IdTeacher === this.teacher.Idteacher);
      console.log('cots',this.cots);

    

      this.studentService.GetSubject().subscribe((pes) => {
        this.subjects = pes; // Stockez la liste complète des étudiants dans la variable
        this.subjects = this.subjects.filter(subject => {

          return this.cots.some(cot => cot.Matiere === subject.domaineName);
        });
      
     });
    });
  }
       // COTE RESERVER AU TABLEAU DE DISPONIBILITE
       this.studentService.getCourses().subscribe((coursim) => {
        this.courses = coursim; // Stockez la liste des prof dans la variable
        this.courses = this.courses.filter(course => course.IDTeacher === this.teacher.Idteacher);
        
      this.teacherService.getEventData().subscribe((data) => {
          this.events = data;
          this.events = data.filter(event => {
            return this.courses.some(course => course.Idcourse === event.id);
          });
        });
      });

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
  eventClicked1({ event, sourceEvent }: { event: CalendarEvent<any>; sourceEvent: MouseEvent | KeyboardEvent; }): void {
   alert("ppp")
    if (!event.color) {
      // התנאי מוודא שאין צבע לארוע
      console.log('Event Clicked:', event);
      // הוסף קוד נוסף שתרצה לבצע כאשר לוח השנה מכיל ארוע ללא צבע
    }
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
     this.newTime.DateStart = datePlusOneHour;
     this.newTime.dateend = datePlustwoHour;

     console.log('all of  du cours:', this.newTime);
 
 
     // Obtenez les composants de la ClassStart et Date de Coursim
     var yearStart = clickedDate.getFullYear();
     var monthStart = (clickedDate.getMonth() + 1).toString().padStart(2, '0'); // +1 car les mois commencent à 0
     var dayStart = clickedDate.getDate().toString().padStart(2, '0');
     var hoursStart = clickedDate.getHours().toString().padStart(2, '0');
     var minutesStart = clickedDate.getMinutes().toString().padStart(2, '0');
     var ClassStart = `${hoursStart}:${minutesStart}`;
     var  DateStart = `${dayStart}-${monthStart}-${yearStart}`;
 
 
     this.newCourse.Date = DateStart ;
     this.newCourse.classStart = ClassStart ;
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
    this.flag=true
  }
  else{
    this.flag=false;
  }
  }
 flag=false

  CreateCourse(){
    
 //   if(this.flag){
    //remplir newCourse pour la table coursim
      this.teacherService.getCourses().subscribe((res) => {
        this.courses = res; 
        const coursesCount = this.courses.length; // Compter le nombre d'étudiants
        // Affectez la nouvelle valeur de Idcourse
        this.newCourse.Idcourse = coursesCount + 1;
        this.newCourse.Statut = '0';
        this.newTime.idcourse = this.newCourse.Idcourse;
console.log(this.newCourse.Statut);
      const teacherData = localStorage.getItem('teacher');
        if (teacherData) {
          // Analysez les données JSON
          this.teacher = JSON.parse(teacherData);
          this.newCourse.IDTeacher = this.teacher.Idteacher;
        }


        //ajouter ceci pour filtrer Subject of Coursim
        this.studentService.GetSubject().subscribe((pes) => {
          this.subjects = pes; // Stockez la liste complète des subjects dans la variable
          this.subjects = this.subjects.filter(subject => subject.name === this.newmatiere.matiere);
          if (this.subjects.length > 0) {
            const subject = this.subjects[0];
            this.newCourse.idSubject = subject.idSubject;
          }
          console.log(this.newCourse.idSubject);
        });


    //remplir newSic pour la table StudentInCourse
      this.studentService.getStudentincourses().subscribe((res) => {
        this.studentincourses = res; // Stockez la liste complète des étudiants dans la variable
        const SICCount = this.studentincourses.length; // Compter le nombre d'étudiants
        // Affectez la nouvelle valeur de Idcourse
        this.newSic.IdStudentInCourse = SICCount + 1;
        this.newSic.IdCourse = this.newCourse.Idcourse;
        });
      });
        const studentData = localStorage.getItem('student');
        if (studentData) {
          // Analysez les données JSON
          this.student = JSON.parse(studentData);
          this.newSic.idStudent = this.student.Idstudent;
        }
        console.log('paiement', this.newpay.numero)
        if(this.newpay.numero!=="" && this.newpay.code!=="" && this.newpay.date!==""){
      this.studentService.CreateCoursim(this.newCourse).subscribe((response: any) => {
        // Gérez le cas où l'inscription a échoué (par exemple, affichez un message d'erreur)
        if (response) {
          console.log('L\'inscription a réussi dans coursim');
        } else {
          // Gérez le cas où l'inscription a échoué (par exemple, affichez un message d'erreur)
          console.log('Réssayez');
        }
      });

      // Envoyez les données au service
      this.studentService.CreateSIC(this.newSic).subscribe((res: any) => {
        // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
        if (res) {
          console.log('L\'inscription a réussi dans SIC');
         
            this.teacherService.CreateTime(this.newTime).subscribe((res: any) => {
              // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
              if (res) {
                alert('Demande de cours envoyée ! ');
                this.teacherService.DeleteDisponinbilite(this.TimeFormData).subscribe((mod: any) => {
                });
                // Redirigez l'utilisateur vers la page de profil
                this.Cancel();
              } else {
                // Gérez le cas où l'inscription a échoué (par exemple, affichez un message d'erreur)
                console.log('Réssayez');
              }
            });

        } else {
          // Gérez le cas où l'inscription a échoué (par exemple, affichez un message d'erreur)
          console.log('Réssayez');
        }
      });
 
    
  }
  else{
    alert("you must pay before to do lesson ")
  }

}

Cancel(){
  const studentData = localStorage.getItem('student');
  if (studentData) {
    // Analysez les données JSON
    this.student = JSON.parse(studentData);
  }
  this.router.navigate(['/profilStu', this.student.Idstudent])
}




EnvoyerMessage(){
  const studentData = localStorage.getItem('student');
  if (studentData) {
    // Analysez les données JSON
    this.student = JSON.parse(studentData);
  }
  this.router.navigate(['/student-message', this.student.Idstudent])
}




}



