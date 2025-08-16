import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StundentView } from './stundent-view';

describe('StundentView', () => {
  let component: StundentView;
  let fixture: ComponentFixture<StundentView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StundentView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StundentView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
