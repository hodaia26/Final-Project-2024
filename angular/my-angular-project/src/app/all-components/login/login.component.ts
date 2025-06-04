import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/Student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = "" 
  Pass = ""

  constructor(private ser: StudentService,private router: Router) {
  
    this.newUser = new Student(1, '', '', '', '', '', '');
  }
loginform: FormGroup = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  Pass: new FormControl('', [Validators.required, Validators.minLength(6)])
});;
signInFlag = true;
newUser: Student =new Student(1,'','','','','','');


Login() {
  console.log('email of user:', this.newUser.email);
  console.log('password of user:', this.newUser.Pass);

  if(this.newUser.email=="" && this.newUser.Pass==""){
    this.router.navigate(['/login']);
  }
  else if(this.newUser.email=="hodaiaadmin@gmail.com" && this.newUser.Pass=="admin123"){
    this.router.navigate(['/admin-dashboard']);
  }
  else if(this.newUser.email=="naomieadmin@gmail.com" && this.newUser.Pass=="admin123"){
    this.router.navigate(['/admin-dashboard']);
  }
  else{
    this.router.navigate(['/login']);
  }



    
    
  }



}
