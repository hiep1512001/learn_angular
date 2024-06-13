import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trang1Component } from './trang1.component';

describe('Trang1Component', () => {
  let component: Trang1Component;
  let fixture: ComponentFixture<Trang1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Trang1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trang1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
