import {TestBed} from "@angular/core/testing";
import {PageService} from "./page.service";

describe('PageService', () => {
  let service: PageService;

  // choix 1
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageService);
  });

  // choix 2
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports: [PageService],
  //   }).compileComponents();
  //   service = TestBed.inject(PageService);
  // });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('range', () => {
    it('should return an array of numbers from 1 to 5 when called with 1 and 6', () => {
      const result = service.range(1, 6);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return an array of numbers from 3 to 7 when called with 3 and 8', () => {
      const result = service.range(3, 8);
      expect(result).toEqual([3, 4, 5, 6, 7]);
    });

    it('should return an empty array when called with 1 and 1', () => {
      const result = service.range(1, 1);
      expect(result).toEqual([]);
    });

    it('should return an empty array when called with 24 and 30', () => {
      const result = service.range(24, 30);
      expect(result).toEqual([24, 25, 26, 27, 28, 29]);
    });

    it('should return an empty array when called with 0 and 0', () => {
      const result = service.range(0, 0);
      expect(result).toEqual([]);
    });

    it('should return an empty array when called with -1 and 0', () => {
      const result = service.range(-1, 0);
      expect(result).toEqual([-1]);
    });
  });
});
