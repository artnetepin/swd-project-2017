import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

import { Http, Response } from '@angular/http';

@Component({
  selector: 'page-skill',
  templateUrl: 'skill.html'
})
export class SkillPage {
  userID: any;

  skill: any;
  skillID: any;
  skillName: any;
  skillImage: any;

  steps: any;
  stepID: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.userID = info.id;

    this.skillID = navParams.get("skillID");
    this.skillName = navParams.get("name");
    this.skillImage = navParams.get("image_url");

    http.get('https://sheltered-savannah-33614.herokuapp.com/skill/' + this.skillID).subscribe((res:Response) => this.skill = res.json());

    http.get('https://sheltered-savannah-33614.herokuapp.com/skill_steps/' + this.skillID).subscribe((res:Response) => this.steps = res.json());

  }

  public completeSkill(userID, skillID) {
    this.http.post('https://sheltered-savannah-33614.herokuapp.com/complete_skill/', {userID: userID, skillID: skillID}).map(res => res.json()).subscribe(
      result => {
        let completion = (result.done);
        if (completion) {alert('Skill completed');} else {alert('ERROR FUCK OFF');}
      }
    );
  }


}
