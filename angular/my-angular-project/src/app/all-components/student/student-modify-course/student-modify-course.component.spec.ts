import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentModifyCourseComponent } from './student-modify-course.component';

describe('StudentModifyCourseComponent', () => {
  let component: StudentModifyCourseComponent;
  let fixture: ComponentFixture<StudentModifyCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentModifyCourseComponent]
    });
    fixture = TestBed.createComponent(StudentModifyCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
