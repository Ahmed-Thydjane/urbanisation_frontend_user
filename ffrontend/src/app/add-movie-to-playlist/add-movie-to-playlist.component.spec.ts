import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieToPlaylistComponent } from './add-movie-to-playlist.component';

describe('AddMovieToPlaylistComponent', () => {
  let component: AddMovieToPlaylistComponent;
  let fixture: ComponentFixture<AddMovieToPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovieToPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieToPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
