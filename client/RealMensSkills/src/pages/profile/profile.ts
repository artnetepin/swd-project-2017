import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { NavController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

import { EditProfilePage } from '../edit-profile/edit-profile';
import { SkillPage } from '../skill/skill';

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
  userAchievementsName: any;

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

    http.get('https://sheltered-savannah-33614.herokuapp.com/completed_skills/' + this.id).subscribe((res:Response) => this.completedSkills = res.json());

    this.userAchievements = 'http://www.arlenward.com/wordpress/wp-content/uploads/2014/05/achievement-race.jpg';
    this.userAchievementsName = 'Champion';
  }

  public goToEdit() {
    this.nav.push(EditProfilePage);
  }

  public goToSkill(skillID, skillName, skillImage) {
    this.nav.push(SkillPage, {skillID: skillID, name: skillName, image_url: skillImage});
  }

}
