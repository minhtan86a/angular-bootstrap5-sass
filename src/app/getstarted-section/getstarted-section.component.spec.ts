import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstartedSectionComponent } from './getstarted-section.component';

describe('GetstartedSectionComponent', () => {
  let component: GetstartedSectionComponent;
  let fixture: ComponentFixture<GetstartedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetstartedSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetstartedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
