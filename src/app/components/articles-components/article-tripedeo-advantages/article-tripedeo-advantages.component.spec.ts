import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTripedeoAdvantagesComponent } from './article-tripedeo-advantages.component';

describe('ArticleTripedeoAdvantagesComponent', () => {
  let component: ArticleTripedeoAdvantagesComponent;
  let fixture: ComponentFixture<ArticleTripedeoAdvantagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTripedeoAdvantagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTripedeoAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
