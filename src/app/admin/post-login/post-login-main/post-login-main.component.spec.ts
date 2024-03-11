import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLoginMainComponent } from './post-login-main.component';

describe('PostLoginMainComponent', () => {
  let component: PostLoginMainComponent;
  let fixture: ComponentFixture<PostLoginMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLoginMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostLoginMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
