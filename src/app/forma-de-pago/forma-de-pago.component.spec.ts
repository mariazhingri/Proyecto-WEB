import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaDePagoComponent } from './forma-de-pago.component';

describe('FormaDePagoComponent', () => {
  let component: FormaDePagoComponent;
  let fixture: ComponentFixture<FormaDePagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormaDePagoComponent]
    });
    fixture = TestBed.createComponent(FormaDePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
