import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http, Response } from '@angular/http';

@Component({
  selector: 'page-skill',
  templateUrl: 'skill.html'
})
export class SkillPage {

  skill: any;

  pageID: any;
  skillName: any;
  skillImage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.pageID = navParams.get("pageID");
    this.skillName = navParams.get("name");
    this.skillImage = navParams.get("image_url");

    http.get('https://sheltered-savannah-33614.herokuapp.com/skill/' + this.pageID).subscribe((res:Response) => this.skill = res.json());
  }


}
