import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsComNotesComponent } from './rs-com-notes.component';

describe('RsComNotesComponent', () => {
  let component: RsComNotesComponent;
  let fixture: ComponentFixture<RsComNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsComNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsComNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
