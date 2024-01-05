import { TestBed } from '@angular/core/testing';

import { RegistrationService } from './registration.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('RegistrationService', () => {
  let service: RegistrationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegistrationService]
    });
    service = TestBed.inject(RegistrationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should register a user', () => {
    const mockUser = { username: 'testuser', password: 'testpassword' };

    service.registerUser(mockUser).subscribe(response => {
      expect(response).toBeTruthy();  //here result can be added based in the api response
    });

    const req = httpMock.expectOne('http://localhost:8081/register/save');
    expect(req.request.method).toBe('POST');
    
  });
});
