import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/Models/Teacher';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.css']
})
export class LoginTeacherComponent {
  email = "" 
  Pass = ""

  constructor(private ser: TeacherService,private router: Router) {
    this.loginTeacherform=new FormGroup({
          email: new FormControl('', [Validators.required, Validators.email]),
          Pass:new FormControl('',Validators.compose([Validators.required]))

  
        })
  }

loginTeacherform: FormGroup;
signInFlag = true;
newUser: Teacher =new Teacher(1,'','','','','','','','','','','','','');


LoginTeacher() {
  var email = this.newUser.email;
  var pass = this.newUser.pass;
  this.ser.LoginTeacher(email, pass).subscribe(res => 
    {
      console.log('statut du prof',res.Statut);

      if (res === null) {
        // Afficher une alerte à l'utilisateur indiquant que l'authentification a échoué
        alert("L'authentification a échoué. Veuillez vérifier vos informations d'identification.");
      }
     else {
    console.log('statut du prof',res.Statut);
    if (res.Statut === "2") {
      alert("Your account was deleted!");
    }
     else if (res.Statut === "1") {
      localStorage.setItem('teacher', JSON.stringify(res));
      alert(res.name);
      this.router.navigate(['/teacher-dashboard', res.Idteacher]);
    } 
   
    else if (res.Statut === "0") {
      alert("You are not accepted yet!");
    }
  }
    }
  )

  }

}
