import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
import { CoursimOfTeacher } from 'src/app/Models/CoursimOfTeacher';
import { Domaine } from 'src/app/Models/Domaine';
  import { Teacher } from 'src/app/Models/Teacher';
import { StudentService } from 'src/app/Services/student.service';
  import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-coursim-of-teacher',
  templateUrl: './coursim-of-teacher.component.html',
  styleUrls: ['./coursim-of-teacher.component.css']
})
export class CoursimOfTeacherComponent {

  
   newCoursimOfTeacher: CoursimOfTeacher = new CoursimOfTeacher(1,1,'','','',1,'','','','','','','','','');
   Domaines: Domaine| any ;
    teacher: Teacher | any;

    newsearch = {
     
      Matiere: ''

    };
    
    constructor(
      private route: ActivatedRoute,
      private studentService: StudentService,
      private teacherService: TeacherService
    ) {}
  
    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        const teacherData = localStorage.getItem('teacher');
        if (teacherData) {
          this.teacher = JSON.parse(teacherData);
        }
        this.newCoursimOfTeacher.IdTeacher = this.teacher.Idteacher;
  
      });

      this.studentService.GetDomain().subscribe((M) => {
        this.Domaines = M; // Stockez la liste des étudiants dans la variable
      });
  
    }
    
   
    SaveChanges() {
 
      this.newCoursimOfTeacher.Matiere=this.newsearch.Matiere;
      console.log('le new ajouté:',this.newsearch.Matiere);
      console.log(this.newCoursimOfTeacher);
      this.teacherService.addnewCoursimOfTeacher(this.newCoursimOfTeacher).subscribe((mod: any) => {
        if (mod) {
          alert('good add.');
          window.location.reload(); // Actualise la page après l'alerte
        }
         else {
          alert('error.');
        }
      });
    } 
  } 