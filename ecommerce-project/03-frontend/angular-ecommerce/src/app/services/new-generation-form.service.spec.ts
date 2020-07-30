import { TestBed } from '@angular/core/testing';

import { NewGenerationFormService } from './new-generation-form.service';

describe('NewGenerationFormService', () => {
  let service: NewGenerationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewGenerationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
