import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAcountComponent } from './student-acount.component';

describe('StudentAcountComponent', () => {
  let component: StudentAcountComponent;
  let fixture: ComponentFixture<StudentAcountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentAcountComponent]
    });
    fixture = TestBed.createComponent(StudentAcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
