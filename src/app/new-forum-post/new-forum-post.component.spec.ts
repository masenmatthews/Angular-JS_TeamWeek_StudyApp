import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewForumPostComponent } from './new-forum-post.component';

describe('NewForumPostComponent', () => {
  let component: NewForumPostComponent;
  let fixture: ComponentFixture<NewForumPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewForumPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewForumPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
