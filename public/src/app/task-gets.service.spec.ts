import { TestBed } from '@angular/core/testing';

import { TaskGetsService } from './task-gets.service';

describe('TaskGetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskGetsService = TestBed.get(TaskGetsService);
    expect(service).toBeTruthy();
  });
});
