import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { th } from 'date-fns/locale';
import { Classe } from 'src/app/Models/Classe';
import { Domaine } from 'src/app/Models/Domaine';
import { Genre } from 'src/app/Models/Genre';
import { Student } from 'src/app/Models/Student';
import { Teacher } from 'src/app/Models/Teacher';
import { Ville } from 'src/app/Models/Ville';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-recherche',
  templateUrl: './student-recherche.component.html',
  styleUrls: ['./student-recherche.component.css']
})
export class StudentRechercheComponent implements OnInit {
  student: Student | null = null; // Déclarez la propriété 'student' ici
  classes: Classe | any ;
  teachers: Teacher | any ;
  genres: Genre | any ;
  Villes: Ville | any ;
  Domaines: Domaine| any ;

  newsearch = {
    NameClass: '',
    Matiere: '',
    Ville: '',
    Genre: '',
  };
  

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Obtenez les données du student à partir du localStorage avec la clé 'student'
      const studentData = localStorage.getItem('student');
      if (studentData) {
        // Analysez les données JSON
        this.student = JSON.parse(studentData);
        console.log(this.student);
      }
    });
  
    this.studentService.getClasse().subscribe((niveau) => {
      this.classes = niveau; // Stockez la liste des étudiants dans la variable
    });

    this.studentService.getTeachers().subscribe((prof) => {
      this.teachers = prof; // Stockez la liste des étudiants dans la variable
    });


    this.studentService.GetGenre().subscribe((G) => {
      this.genres = G; // Stockez la liste des étudiants dans la variable
    });

    this.studentService.GetVille().subscribe((V) => {
      this.Villes = V; // Stockez la liste des étudiants dans la variable
    });

    this.studentService.GetDomain().subscribe((M) => {
      this.Domaines = M; // Stockez la liste des étudiants dans la variable
    });
  }

  rechercher(){
   console.log(this.newsearch)
   this.studentService.SearchTeachers(this.newsearch.NameClass, this.newsearch.Ville,this.newsearch.Matiere,this.newsearch.Genre)
   .subscribe((mod: any) => {
    // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
    if (mod) {
      alert("arrive")
      var resultat=mod;
      localStorage.setItem('result', JSON.stringify(resultat))
      console.log('resultat',resultat);
      this.router.navigate(['/result-search']);
    } 
    else {
      alert('La modification a échoué.');
    }
  });
    
  }
  
}