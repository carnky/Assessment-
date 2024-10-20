import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDasbordComponent } from './footer-dasbord.component';

describe('FooterDasbordComponent', () => {
  let component: FooterDasbordComponent;
  let fixture: ComponentFixture<FooterDasbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterDasbordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterDasbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
