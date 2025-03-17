import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessInfoModalComponent } from './fitness-info-modal.component';

describe('FitnessInfoModalComponent', () => {
  let component: FitnessInfoModalComponent;
  let fixture: ComponentFixture<FitnessInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitnessInfoModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
