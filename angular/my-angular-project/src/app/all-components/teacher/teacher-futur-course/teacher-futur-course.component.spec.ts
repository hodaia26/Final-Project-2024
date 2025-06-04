import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFuturCourseComponent } from './teacher-futur-course.component';

describe('TeacherFuturCourseComponent', () => {
  let component: TeacherFuturCourseComponent;
  let fixture: ComponentFixture<TeacherFuturCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherFuturCourseComponent]
    });
    fixture = TestBed.createComponent(TeacherFuturCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
