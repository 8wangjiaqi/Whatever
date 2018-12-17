import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-addpage',
  templateUrl: 'addpage.html',
})
export class AddpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: '是否要保存草稿？',
      
      buttons: [
        {
          text: '否',
          handler: () => {
            this.navCtrl.pop();
          }
        },
        {
          text: '是',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AddpagePage');
  }

}
