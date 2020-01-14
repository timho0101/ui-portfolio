import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssGridLayoutComponent } from './css-grid-layout.component';

describe('CssGridLayoutComponent', () => {
  let component: CssGridLayoutComponent;
  let fixture: ComponentFixture<CssGridLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssGridLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssGridLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
