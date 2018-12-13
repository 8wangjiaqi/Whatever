import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the SubHeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sub-header',
  templateUrl: 'sub-header.html',
})
export class SubHeaderPage {
  titleTitle: any;

  constructor(public platform: Platform,public actionsheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams) {
    this.titleTitle =this.navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubHeaderPage');
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '拍照',
          cssClass: 'phone',
          handler: () => {
            console.log('拍照');
          }
        },
        {
          text: '从手机相册选择',
          cssClass: 'select',
          handler: () => {
            console.log('从手机相册选择');
          }
        },
        {
          text: '取消',
          cssClass: 'cancel',
          handler: () => {
            console.log('取消');
          }
        },
      ]
    });
    actionSheet.present();
  }
}
