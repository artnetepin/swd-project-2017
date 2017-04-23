import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  category = {categoryName: null as string, categoryImage: null as string};
  skill = {skillName: null as string, skillImage: null as string};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category.categoryName = 'Category';
    this.category.categoryImage = 'https://static.webshopapp.com/shops/035417/files/011178634/valera-logo.jpg';

    this.skill.skillName = 'Skill';
    this.skill.skillImage = 'http://aljeel.ly/wp-content/uploads/revslider/slide-home-default/black-white1.png';
  }

}
