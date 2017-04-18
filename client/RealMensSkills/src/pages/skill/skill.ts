import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-skill',
  templateUrl: 'skill.html'
})
export class SkillPage {

  skill = {skillName:'Skill', skillThumbnail:'', skillCategory: ''}

  constructor(public navCtrl: NavController, public navParams: NavParams) {}


}
