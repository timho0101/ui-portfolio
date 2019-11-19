import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOfFlamesComponent } from './book-of-flames.component';

describe('BookOfFlamesComponent', () => {
  let component: BookOfFlamesComponent;
  let fixture: ComponentFixture<BookOfFlamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookOfFlamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOfFlamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
