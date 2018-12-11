import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConcerningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-concerning',
  templateUrl: 'concerning.html',
})
export class ConcerningPage {
  titleTitle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.titleTitle =this.navParams.get('title');
  }

}
