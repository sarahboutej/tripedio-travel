import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationNavItemComponent } from './destination-nav-item.component';

describe('DestinationNavItemComponent', () => {
  let component: DestinationNavItemComponent;
  let fixture: ComponentFixture<DestinationNavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationNavItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
