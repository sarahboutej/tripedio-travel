import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTravelCombinationComponent } from './article-travel-combination.component';

describe('ArticleTravelCombinationComponent', () => {
  let component: ArticleTravelCombinationComponent;
  let fixture: ComponentFixture<ArticleTravelCombinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTravelCombinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTravelCombinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
