import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/Models/Teacher';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent  implements OnInit{
  teachers: Teacher[] = [];
  teacher: Teacher | any;
  ResultSearch = {
    adresse: '',
    NameClass: '',
    Ville: '',
    Genre: '',
    Matiere:'',
   
    //typeCourse: '',
  };

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) { }
  
  ngOnInit() {
      
  
   
    const result = localStorage.getItem('result');
      if (result) {
        // Analysez les données JSON
        this.teachers = JSON.parse(result);
       
      
        }
        console.log(this.teachers);
      
  }

  showTeacherDetails(teacher: any) {
    localStorage.setItem('teacher', JSON.stringify(teacher))
    this.router.navigate(['/info-teacher', teacher.Idteacher]);
  }
}
 


