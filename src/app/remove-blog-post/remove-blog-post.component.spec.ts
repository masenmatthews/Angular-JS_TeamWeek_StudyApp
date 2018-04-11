import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBlogPostComponent } from './remove-blog-post.component';

describe('RemoveBlogPostComponent', () => {
  let component: RemoveBlogPostComponent;
  let fixture: ComponentFixture<RemoveBlogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveBlogPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
