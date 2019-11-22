import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleLazyLoadingComponent } from './double-lazy-loading.component';

describe('DoubleLazyLoadingComponent', () => {
  let component: DoubleLazyLoadingComponent;
  let fixture: ComponentFixture<DoubleLazyLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleLazyLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
