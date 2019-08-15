import { TestBed } from '@angular/core/testing';

import { ServicePostService } from './service-post.service';

describe('ServicePostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicePostService = TestBed.get(ServicePostService);
    expect(service).toBeTruthy();
  });
});
