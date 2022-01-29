import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtileListListComponent } from './artile-list-list.component';

describe('ArtileListListComponent', () => {
  let component: ArtileListListComponent;
  let fixture: ComponentFixture<ArtileListListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtileListListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtileListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
