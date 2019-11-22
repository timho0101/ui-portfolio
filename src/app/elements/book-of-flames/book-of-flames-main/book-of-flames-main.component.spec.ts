import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOfFlamesMainComponent } from './book-of-flames-main.component';

describe('BookOfFlamesMainComponent', () => {
  let component: BookOfFlamesMainComponent;
  let fixture: ComponentFixture<BookOfFlamesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookOfFlamesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOfFlamesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
