import { TestBed } from '@angular/core/testing';

import { WishlistService } from './wishlist.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FavoriteCity } from '../wishlist/FavoriteCity';

describe('WishlistService', () => {
  let service: WishlistService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WishlistService]
    });
    service = TestBed.inject(WishlistService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get favorite cities', () => {
    const userId = 'testUserId';
    const dummyCities: FavoriteCity[] = [
      { userId:'tester',cityName: 'City1' },
      { userId:'tester',cityName: 'City2' },
    ];

    service.getFavoriteCities(userId).subscribe((cities) => {
      expect(cities).toEqual(dummyCities);
    });

    const req = httpMock.expectOne(`http://localhost:8086/favorite-cities/${userId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(dummyCities);
  });

  it('should add a favorite city', () => {
    const userId = 'testUserId';
    const cityName = 'City3';

    service.addFavoriteCity(userId, cityName).subscribe(() => {
      
    });

    const req = httpMock.expectOne(`http://localhost:8086/favorite-cities/${userId}/${cityName}`);
    expect(req.request.method).toEqual('POST');
    req.flush({});
  });
  
  it('should remove a favorite city', () => {
    const userId = 'testUserId';
    const cityName = 'City1';

    service.removeFavoriteCity(userId, cityName).subscribe(() => {
     
    });

    const req = httpMock.expectOne(`http://localhost:8086/favorite-cities/${userId}/${cityName}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush({});
  });

});
