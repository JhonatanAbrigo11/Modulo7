import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTitulos } from './student-titulos';

describe('StudentTitulos', () => {
  let component: StudentTitulos;
  let fixture: ComponentFixture<StudentTitulos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentTitulos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentTitulos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
