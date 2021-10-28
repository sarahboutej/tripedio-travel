import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleUtilsInformationComponent } from './article-utils-information.component';

describe('ArticleUtilsInformationComponent', () => {
  let component: ArticleUtilsInformationComponent;
  let fixture: ComponentFixture<ArticleUtilsInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleUtilsInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleUtilsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
