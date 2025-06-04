import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Classe } from 'src/app/Models/Classe';
import { Student } from 'src/app/Models/Student';
import { StudentService } from 'src/app/Services/student.service';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
//rajouter onit qd y a ongonit
export class SigninComponent implements OnInit {
  students: Student[] = []; // Déclarez une variable pour stocker les étudiants
  // Créez un objet pour stocker les données de l'utilisateur
  newStudent: Student = new Student(1,'','','','','','');
  classes: Classe|any;

  // Déclarez un formulaire réactif pour gérer les entrées de l'utilisateur
  signinform: FormGroup = new FormGroup({
    Idstudent: new FormControl(''),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    Pass: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    NameClass: new FormControl(''),
    // Ajoutez d'autres champs du formulaire si nécessaire
  });

  constructor(
    private studentService: StudentService, 
    private teacherService: TeacherService, 
    private router: Router) { }
    ngOnInit() {

      this.studentService.getClasse().subscribe((niveau) => {
        this.classes = niveau; // Stockez la liste des étudiants dans la variable
      });

     }

  
    SigninStudent() {
    
      this.teacherService.getStudents().subscribe((res) => {
      this.students = res; // Stockez la liste complète des étudiants dans la variable
      const studentCount = this.students.length; // Compter le nombre d'étudiants
      //  autres:    console.log(`Nombre d'étudiants :`, studentCount);
      console.log(`Nombre d'étudiants : ${studentCount}`);
      // Affectez la nouvelle valeur de Idstudent
      this.newStudent.Idstudent = studentCount + 1;
      console.log(this.newStudent);
      });
    
     
      
      // Envoyez les données au service
      this.studentService.SigninStudent(this.newStudent).subscribe((response: any) => {
        console.log(this.newStudent);
        // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
        if (response) {
          alert('Inscription réussie. Bienvenue ! ');
          // Redirigez l'utilisateur vers la page de profil
          this.router.navigate(['/login-student']);
        } else {
          // Gérez le cas où l'inscription a échoué (par exemple, affichez un message d'erreur)
          console.log('L\'inscription a échoué');
          alert('oups ');

        }
      });
    
    }
  
  
  
}
