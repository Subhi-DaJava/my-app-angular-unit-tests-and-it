import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTestbedComponent } from './home-testbed.component';
import { TranslateService } from '../translate-services/translate.service';

// “TestBed is the primary API for writing unit tests for Angular applications and libraries.”

describe('HomeTestbedComponent', () => {
  let translateMock: ReturnType<jest.Mock>;
  let component: HomeTestbedComponent;
  let fixture: ComponentFixture<HomeTestbedComponent>;

  beforeEach(() => {
    translateMock = {
      translate: jest.fn(() => {
        return 'translated Words';
      }),
    };

    TestBed.configureTestingModule({
      providers: [
        {
          provide: TranslateService,
          useValue: translateMock,
        },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeTestbedComponent);
        component = fixture.componentInstance;
        jest.spyOn(component, 'ngOnInit');
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call translatewords and translate words', () => {
    expect(component.translateWords('translate this words')).toBe('translated Words');
    expect(translateMock.translate).toHaveBeenCalledTimes(1);
  });

  it('should call ngOnInit Lifecycle hook', () => {
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
    expect(component.translatedParagraph).toBe('translated Words');
  });

});
