import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOfWatersComponent } from './book-of-waters.component';

describe('BookOfWatersComponent', () => {
  let component: BookOfWatersComponent;
  let fixture: ComponentFixture<BookOfWatersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookOfWatersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOfWatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
