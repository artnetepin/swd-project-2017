import { Component, ViewChild } from '@angular/core';

import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})

export class CategoriesPage {

  items = [{categoryName: null as string, categoryImage: null as string}]

  constructor(public navCtrl: NavController) {
    for (let x = 0; x < 3; x++) {
      this.items.push({
        categoryName : "category",
        categoryImage : "http://www.oamk.fi/docs/logopankki/fi/pysty/logo_vari_300dpi_FI-pysty.jpg"
      });
    }
  }

  @ViewChild(Content) content: Content;

}
