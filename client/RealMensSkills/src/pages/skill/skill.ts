import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { NavController, NavParams, AlertController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

// import { ProfilePage } from '../profile/profile';


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

  success = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private auth: AuthService, private alertCtrl: AlertController) {
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
        if (completion) {
          this.success = true;
          this.showPopup('Success', 'Skill completed');
        } else {
          this.showPopup('Error', 'Skill has already been completed');
        }
      }
    );
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
       {
         text: 'OK',
         handler: data => {
           if (this.success) {
             this.navCtrl.popToRoot();
           }
         }
       }
     ]
    });
    alert.present();
  }


}
