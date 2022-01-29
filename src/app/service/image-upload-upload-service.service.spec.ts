import { TestBed } from '@angular/core/testing';

import { ImageUploadUploadServiceService } from './image-upload-upload-service.service';

describe('ImageUploadUploadServiceService', () => {
  let service: ImageUploadUploadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageUploadUploadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
