import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { SkillPage } from '../skill/skill';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  skillCount : number;
  achievementCount : number;
  proofCount : number;

  username : string;
  name: string;
  level : string;
  profileImage : string;
  id: any;

  completedSkills: any;

  userAchievements: any;

  constructor(private nav: NavController, private auth: AuthService, public http: Http) {
    // GET INFO FROM LOGGED IN USER
    let info = this.auth.getUserInfo();

    this.username = info.login;
    this.name = info.name;
    this.level = info.level;
    this.profileImage = info.photo_url;
    this.id = info.id;

    this.skillCount = 12;
    this.achievementCount = 2;
    this.proofCount = 1;

    // this.completedSkills = 'http://aljeel.ly/wp-content/uploads/revslider/slide-home-default/black-white1.png';

    http.get('https://sheltered-savannah-33614.herokuapp.com/completed_skills/' + this.id).subscribe((res:Response) => this.completedSkills = res.json());

    // this.userAchievements = 'http://aljeel.ly/wp-content/uploads/revslider/slide-home-default/black-white1.png';
  }

  public goToEdit() {
    this.nav.push(EditProfilePage);
  }

  public goToSkill(skillID, skillName, skillImage) {
    this.nav.push(SkillPage, {skillID: skillID, name: skillName, image_url: skillImage});
  }

}
