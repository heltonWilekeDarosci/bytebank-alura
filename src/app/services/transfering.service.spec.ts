/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransferingService } from './transfering.service';

describe('Service: Transfering', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransferingService]
    });
  });

  it('should ...', inject([TransferingService], (service: TransferingService) => {
    expect(service).toBeTruthy();
  }));
});
