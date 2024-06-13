import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewToComponentComponent } from './view-to-component.component';

describe('ViewToComponentComponent', () => {
  let component: ViewToComponentComponent;
  let fixture: ComponentFixture<ViewToComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewToComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewToComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
