import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFuturCourseComponent } from './student-futur-course.component';

describe('StudentFuturCourseComponent', () => {
  let component: StudentFuturCourseComponent;
  let fixture: ComponentFixture<StudentFuturCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentFuturCourseComponent]
    });
    fixture = TestBed.createComponent(StudentFuturCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
