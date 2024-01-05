import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });
    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    // After every test, assert that there are no more pending requests
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('it should send a POST request to the login endpoint',()=> {
    const username = 'testuser';
    const password = 'testpassword';

    service.login(username, password).subscribe();

    const req = httpMock.expectOne(`${service['baseUrl']}/auth`);
    expect(req.request.method).toBe('POST');

    req.flush({status :'success'});

    httpMock.verify();
  })
});
