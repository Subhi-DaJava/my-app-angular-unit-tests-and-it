import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyParentComponent } from './my-parent.component';
import { MyFeatureChildComponent } from '../my-feature/my-feature-child.component';
import { UserChildService } from '../serives/user-service/user-child.service';
import { MyFeatureChildService } from '../serives/my-feature-service/my-feature-child.service';

// With TestBed
/*
<app-my-feature-child />
should add the declaration for the my-feature component, and all services related to the my-parent component
*/

// Without TestBed
describe('MyParentComponent without TestBed case: ', () => {

  let component: MyParentComponent;

  beforeEach(() => {
    component = new MyParentComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

class FakeMyFeatureService {

}

class FakeUserService {

}
// Test with TestBed
describe('MyParentComponent', () => {
  let component: MyParentComponent;
  let fixture: ComponentFixture<MyParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyParentComponent, MyFeatureChildComponent],
      providers: [
        { provide: UserChildService, useClass: FakeUserService },
        { provide: MyFeatureChildService, useClass: FakeMyFeatureService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
