import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableVacationsComponent } from './available-vacations.component';

describe('AvailableVacationsComponent', () => {
  let component: AvailableVacationsComponent;
  let fixture: ComponentFixture<AvailableVacationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableVacationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableVacationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
