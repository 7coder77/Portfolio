import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencePublicComponent } from './experience-public.component';

describe('ExperiencePublicComponent', () => {
  let component: ExperiencePublicComponent;
  let fixture: ComponentFixture<ExperiencePublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencePublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencePublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
