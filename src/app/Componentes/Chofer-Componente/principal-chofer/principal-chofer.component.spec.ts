import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalChoferComponent } from './principal-chofer.component';

describe('PrincipalChoferComponent', () => {
  let component: PrincipalChoferComponent;
  let fixture: ComponentFixture<PrincipalChoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipalChoferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
