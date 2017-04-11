import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class Profile {
  skillCount = 12 as number;
  achievementCount = 15 as number;
  proofCount = 1 as number;

  constructor(public navCtrl: NavController) {



  }
}
