import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHbComponent } from './listar-hb.component';

describe('ListarHbComponent', () => {
  let component: ListarHbComponent;
  let fixture: ComponentFixture<ListarHbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarHbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarHbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
