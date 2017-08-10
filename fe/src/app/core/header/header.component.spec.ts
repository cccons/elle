import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title of `elle`', async(() => {
    fixture   = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    expect(component.title).toBe('elle');
  }));

  it('should have a subtitle of `english language learning engine`', async(() => {
    fixture   = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    expect(component.subtitle).toBe('english language learning engine');
  }));
});
