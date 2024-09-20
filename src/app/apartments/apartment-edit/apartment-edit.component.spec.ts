import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentEditComponent } from './apartment-edit.component';

describe('ApartmentEditComponent', () => {
  let component: ApartmentEditComponent;
  let fixture: ComponentFixture<ApartmentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApartmentEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
