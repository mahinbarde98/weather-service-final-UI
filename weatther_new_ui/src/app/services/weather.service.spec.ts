import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch weather data for a city', () => {
    const city = 'London';
    const mockWeatherData = { /* some mock data*/ };

    service.getWeather(city).subscribe(data => {
      expect(data).toEqual(mockWeatherData);
    });

    const req = httpMock.expectOne(`http://localhost:8085/weather/v1/${city}`);
    expect(req.request.method).toBe('GET');

   req.flush(mockWeatherData);
  });
  
});
