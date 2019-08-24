import { TestBed } from '@angular/core/testing';

import { MailformService } from './mailform.service';

describe('MailformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailformService = TestBed.get(MailformService);
    expect(service).toBeTruthy();
  });
});
