import { Component } from '@angular/core';
import {UserService} from './share/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipes-front';

  constructor(private readonly userService: UserService) {
    this.userService.decodeToken();
  }
}
