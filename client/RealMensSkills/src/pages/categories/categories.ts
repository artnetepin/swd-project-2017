import { Component, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';

import { NavController, NavParams, Content } from 'ionic-angular';

import {CategoryPage} from '../category/category';


@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})

export class CategoriesPage {

  categories : any;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {
    http.get('https://sheltered-savannah-33614.herokuapp.com/categories').subscribe((res:Response) => this.categories = res.json());
  }

  public goToCategory(id, name, image_url) {
    this.navCtrl.push(CategoryPage, {pageID: id, name: name, image_url: image_url});
  }

  @ViewChild(Content) content: Content;

}
