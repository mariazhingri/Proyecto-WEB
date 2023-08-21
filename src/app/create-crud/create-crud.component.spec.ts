import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCrudComponent } from './create-crud.component';

describe('CreateCrudComponent', () => {
  let component: CreateCrudComponent;
  let fixture: ComponentFixture<CreateCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCrudComponent]
    });
    fixture = TestBed.createComponent(CreateCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
