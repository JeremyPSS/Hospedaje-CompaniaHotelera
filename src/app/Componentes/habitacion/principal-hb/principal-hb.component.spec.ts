import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalHbComponent } from './principal-hb.component';

describe('PrincipalHbComponent', () => {
  let component: PrincipalHbComponent;
  let fixture: ComponentFixture<PrincipalHbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipalHbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalHbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
