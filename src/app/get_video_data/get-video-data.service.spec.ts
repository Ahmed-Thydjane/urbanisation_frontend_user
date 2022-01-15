import { TestBed } from '@angular/core/testing';

import { GetVideoDataService } from './get-video-data.service';

describe('GetVideoDataService', () => {
  let service: GetVideoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetVideoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
