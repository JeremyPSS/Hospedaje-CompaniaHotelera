import { TestBed } from '@angular/core/testing';

import { DbHabitacionService } from './db-habitacion.service';

describe('DbHabitacionService', () => {
  let service: DbHabitacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbHabitacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
