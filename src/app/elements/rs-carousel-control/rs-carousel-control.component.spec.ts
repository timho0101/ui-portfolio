import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsCarouselControlComponent } from './rs-carousel-control.component';

describe('RsCarouselControlComponent', () => {
  let component: RsCarouselControlComponent;
  let fixture: ComponentFixture<RsCarouselControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsCarouselControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsCarouselControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
