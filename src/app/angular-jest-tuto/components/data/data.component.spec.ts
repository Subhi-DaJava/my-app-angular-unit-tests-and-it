import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import {FakeService} from "../../services/fake.service";
import {of, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let fakeServiceMock: any;

  beforeEach(async () => {
    fakeServiceMock = {
      getDataPokemon: jest.fn(),
      getDataPokemonWithPipe: jest.fn(),
      postDataPokemonPost: jest.fn()
    };
    await TestBed.configureTestingModule({
      declarations: [ DataComponent ],
      providers: [{provide: FakeService, useValue: fakeServiceMock}]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    TestBed.inject(FakeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getServiceData set serviceData', () => {
    jest.spyOn(fakeServiceMock, 'getDataPokemon').mockReturnValue(of());
    fixture.detectChanges();

    expect(fakeServiceMock.getDataPokemon).toHaveBeenCalled();
    expect(fakeServiceMock.getDataPokemon).toHaveReturnedTimes(1);
    expect(fakeServiceMock.getDataPokemon).toHaveReturned();
  });

  it('should getServiceData set serviceData with return data', () => {
    const response = "Pokemon List";

    jest.spyOn(fakeServiceMock, 'getDataPokemon').mockReturnValue(of(response));
    fixture.detectChanges();

    expect(fakeServiceMock.getDataPokemon).toHaveBeenCalled();
    expect(fakeServiceMock.getDataPokemon).toHaveReturnedTimes(1);
    expect(component.servieData).toEqual(response);
  });

  it('should getServiceData set serviceData with return data', () => {
    // backend will return this error message
    const response = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });

    jest.spyOn(fakeServiceMock, 'getDataPokemon').mockReturnValue((throwError(() => response)));
    component.getServiceData();
    expect(component.errorMessage).toEqual('Not Found');
    expect(component.errorMessage).toBe('Not Found');
  });

  it('should getServiceData set serviceData with return data', () => {
    const response = "Pokemon List";

    jest.spyOn(fakeServiceMock, 'getDataPokemon').mockReturnValue(of(response));
    component.getServiceData();

    expect(fakeServiceMock.getDataPokemon).toHaveBeenCalled();
    expect(fakeServiceMock.getDataPokemon).toHaveReturnedTimes(1);
    expect(component.servieData).toEqual(response);
  });

  it('should greeting with return Have A Good Day', () => {
    const response = { list: "Pokemon List", time: 13 };

    jest.spyOn(fakeServiceMock, 'getDataPokemon').mockReturnValue(of(response));
    component.getServiceData();

    expect(fakeServiceMock.getDataPokemon).toHaveBeenCalled();
    expect(fakeServiceMock.getDataPokemon).toHaveReturnedTimes(1);
    expect(component.servieData).toEqual(response);
    expect(component.greeting).toEqual('Have A Good Day!'); // 13 < 20 and satisfies the condition
  });

  it('should greeting with return Good Morning', () => {
    const response = { list: "Pokemon List", time: 9 };

    jest.spyOn(fakeServiceMock, 'getDataPokemon').mockReturnValue(of(response));
    fixture.detectChanges()

    expect(fakeServiceMock.getDataPokemon).toHaveBeenCalled();
    expect(fakeServiceMock.getDataPokemon).toHaveReturnedTimes(1);
    expect(component.servieData).toEqual(response);
    expect(component.greeting).toEqual('Good Morning!'); // 13 < 20 and satisfies the condition
  });

  it('should greeting with return Good Evening', () => {
    const response = { list: "Pokemon List", time: 22 };

    jest.spyOn(fakeServiceMock, 'getDataPokemon').mockReturnValue(of(response));
    fixture.detectChanges()

    expect(fakeServiceMock.getDataPokemon).toHaveBeenCalled();
    expect(fakeServiceMock.getDataPokemon).toHaveReturnedTimes(1);
    expect(component.servieData).toEqual(response);
    expect(component.greeting).toEqual('Good Evening!'); // 13 < 20 and satisfies the condition
  });

});
