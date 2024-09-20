import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentCenterComponent } from './apartment-center.component';

describe('ApartmentCenterComponent', () => {
  let component: ApartmentCenterComponent;
  let fixture: ComponentFixture<ApartmentCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApartmentCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
