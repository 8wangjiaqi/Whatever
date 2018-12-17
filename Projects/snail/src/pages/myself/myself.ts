import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubHeaderPage } from '../sub-header/sub-header';

/**
 * Generated class for the MyselfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-myself',
  templateUrl: 'myself.html',
})
export class MyselfPage {
  titleTitle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.titleTitle =this.navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyselfPage');
  }
  subHeader(){
    this.navCtrl.push(SubHeaderPage,{
      title : '个人头像'
    });
  } 
}
