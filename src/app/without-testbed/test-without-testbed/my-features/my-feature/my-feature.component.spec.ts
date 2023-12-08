import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFeatureComponent } from './my-feature.component';
import { MyFeatureService } from '../services/my-feature-service/my-feature.service';
import { UserService } from '../services/user-service/user.service';
// This essentially before each test will create a new instance of the MyFeatureComponent class and the DOM.
describe('MyFeatureComponent with TestBed: ', () => {
  let component: MyFeatureComponent;
  let fixture: ComponentFixture<MyFeatureComponent>;
  class FakeMyFeatureService {}
  class FakeUserService { }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFeatureComponent ],
      providers: [
        { provide: MyFeatureService, useClass: FakeMyFeatureService },
        { provide: UserService, useClass: FakeUserService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});

// WITHOUT TestBed
describe('MyFeatureComponent wihtout TestBed', () => {
  let component: MyFeatureComponent;
  const userService = new UserService();
  const myFeatureService = new MyFeatureService();
  
  beforeEach(() => {
    component = new MyFeatureComponent(userService, myFeatureService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});