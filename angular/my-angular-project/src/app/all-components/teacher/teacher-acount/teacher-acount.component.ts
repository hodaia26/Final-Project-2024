import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/Models/Teacher';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Location } from '@angular/common';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-teacher-acount',
  templateUrl: './teacher-acount.component.html',
  styleUrls: ['./teacher-acount.component.css']
})
export class TeacherAcountComponent implements OnInit {
  ModifyTeacher: Teacher = new Teacher(1,'','','','','','','','','','','','','');
  passwordVisible = false;

  modifyteacherform: FormGroup = new FormGroup({
    Idstudent: new FormControl(''),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    Pass: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    NameClass: new FormControl(''),
  });

  teachers: Teacher[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private studentService: StudentService,
    private router: Router,
    private teacherService: TeacherService
  ) {}

  ngOnInit() {

    this.route.params.subscribe(params => {
      const id = params['id'];
      
      this.studentService.getTeachers().subscribe((prof) => {
        this.teachers = prof; // Stockez la liste des étudiants dans la variable
        this.teachers = this.teachers.filter(teacher => teacher.Idteacher == id);
        console.log(this.teachers);
        if (this.teachers.length > 0) {
          const teacher = this.teachers[0];

      this.ModifyTeacher.Idteacher = teacher.Idteacher;
      this.ModifyTeacher.adresse = teacher.adresse;
      this.ModifyTeacher.name = teacher.name;
      this.ModifyTeacher.lastName = teacher.lastName;
      this.ModifyTeacher.NameClass = teacher.NameClass;
      this.ModifyTeacher.email = teacher.email;
      this.ModifyTeacher.pass = teacher.pass; 
    //  this.ModifyTeacher.Matiere = teacher.Matiere;
      this.ModifyTeacher.Genre = teacher.Genre;
      this.ModifyTeacher.Description = teacher.Description;
      this.ModifyTeacher.Ville = teacher.Ville;
      this.ModifyTeacher.Prix = teacher.Prix;
      this.ModifyTeacher.Statut = teacher.Statut;  
      this.ModifyTeacher.Image = teacher.Image;  
    }
  });
  
})

  }
  
  handleFileInput(event: any) {
    const file = event.target.files[0];

    if (file) {
        // Récupérer le nom du fichier
        const fileName = file.name;

        // Faites ce que vous voulez avec le nom du fichier
        console.log("Nom du fichier sélectionné :", fileName);

    this.ModifyTeacher.Image='../assets/images/' + fileName ;
  }
}
togglePasswordVisibility() {
  this.passwordVisible = !this.passwordVisible;
}

  SaveChanges() {

    console.log(this.ModifyTeacher);
    this.teacherService.ModifyTeacher(this.ModifyTeacher).subscribe((mod: any) => {
      if (mod) {
        alert('Modification réussie.');
        window.location.reload(); // Actualise la page après l'alerte
      } else {
        alert('La modification a échoué.');
      }
    });
  } 
}
