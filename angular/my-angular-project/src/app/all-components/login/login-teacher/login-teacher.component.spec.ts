import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTeacherComponent } from './login-teacher.component';

describe('LoginTeacherComponent', () => {
  let component: LoginTeacherComponent;
  let fixture: ComponentFixture<LoginTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginTeacherComponent]
    });
    fixture = TestBed.createComponent(LoginTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
