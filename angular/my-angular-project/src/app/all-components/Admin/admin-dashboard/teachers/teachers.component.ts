import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/Models/Teacher';
import { StudentService } from 'src/app/Services/student.service';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  
  professeurs: Teacher[] = []; // Déclarez une variable pour stocker les étudiants
  professeur: Teacher | any;
  teacherFormData: Teacher = new Teacher(0,'','','','','','','','','','','','','');
  constructor(private teacherService: TeacherService,private studentService: StudentService) {}

  ngOnInit() {
      this.studentService.getTeachers().subscribe((mus) => {
      this.professeurs = mus; // Stockez la liste des étudiants dans la variable
      this.professeurs = this.professeurs.filter(professeur => professeur.Statut === '1' );

    });
  }

  DeleteTeacher(Idteacher: number){
    this.professeur = this.professeurs.filter(professeur => professeur.Idteacher === Idteacher );
    {
      const prof = this.professeur[0];
      this.teacherFormData.Idteacher = prof.Idteacher;
      this.teacherFormData.adresse = prof.adresse;
      this.teacherFormData.Ville = prof.Ville;
      this.teacherFormData.Genre = prof.Genre;

      this.teacherFormData.name = prof.name;
      this.teacherFormData.lastName = prof.lastName;
      this.teacherFormData.NameClass = prof.NameClass;
      this.teacherFormData.email = prof.email;
      this.teacherFormData.pass = prof.pass;
      this.teacherFormData.Description = prof.Description;
      this.teacherFormData.Prix = prof.Prix;
      this.teacherFormData.Image = prof.Image;
      this.teacherFormData.Statut = "2";
    }
    this.teacherService.ModifyTeacher(this.teacherFormData).subscribe((mod: any) => {
      // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
      if (mod) {
        alert('Teacher delete.');
        window.location.reload(); // Actualise la page après l'alerte
      } 
      else {
        console.log('La suppression a échoué');
      }
    });

  }
}