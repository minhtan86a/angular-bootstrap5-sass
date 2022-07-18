import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliSectionComponent } from './portfoli-section.component';

describe('PortfoliSectionComponent', () => {
  let component: PortfoliSectionComponent;
  let fixture: ComponentFixture<PortfoliSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoliSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
