import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void { }

  selectRole(role: string): void {
    if (role === 'teacher') {
      this.router.navigate(['/login-teacher']);
    } else if (role === 'student') {
      this.router.navigate(['/login-student']);
    }
  }
}