import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/Models/Student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-acount',
  templateUrl: './student-acount.component.html',
  styleUrls: ['./student-acount.component.css']
})
export class StudentAcountComponent implements OnInit {
  student: Student | any ; // Déclarez la propriété 'student' ici
  ModifyStudent: Student = new Student(0,'','','','','','');
  passwordVisible = false;

// Déclarez un formulaire réactif pour gérer les entrées de l'utilisateur
modifystudentform: FormGroup = new FormGroup({
  Idstudent: new FormControl(''),
  firstName: new FormControl('', [Validators.required]),
  lastName: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
  Pass: new FormControl('', [Validators.required]),
  adresse: new FormControl('', [Validators.required]),
  NameClass: new FormControl(''),
});

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {



    this.route.params.subscribe(params => {
      const id = params['id'];
      // Obtenez les données du student à partir du localStorage avec la clé 'student'
      const studentData = localStorage.getItem('student');
      if (studentData) {
        // Analysez les données JSON
        this.student = JSON.parse(studentData);
      }
        const student = this.student;
        this.ModifyStudent.Idstudent = student.Idstudent;
        this.ModifyStudent.adresse = student.adresse;
        this.ModifyStudent.name = student.name;
        this.ModifyStudent.lastName = student.lastName;
        this.ModifyStudent.NameClass = student.NameClass;
        this.ModifyStudent.email = student.email;
        this.ModifyStudent.Pass = student.Pass;
      
    });
    
  }
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  SaveChanges(){

    this.studentService.ModifyStudent(this.ModifyStudent).subscribe((mod: any) => {
      // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
      if (mod) {
        alert('Modification réussie.');
        window.location.reload(); 
        
      } 
      else {
        alert('La modification a échoué.');
        window.location.reload(); 
      }
    });
  } 
}