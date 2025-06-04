import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeachersComponent } from './my-teachers.component';

describe('MyTeachersComponent', () => {
  let component: MyTeachersComponent;
  let fixture: ComponentFixture<MyTeachersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTeachersComponent]
    });
    fixture = TestBed.createComponent(MyTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
