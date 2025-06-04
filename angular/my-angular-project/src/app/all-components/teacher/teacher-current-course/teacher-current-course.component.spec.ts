import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCurrentCourseComponent } from './teacher-current-course.component';

describe('TeacherCurrentCourseComponent', () => {
  let component: TeacherCurrentCourseComponent;
  let fixture: ComponentFixture<TeacherCurrentCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherCurrentCourseComponent]
    });
    fixture = TestBed.createComponent(TeacherCurrentCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
