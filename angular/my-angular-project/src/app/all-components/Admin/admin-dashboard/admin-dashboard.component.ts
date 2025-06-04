import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { Teacher } from 'src/app/Models/Teacher';
  import { StudentService } from 'src/app/Services/student.service';
  import { TeacherService } from 'src/app/Services/teacher.service';
  
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {


  
  
  
   teachers: Teacher [] = [];// Déclarez une variable pour stocker les étudiants
    teacher: Teacher | any;
    proffs: Teacher[] = [];
    teacherFormData: Teacher = new Teacher(1,'','','','','','','','','','','','','');
  
    constructor(
      private route: ActivatedRoute,
      private studentService: StudentService,
      private teacherService: TeacherService) 
      {}
      
    ngOnInit() {
        this.studentService.getTeachers().subscribe((prof) => {
          this.teachers = prof; // Stockez la liste des cours dans la variable
          this.teachers = this.teachers.filter(teacher => teacher.Statut === "0");
        });
    }
  
    Accept(Idteacher: number){
      this.studentService.getTeachers().subscribe((prof) => {
        this.proffs = prof; // Stockez la liste des cours dans la variable
        this.proffs = this.proffs.filter(proff => proff.Idteacher === Idteacher );
        {
        const teacher = this.proffs[0];
        this.teacherFormData.Idteacher = teacher.Idteacher;
        this.teacherFormData.adresse = teacher.adresse;
        this.teacherFormData.name = teacher.name;
        this.teacherFormData.lastName = teacher.lastName;
        this.teacherFormData.NameClass = teacher.NameClass;
        this.teacherFormData.email = teacher.email;
        this.teacherFormData.pass = teacher.pass; 
       // this.teacherFormData.Matiere = teacher.Matiere;
        this.teacherFormData.Genre = teacher.Genre;
        this.teacherFormData.Description = teacher.Description;
        this.teacherFormData.Ville = teacher.Ville;
        this.teacherFormData.Prix = teacher.Prix;
        this.teacherFormData.Image = teacher.Image;  
        this.teacherFormData.Statut = "1";//le teacher est accepte /0=>ps encore /2=>delete
        }
     
  
      this.teacherService.ModifyTeacher(this.teacherFormData).subscribe((mod: any) => {
        if (mod) {
          window.location.reload();
          alert('Professeur accepté, Voir dans la liste des professeurs.');
         
    //faire actualiser la page
        } 
       
      });
     });
    }
  
    Refuse(Idteacher: number){
      this.studentService.getTeachers().subscribe((prof) => {
        this.teachers = prof; // Stockez la liste des cours dans la variable
        this.teacher = this.teachers.filter(teacher => teacher.Idteacher === Idteacher );
        {
          const teacher = this.teacher[0];
          this.teacherFormData.Idteacher = teacher.Idteacher;
          this.teacherFormData.adresse = teacher.adresse;
          this.teacherFormData.name = teacher.name;
          this.teacherFormData.lastName = teacher.lastName;
          this.teacherFormData.NameClass = teacher.NameClass;
          this.teacherFormData.email = teacher.email;
          this.teacherFormData.pass = teacher.pass; 
          this.teacherFormData.Matiere = teacher.Matiere;
          this.teacherFormData.Genre = teacher.Genre;
          this.teacherFormData.Description = teacher.Description;
          this.teacherFormData.Ville = teacher.Ville;
          this.teacherFormData.Prix = teacher.Prix;
          this.teacherFormData.Image = teacher.Image;  
          this.teacherFormData.Statut = "2";
        }
      });
  
      this.teacherService.DeleteTeacher(this.teacherFormData).subscribe((mod: any) => {
        // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
        if (mod) {
          alert('Teacher delete.');
          window.location.reload(); 
        } 
        else {
          console.log('La suppression a échoué');
        }
      });
    }
  }
  
  

