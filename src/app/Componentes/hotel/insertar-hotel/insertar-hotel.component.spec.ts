import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarHotelComponent } from './insertar-hotel.component';

describe('InsertarHotelComponent', () => {
  let component: InsertarHotelComponent;
  let fixture: ComponentFixture<InsertarHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertarHotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertarHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
