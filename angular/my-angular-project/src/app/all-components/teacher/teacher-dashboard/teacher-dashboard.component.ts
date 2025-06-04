import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coursim } from 'src/app/Models/Coursim';
import { StudentInCourse } from 'src/app/Models/StudentInCourse';
import { Teacher } from 'src/app/Models/Teacher';
import { TeacherService } from 'src/app/Services/teacher.service';
import { TimeOfCourse } from 'src/app/Models/TimeOfCourse';
import { Disponibilite } from 'src/app/Models/Disponibilite';


@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {






 
  timeofcourses: TimeOfCourse[]=[];
  date2: Date = new Date(); 
  modifyTime: TimeOfCourse = new TimeOfCourse (5,this.date2,this.date2,1);
  oldTime: TimeOfCourse = new TimeOfCourse (5,this.date2,this.date2,1);
  TimeFormData : Disponibilite = new Disponibilite (5,this.date2,this.date2,1);



  teacher: Teacher | any;// Déclarez une variable pour stocker les étudiants
  courses: Coursim[] = [];
  sics: StudentInCourse[] = [];
  course: Coursim | any;
  courseFormData: Coursim = new Coursim(0,0,0,'','','','','','','','','','','');
  
  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService) 
    {}

  ngOnInit() {

    this.route.params.subscribe(params => {
      const id = params['id'];
      const teacherData = localStorage.getItem('teacher');
      if (teacherData) {
        this.teacher = JSON.parse(teacherData);
      }

      this.teacherService.getCourses().subscribe((coursim) => {
        this.courses = coursim; // Stockez la liste des cours dans la variable
        this.courses = this.courses.filter(course => course.Statut === "0" || course.Statut === "" );
        this.courses = this.courses.filter(course => course.IDTeacher === this.teacher.Idteacher);
        this.loadCoursesData();
      });
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

  Accept(idCourse: number) {
    this.teacherService.getCourses().subscribe((coursim) => {
      this.courses = coursim; // Stockez la liste des cours dans la variable
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
      this.courseFormData.Statut = "1";
      this.courseFormData.Date = course.Date;
      this.courseFormData.Domaine = course.Domaine;
      this.courseFormData.TeacherName = course.TeacherName;
      this.courseFormData.Subject = course.Subject;
      }
    });

    this.teacherService.ModifyCourse(this.courseFormData).subscribe((mod: any) => {
      // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
      if (mod) {
        alert('Cours accepté, Voir dans vos Programmed Courses.');
        window.location.reload();
  //faire actualiser la page
      } 
      else {
        
      }
    });
  }

  

 Refuse(idCourse: number){
    
  this.teacherService.getCourses().subscribe((coursim) => {
    this.courses = coursim; // Stockez la liste des cours dans la variable
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
    this.teacherService.getTimeOfCourse().subscribe((time) => {
      this.timeofcourses = time; // Stockez la liste complète des étudiants dans la variable
      this.timeofcourses = this.timeofcourses.filter(timeofcourse => timeofcourse.idcourse == this.courseFormData.Idcourse);
      if (this.timeofcourses.length > 0) {
        const timeofcourse = this.timeofcourses[0];  
        this.oldTime.IdTime = timeofcourse.IdTime;
        this.oldTime.DateStart = timeofcourse.DateStart;
        this.oldTime.dateend = timeofcourse.dateend;
        this.oldTime.idcourse = timeofcourse.idcourse;  
      }
      
     this.TimeFormData.DateStart = this.oldTime.DateStart;       
     this.TimeFormData.dateend = this.oldTime.dateend;  
     this.TimeFormData.IdTeacher = this.courseFormData.IDTeacher;  

  });
  });

  this.teacherService.ModifyCourse(this.courseFormData).subscribe((mod: any) => {
    // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
    if (mod) {
      console.log(this.oldTime)
      console.log(this.TimeFormData)

      this.teacherService.CreateDisponibilite(this.TimeFormData).subscribe((res: any) => {
        // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
        if (res) {
          this.teacherService.DeleteTimeOfCourse(this.oldTime).subscribe((mod: any) => {
            alert('Course delete.');
         //   window.location.reload(); 
           });
          }
          else {
            // Gérez le cas où l'inscription a échoué (par exemple, affichez un message d'erreur)
            console.log('Réssayez');
          }
      });
     
    } 
    else {
      console.log('La suppression a échoué');
    }
  });
}
}








