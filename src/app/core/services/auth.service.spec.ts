import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[RouterModule.forRoot([])],
    providers:[AuthService]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
