import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSkillComponent } from './popup-skill.component';

describe('PopupSkillComponent', () => {
  let component: PopupSkillComponent;
  let fixture: ComponentFixture<PopupSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
