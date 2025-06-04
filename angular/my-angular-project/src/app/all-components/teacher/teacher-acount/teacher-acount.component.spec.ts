import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAcountComponent } from './teacher-acount.component';

describe('TeacherAcountComponent', () => {
  let component: TeacherAcountComponent;
  let fixture: ComponentFixture<TeacherAcountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherAcountComponent]
    });
    fixture = TestBed.createComponent(TeacherAcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
