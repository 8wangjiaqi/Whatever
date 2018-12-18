import { Component } from '@angular/core';
import { NavController, NavParams, Header } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ContactPage } from '../contact/contact';

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
  // header;
  imgUrl:string;
  constructor(private camera: Camera,public platform: Platform,public actionsheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams) {
    this.titleTitle =this.navParams.get('title');
    // this.imgUrl = ContactPage.user.headerSrc;
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
            const options: CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            }
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
