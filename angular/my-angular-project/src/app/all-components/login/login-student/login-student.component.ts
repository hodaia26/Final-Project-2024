import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/Student';
import { StudentService } from 'src/app/Services/student.service';


@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent {


  email = "" 
  Pass = "" 

  constructor(private ser: StudentService,private router: Router) {
   
  }
loginform=new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    Pass: new FormControl('',Validators.compose([Validators.required]))


  })
signInFlag = true;
newUser: Student =new Student(1,'','','','','','');


  LoginStudent() {
    console.log('email of user:', this.newUser.email);
    var email = this.newUser.email;
    var Pass = this.newUser.Pass
    this.ser.LoginStudent(email, Pass).subscribe(res => 
      {
        if (res == null) {
          console.log('existe pas')
          alert("you are not exists!")
          this.router.navigate(['/signin']); 
        }
        else {
          localStorage.setItem('student', JSON.stringify(res))
          console.log('existe')
          alert(res.name)
          this.router.navigate(['/profilStu',res.Idstudent]);
          alert(res.name)

          //לנווט לעמוד לקוח
        }
      }
    )
  }
}
