import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCycleComponentComponent } from './other-cycle-component.component';

describe('OtherCycleComponentComponent', () => {
  let component: OtherCycleComponentComponent;
  let fixture: ComponentFixture<OtherCycleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtherCycleComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCycleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
