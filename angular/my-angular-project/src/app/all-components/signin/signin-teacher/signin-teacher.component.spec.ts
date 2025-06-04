import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninTeacherComponent } from './signin-teacher.component';

describe('SigninTeacherComponent', () => {
  let component: SigninTeacherComponent;
  let fixture: ComponentFixture<SigninTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninTeacherComponent]
    });
    fixture = TestBed.createComponent(SigninTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
