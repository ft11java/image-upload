import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AricleCreateCreateComponent } from './aricle-create-create.component';

describe('AricleCreateCreateComponent', () => {
  let component: AricleCreateCreateComponent;
  let fixture: ComponentFixture<AricleCreateCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AricleCreateCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AricleCreateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
