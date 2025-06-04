import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/Student';
import { Teacher } from 'src/app/Models/Teacher';
import { Ville } from 'src/app/Models/Ville';
import { StudentService } from 'src/app/Services/student.service';
import { TeacherService } from 'src/app/Services/teacher.service';
@Component({
  selector: 'app-signin-teacher',
  templateUrl: './signin-teacher.component.html',
  styleUrls: ['./signin-teacher.component.css']
})
export class SigninTeacherComponent implements OnInit {
 
  
   teachers: Teacher[] = []; // Déclarez une variable pour stocker les étudiants
    // Créez un objet pour stocker les données de l'utilisateur
    newTeacher: Teacher = new Teacher(0,'','','','','','','','','','','','','');
    villes: Ville[]=[];
    newtown = { 
      ville: '', 
    };
   // signinform: FormGroup = new FormGroup({
     // Idteacher: new FormControl(''),
   //   firstName: new FormControl('', [Validators.required]),
    //  lastName: new FormControl('', [Validators.required]),
    //  email: new FormControl('', [Validators.required, Validators.email]),
    //  Pass: new FormControl('', [Validators.required]),
     // adresse: new FormControl('', [Validators.required]),
     // NameClass: new FormControl(''),
      // Ajoutez d'autres champs du formulaire si nécessaire
   // });
    
    constructor(
      private studentService: StudentService, 
      private teacherService: TeacherService, 
      private router: Router) { }
      ngOnInit() {


        this.teacherService.GetVilles().subscribe((pes) => {
          this.villes = pes; // Stockez la liste complète des étudiants dans la variable
          console.log(this.villes);
        });
     
        
      }
    
      SigninTeacher(){
        this.studentService.getTeachers().subscribe((res) => {
        this.teachers = res; // Stockez la liste complète des prof dans la variable
        const teacherCount = this.teachers.length; // Compter le nombre de prof
        console.log(`Nombre de prof : ${teacherCount}`);
        // Affectez la nouvelle valeur de Idstudent
        this.newTeacher.Idteacher = teacherCount + 1;
        console.log(this.newTeacher);
        this.newTeacher.Statut = "0";
        console.log(this.newtown.ville);
       this.newTeacher.Ville=this.newtown.ville;
      
        // Envoyez les données au service
        this.teacherService.SigninTeacher(this.newTeacher).subscribe((response: any) => {
          // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
          if (response) {
            alert('welcome new user 🙌! ');
            // Redirigez l'utilisateur vers la page de profil
            this.router.navigate(['/login-teacher']);
          } else {
            // Gérez le cas où l'inscription a échoué (par exemple, affichez un message d'erreur)
            console.log('oups, error');
          }
        });
      });
      }
    
    }
    

