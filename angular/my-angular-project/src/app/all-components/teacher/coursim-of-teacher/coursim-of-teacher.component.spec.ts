import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursimOfTeacherComponent } from './coursim-of-teacher.component';

describe('CoursimOfTeacherComponent', () => {
  let component: CoursimOfTeacherComponent;
  let fixture: ComponentFixture<CoursimOfTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursimOfTeacherComponent]
    });
    fixture = TestBed.createComponent(CoursimOfTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
