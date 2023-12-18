import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbComponent1Component } from './dumb-component-1.component';

describe('DumbComponent1Component', () => {
  let component: DumbComponent1Component;
  let fixture: ComponentFixture<DumbComponent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DumbComponent1Component]
    });
    fixture = TestBed.createComponent(DumbComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
