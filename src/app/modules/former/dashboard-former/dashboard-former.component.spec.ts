import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFormerComponent } from './dashboard-former.component';

describe('DashboardFormerComponent', () => {
  let component: DashboardFormerComponent;
  let fixture: ComponentFixture<DashboardFormerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFormerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFormerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
