import { TestBed } from '@angular/core/testing';
import { CityService } from './_services/city-service';


describe('CityServiceService', () => {
  let service: CityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
