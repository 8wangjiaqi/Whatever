import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnrollPage } from '../enroll/enroll';
import { ContactPage } from '../contact/contact';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  goEnroll(){
    this.navCtrl.push(EnrollPage,{
      title : '注册'
    });
    console.log("EnrollPage");
  }  
  goTabs(){
    this.navCtrl.push(TabsPage);
  }
}
