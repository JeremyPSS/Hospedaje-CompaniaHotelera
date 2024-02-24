import { TestBed } from '@angular/core/testing';

import { DbHotelService } from './db-hotel.service';

describe('DbHotelService', () => {
  let service: DbHotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbHotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
