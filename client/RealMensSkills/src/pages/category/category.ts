import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  item = {categoryName: 'Valerka', categoryImage: 'https://static.webshopapp.com/shops/035417/files/011178634/valera-logo.jpg'}

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
