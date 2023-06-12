import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasYClaseComponent } from './personas-y-clase.component';

describe('PersonasYClaseComponent', () => {
  let component: PersonasYClaseComponent;
  let fixture: ComponentFixture<PersonasYClaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonasYClaseComponent]
    });
    fixture = TestBed.createComponent(PersonasYClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
