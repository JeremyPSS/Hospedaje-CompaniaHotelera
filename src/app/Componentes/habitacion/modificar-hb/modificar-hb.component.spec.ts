import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarHbComponent } from './modificar-hb.component';

describe('ModificarHbComponent', () => {
  let component: ModificarHbComponent;
  let fixture: ComponentFixture<ModificarHbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarHbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarHbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
