import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the EnrollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enroll',
  templateUrl: 'enroll.html',
})
export class EnrollPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTabs(){
    this.navCtrl.push(TabsPage);
  }
  goRegister(){
    this.navCtrl.push(RegisterPage);
  }
}
