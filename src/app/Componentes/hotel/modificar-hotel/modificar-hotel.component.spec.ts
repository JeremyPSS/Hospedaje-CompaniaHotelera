import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarHotelComponent } from './modificar-hotel.component';

describe('ModificarHotelComponent', () => {
  let component: ModificarHotelComponent;
  let fixture: ComponentFixture<ModificarHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarHotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
