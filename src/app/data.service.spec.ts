import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('verify inventory sum with delivery', () => {
    let dataService: DataService = new DataService();
    dataService.cart = [{name: 'a', price:5}, {name: 'b', price:7}, , {name: 'b', price:3}];
    expect(dataService.getCartValue()).toBe(35, 'kukuku');
  })

  it('verify inventory sum without delivery', () => {
    let dataService: DataService = new DataService();
    dataService.cart = [{name: 'a', price:50}, {name: 'b', price:29}, , {name: 'b', price:21}];
    expect(dataService.getCartValue()).toBe(100);
  })
});
