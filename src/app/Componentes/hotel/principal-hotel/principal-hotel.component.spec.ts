import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalHotelComponent } from './principal-hotel.component';

describe('PrincipalHotelComponent', () => {
  let component: PrincipalHotelComponent;
  let fixture: ComponentFixture<PrincipalHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipalHotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
