import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import {EditProfilePage} from '../edit-profile/edit-profile';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  skillCount : number;
  achievementCount : number;
  proofCount : number;
  level : string;
  username : string;
  email : string;

  profileImage : string;

  completedSkills = [{completedSkillImage: null as string}];

  userAchievements = [{achievementImage: null as string}];

  constructor(private nav: NavController, private auth: AuthService) {
    // GET INFO FROM LOGGED IN USER
    // let info = this.auth.getUserInfo();
    // this.username = info.name;
    // this.email = info.email;
    this.skillCount = 12;
    this.achievementCount = 2;
    this.proofCount = 1;
    this.level = 'Newbie';

    this.profileImage = 'https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg';

    this.completedSkills[0].completedSkillImage = 'http://aljeel.ly/wp-content/uploads/revslider/slide-home-default/black-white1.png';

    this.userAchievements[0].achievementImage = 'http://aljeel.ly/wp-content/uploads/revslider/slide-home-default/black-white1.png';
  }

  public goToEdit() {
    this.nav.push(EditProfilePage);
  }

}
