import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleWeatherInfoComponent } from './article-weather-info.component';

describe('ArticleWeatherInfoComponent', () => {
  let component: ArticleWeatherInfoComponent;
  let fixture: ComponentFixture<ArticleWeatherInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleWeatherInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleWeatherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
