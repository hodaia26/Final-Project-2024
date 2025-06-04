import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherHistoricComponent } from './teacher-historic.component';

describe('TeacherHistoricComponent', () => {
  let component: TeacherHistoricComponent;
  let fixture: ComponentFixture<TeacherHistoricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherHistoricComponent]
    });
    fixture = TestBed.createComponent(TeacherHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
