import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import {EditProfilePage} from '../edit-profile/edit-profile';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  skillCount = 12;
  achievementCount = 15;
  proofCount = 1;
  level = 'Newbie';
  username = '';
  email = '';

  constructor(private nav: NavController, private auth: AuthService) {
    // let info = this.auth.getUserInfo();
    // this.username = info.name;
    // this.email = info.email;
  }

  public goToEdit() {
    this.nav.push(EditProfilePage);
  }

}
