import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsValidateComponent } from './errors-validate.component';

describe('ErrorsValidateComponent', () => {
  let component: ErrorsValidateComponent;
  let fixture: ComponentFixture<ErrorsValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorsValidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorsValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
