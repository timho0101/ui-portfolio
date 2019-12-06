import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitBestPraticeComponent } from './git-best-pratice.component';

describe('GitBestPraticeComponent', () => {
  let component: GitBestPraticeComponent;
  let fixture: ComponentFixture<GitBestPraticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitBestPraticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitBestPraticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
