import { TestBed, inject } from '@angular/core/testing';

import { MyServiceService } from './myService.service';

describe('MyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyServiceService]
    });
  });

  it('should be created', inject([MyServiceService], (service: MyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
