import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JizhangbenPage } from '../jizhangben/jizhangben';
import { TriplanPage } from '../triplan/triplan';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gosub(){
    this.navCtrl.push(JizhangbenPage);
  }
  goplan(){
    this.navCtrl.push(TriplanPage);
  }
}
