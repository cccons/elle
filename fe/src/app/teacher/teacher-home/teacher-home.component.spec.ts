import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TeacherHomeComponent } from './teacher-home.component';

describe('TeacherHomeComponent', () => {
  let component: TeacherHomeComponent;
  let fixture: ComponentFixture<TeacherHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(TeacherHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have function: `addClass`', () => {
    expect(component.addClass.call).toBeDefined();
  });

  it('should have function: `addExam`', () => {
    expect(component.addExam.call).toBeDefined();
  });

  it('should have function: `editProfile`', () => {
    expect(component.editProfile.call).toBeDefined();
  });

  it('should call `addClass` when clicking shortcut link', async(() => {
    fixture   = TestBed.createComponent(TeacherHomeComponent);
    component = fixture.componentInstance;

    const spy = spyOn(component, 'addClass');
    const element  = fixture.debugElement;
    const shortcut = element.query(By.css('.box.add-class'));
    shortcut.triggerEventHandler('click', spy);

    expect(spy).toHaveBeenCalled();
  }));

  it('should call `addExam` when clicking shortcut link', async(() => {
    fixture   = TestBed.createComponent(TeacherHomeComponent);
    component = fixture.componentInstance;

    const spy = spyOn(component, 'addExam');
    const element  = fixture.debugElement;
    const shortcut = element.query(By.css('.box.add-exam'));
    shortcut.triggerEventHandler('click', spy);

    expect(spy).toHaveBeenCalled();
  }));

  it('should call `editProfile` when clicking shortcut link', async(() => {
    fixture   = TestBed.createComponent(TeacherHomeComponent);
    component = fixture.componentInstance;

    const spy = spyOn(component, 'editProfile');
    const element  = fixture.debugElement;
    const shortcut = element.query(By.css('.box.edit-profile'));
    shortcut.triggerEventHandler('click', spy);

    expect(spy).toHaveBeenCalled();
  }));
});
