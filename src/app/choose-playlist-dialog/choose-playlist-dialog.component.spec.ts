import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePlaylistDialogComponent } from './choose-playlist-dialog.component';

describe('ChoosePlaylistDialogComponent', () => {
  let component: ChoosePlaylistDialogComponent;
  let fixture: ComponentFixture<ChoosePlaylistDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosePlaylistDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePlaylistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
