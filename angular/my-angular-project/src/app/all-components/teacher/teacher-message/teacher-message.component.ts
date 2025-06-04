import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/Models/Student';
import { Teacher } from 'src/app/Models/Teacher';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Message } from 'src/app/Models/Message';

@Component({
  selector: 'app-teacher-message',
  templateUrl: './teacher-message.component.html',
  styleUrls: ['./teacher-message.component.css']
})
export class TeacherMessageComponent {


  student: Student | any; // Déclarez la propriété 'student' ici
  teacher: Teacher | any;
  messages: Message[] = [];
  Smessages: Message[] = [];
  date = new Date();
  Time = new Date().toLocaleTimeString();
  newmessage: Message = new Message (1,'',1,1,'','','','');

  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
    private teacherService: TeacherService
  ) { }

  ngOnInit(){
    const teacherData = localStorage.getItem('teacher');
      if (teacherData) {
        // Analysez les données JSON
        this.teacher = JSON.parse(teacherData);
      }

    const studentData = localStorage.getItem('student');
      if (studentData) {
        // Analysez les données JSON
        this.student = JSON.parse(studentData);
      }

      this.studentService.GetMessage().subscribe((msg) => {
        this.messages = msg; // Stockez la liste complète des étudiants dans la variable
        this.Smessages = this.messages.filter(message => (message.IdFrom === this.teacher.Idteacher && message.IdTo === this.student.Idstudent) || (message.IdFrom === this.student.Idstudent && message.IdTo === this.teacher.Idteacher));
        
        
      });
      
  }

  sendMessage(){
    const teacherData = localStorage.getItem('teacher');
      if (teacherData) {
        // Analysez les données JSON
        this.teacher = JSON.parse(teacherData);
      }

    const studentData = localStorage.getItem('student');
      if (studentData) {
        // Analysez les données JSON
        this.student = JSON.parse(studentData);
      }
      this.studentService.GetMessage().subscribe((msg) => {
        this.messages = msg; // Stockez la liste complète des étudiants dans la variable
      const msgCount = this.messages.length; // Compter le nombre d'étudiants
      // Affectez la nouvelle valeur de Idcourse
      this.newmessage.IdMessage = msgCount + 1;
      this.newmessage.TypeFrom = 'teacher' ;
      this.newmessage.IdFrom = this.teacher.Idteacher ;
      this.newmessage.IdTo = this.student.Idstudent;
  
      
      });

      
 if(this.newmessage.Texte!==""){

 
    this.studentService.AddMessage(this.newmessage).subscribe((response: any) => {


    
  
      console.log(this.newmessage);
      // Gérez le cas où l'inscription a échoué (par exemple, affichez un message d'erreur)
      if (response) {
        console.log('envoie réussi');
        window.location.reload(); // Actualise la page après l'alerte

      } else {
        // Gérez le cas où l'inscription a échoué (par exemple, affichez un message d'erreur)
        console.log('Réssayez');
      }
    });

  
  }
  else{
    alert('you must write something')
    console.log('oups');
  }
}


}