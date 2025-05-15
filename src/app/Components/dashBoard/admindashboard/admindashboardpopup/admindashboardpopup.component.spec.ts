import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashboardpopupComponent } from './admindashboardpopup.component';

describe('AdmindashboardpopupComponent', () => {
  let component: AdmindashboardpopupComponent;
  let fixture: ComponentFixture<AdmindashboardpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmindashboardpopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindashboardpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
