import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssGridLayoutOneComponent } from './css-grid-layout-one.component';

describe('CssGridLayoutOneComponent', () => {
  let component: CssGridLayoutOneComponent;
  let fixture: ComponentFixture<CssGridLayoutOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssGridLayoutOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssGridLayoutOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
