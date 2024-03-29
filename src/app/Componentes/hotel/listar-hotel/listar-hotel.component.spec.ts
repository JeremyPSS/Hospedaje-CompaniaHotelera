import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHotelComponent } from './listar-hotel.component';

describe('ListarHotelComponent', () => {
  let component: ListarHotelComponent;
  let fixture: ComponentFixture<ListarHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarHotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
