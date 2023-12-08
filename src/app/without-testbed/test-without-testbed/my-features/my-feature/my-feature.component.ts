import { UserService } from '../services/user-service/user.service';
import { MyFeatureService } from '../services/my-feature-service/my-feature.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-feature',
  templateUrl: './my-feature.component.html',
  styleUrls: ['./my-feature.component.css']
})
export class MyFeatureComponent {
  constructor(
    private myFeatureService: MyFeatureService,
    private userService: UserService) { }
}
