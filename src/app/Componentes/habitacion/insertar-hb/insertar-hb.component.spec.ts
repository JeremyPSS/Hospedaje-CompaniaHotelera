import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarHbComponent } from './insertar-hb.component';

describe('InsertarHbComponent', () => {
  let component: InsertarHbComponent;
  let fixture: ComponentFixture<InsertarHbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertarHbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertarHbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
