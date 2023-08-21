import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudVueloComponent } from './crud-vuelo.component';

describe('CrudVueloComponent', () => {
  let component: CrudVueloComponent;
  let fixture: ComponentFixture<CrudVueloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudVueloComponent]
    });
    fixture = TestBed.createComponent(CrudVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
