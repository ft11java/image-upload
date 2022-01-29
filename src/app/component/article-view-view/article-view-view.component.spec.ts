import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleViewViewComponent } from './article-view-view.component';

describe('ArticleViewViewComponent', () => {
  let component: ArticleViewViewComponent;
  let fixture: ComponentFixture<ArticleViewViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleViewViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleViewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
