import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { NavController, NavParams } from 'ionic-angular';

import {SkillPage} from '../skill/skill';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  pageID: any;
  categoryImage: any;
  categoryName: any;
  category: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    // this.category.categoryName = 'Category';
    // this.category.categoryImage = 'https://static.webshopapp.com/shops/035417/files/011178634/valera-logo.jpg';

    this.pageID = navParams.get("pageID");
    this.categoryName = navParams.get("name");
    this.categoryImage = navParams.get("image_url");

    http.get('https://sheltered-savannah-33614.herokuapp.com/skills/' + this.pageID).subscribe((res:Response) => this.category = res.json());
  }

  public goToSkill(id, name, image_url){
    this.navCtrl.push(SkillPage, {pageID: id, name: name, image_url: image_url});
  }

}
