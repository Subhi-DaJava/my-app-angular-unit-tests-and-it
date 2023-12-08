import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyFeatureChildComponent } from './my-feature-child.component';
import { MyFeatureChildService } from '../serives/my-feature-service/my-feature-child.service';
import { UserChildService } from '../serives/user-service/user-child.service';

class FakeMyFeatureService {

}

class FakeUserService {

}

describe('MyFeatureChildComponent', () => {
  let component: MyFeatureChildComponent;
  let fixture: ComponentFixture<MyFeatureChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFeatureChildComponent ],
      providers: [
        { provide: MyFeatureChildService, useClass: FakeMyFeatureService },
        { provide: UserChildService, useClass: FakeUserService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFeatureChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// Without TestBed
describe('MyFeatureComponent', () => {
  let component: MyFeatureChildComponent;
  const userService = new FakeUserService();
  const myFeatureService = new FakeMyFeatureService();

  beforeEach(() => {
    component = new MyFeatureChildComponent(userService, myFeatureService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
