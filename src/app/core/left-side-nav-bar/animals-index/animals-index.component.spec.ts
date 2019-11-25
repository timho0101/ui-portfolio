import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsIndexComponent } from './animals-index.component';

describe('AnimalsIndexComponent', () => {
  let component: AnimalsIndexComponent;
  let fixture: ComponentFixture<AnimalsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
