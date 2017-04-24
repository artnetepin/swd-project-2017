import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfilePage {
  user = {profileImage: null as string, username: null as string, firstname: null as string, lastname: null as string, email: null as string};

  constructor(private nav: NavController, private auth: AuthService) {
    this.user = {
      profileImage : 'https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg',
      username : 'valerka',
      firstname : 'Valerka',
      lastname : 'Leontiev',
      email : 'valerka@gmail.com'
    }
  }

  public logout() {
    // this.auth.logout().subscribe(succ => {
    //     this.nav.setRoot(LoginPage)
    // });
  }

}
