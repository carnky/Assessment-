import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationDashboardComponent } from './violation-dashboard.component';

describe('ViolationDashboardComponent', () => {
  let component: ViolationDashboardComponent;
  let fixture: ComponentFixture<ViolationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViolationDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViolationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
