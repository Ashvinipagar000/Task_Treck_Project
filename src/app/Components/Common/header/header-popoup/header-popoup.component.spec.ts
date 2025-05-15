import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPopoupComponent } from './header-popoup.component';

describe('HeaderPopoupComponent', () => {
  let component: HeaderPopoupComponent;
  let fixture: ComponentFixture<HeaderPopoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderPopoupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPopoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
