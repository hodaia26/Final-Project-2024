import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from 'src/app/Models/Feedback';
import { Student } from 'src/app/Models/Student';
import { Teacher } from 'src/app/Models/Teacher';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  student: Student | any; 
  teacher: Teacher | any;
  feedbacks: Feedback[] = [];
  newfeedback: Feedback = new Feedback(1,1,1,'','');
  feedbackform: FormGroup = new FormGroup({
    IdfeedBack: new FormControl(''),
    idStudent: new FormControl(''),
    idTeacher: new FormControl(''),
    point: new FormControl(''),
    remark: new FormControl(''),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    
  }

  Envoyer(){
    this.studentService.getFeedback().subscribe((res) => {
      this.feedbacks = res; // Stockez la liste complète des étudiants dans la variable
      const feedbacksCount = this.feedbacks.length; // Compter le nombre d'étudiants
      console.log(`Nombre de feedbacks : ${feedbacksCount}`);
      // Affectez la nouvelle valeur de Idstudent
      this.newfeedback.IdfeedBack = feedbacksCount + 1;
      console.log(this.newfeedback);
      });

      const studentData = localStorage.getItem('student');
      if (studentData) {
        // Analysez les données JSON
        this.student = JSON.parse(studentData);
        this.newfeedback.idStudent = this.student.Idstudent;
      }

      const teacherData = localStorage.getItem('teacher');
      if (teacherData) {
        // Analysez les données JSON
        this.teacher = JSON.parse(teacherData);
        this.newfeedback.idTeacher = this.teacher.Idteacher;
      }

      // Envoyez les données au service
    this.studentService.CreateFeedback(this.newfeedback).subscribe((response: any) => {
      // Supposons que le serveur renvoie une réponse avec les détails de l'utilisateur
      if (response) {
        alert('thank you! ');
        // Redirigez l'utilisateur vers la page de profil
        return this.return();
      } else {
        // Gérez le cas où l'inscription a échoué (par exemple, affichez un message d'erreur)
        console.log('erreur');
      }
    });
  }

  return() {
    const studentData = localStorage.getItem('student');
    if (studentData) {
      // Analysez les données JSON
      this.student = JSON.parse(studentData);
      
      this.router.navigate(['/student-historic', this.student.Idstudent]);
    }
  }

}
