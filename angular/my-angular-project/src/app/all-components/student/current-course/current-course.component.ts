import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coursim } from 'src/app/Models/Coursim';
import { Student } from 'src/app/Models/Student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-current-course',
  templateUrl: './current-course.component.html',
  styleUrls: ['./current-course.component.css']
})
export class CurrentCourseComponent {
  courses: Coursim[] = [];
  student: Student | any; 
  courseEndDate = new Date();
  // Créez un objet pour stocker les données de l'utilisateur
  courseFormData: Coursim = new Coursim(0,0,0,'','','','','','','','','','','');

  // Obtenez la date actuelle
  currentDate = new Date();
  // Obtenez les composants de la date
  hours = this.currentDate.getHours().toString().padStart(2, '0');
  minutes = this.currentDate.getMinutes().toString().padStart(2, '0');
  // Formatage de la dateEnd au format 'YYYY-MM-DD HH:MM:SS'
  date = `${this.hours}:${this.minutes}`;
 

  // Déclarez un formulaire réactif pour gérer les entrées de l'utilisateur

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      const id = params['id']; // id affiché dans url
      // Obtenez les données du student à partir du localStorage avec la clé 'course'
      const courseData = localStorage.getItem('course');
      if (courseData) {
        // Analysez les données JSON
        this.courses = JSON.parse(courseData);
        this.courses = this.courses.filter(course => course.Idcourse == id);
        
        const Date = this.date;
        if (this.courses.length > 0) {
          const course = this.courses[0];
          this.courseFormData.Idcourse = course.Idcourse;
          this.courseFormData.idSubject = course.idSubject;
          this.courseFormData.IDTeacher = course.IDTeacher;
          this.courseFormData.units = course.units;
          this.courseFormData.classStart = course.classStart;
          this.courseFormData.classEnd = Date;
          this.courseFormData.Type=course.Type;
          this.courseFormData.Statut=course.Statut;
          this.courseFormData.Date=course.Date;
        }
      }
    });
  }
  
  EndCourse() {
    console.log(this.courseFormData);
    this.studentService.ModifyCourse(this.courseFormData).subscribe((mod: any) => {
      // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
      if (mod) {
        alert('Merci !');
        this.router.navigate(['/feedback', this.courseFormData.Idcourse]);
      } 
      else {
        console.log('La modification a échoué');
      }
    });
  } 


}
