import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsComComponent } from './rs-com.component';

describe('RsComComponent', () => {
  let component: RsComComponent;
  let fixture: ComponentFixture<RsComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
