import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalHabitacionComponent } from './principal-habitacion.component';

describe('PrincipalHabitacionComponent', () => {
  let component: PrincipalHabitacionComponent;
  let fixture: ComponentFixture<PrincipalHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipalHabitacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
