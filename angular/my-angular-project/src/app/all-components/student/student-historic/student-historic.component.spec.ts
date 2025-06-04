import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHistoricComponent } from './student-historic.component';

describe('StudentHistoricComponent', () => {
  let component: StudentHistoricComponent;
  let fixture: ComponentFixture<StudentHistoricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentHistoricComponent]
    });
    fixture = TestBed.createComponent(StudentHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
