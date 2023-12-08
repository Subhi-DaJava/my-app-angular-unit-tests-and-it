import { Component } from '@angular/core';
import { MyFeatureChildService } from '../serives/my-feature-service/my-feature-child.service';
import { UserChildService } from '../serives/user-service/user-child.service';

@Component({
  selector: 'app-my-feature-child',
  templateUrl: './my-feature-child.component.html',
  styleUrls: ['./my-feature-child.component.css']
})
export class MyFeatureChildComponent {
  constructor(
    private myFeatureChildService: MyFeatureChildService,
    private userChildService: UserChildService) { }

}
