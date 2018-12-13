import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OpinionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-opinion',
  templateUrl: 'opinion.html',
})
export class OpinionPage {
  titleTitle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.titleTitle =this.navParams.get('title');
  }


}
