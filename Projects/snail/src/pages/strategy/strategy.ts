import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StrategyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-strategy',
  templateUrl: 'strategy.html',
})
export class StrategyPage {
  titleTitle: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.titleTitle =this.navParams.get('title');
  }
}
