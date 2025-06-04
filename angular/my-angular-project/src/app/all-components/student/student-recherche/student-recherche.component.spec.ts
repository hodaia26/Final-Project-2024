import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRechercheComponent } from './student-recherche.component';

describe('StudentRechercheComponent', () => {
  let component: StudentRechercheComponent;
  let fixture: ComponentFixture<StudentRechercheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentRechercheComponent]
    });
    fixture = TestBed.createComponent(StudentRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
