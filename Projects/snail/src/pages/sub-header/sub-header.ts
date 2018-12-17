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

// import {Component} from '@angular/core';
// import {IonicPage, NavController, NavParams, ActionSheetController, AlertController} from 'ionic-angular';

// import {ImagePicker, ImagePickerOptions} from "@ionic-native/image-picker";
// import {Camera, CameraOptions} from "@ionic-native/camera";

// @IonicPage()
// @Component({
//   selector: 'page-edit',
//   templateUrl: 'edit.html',
// })
// export class EditPage {

//   avatar: string = "";

//   constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, public imagePicker: ImagePicker, public camera: Camera) {
//   }

//   presentActionSheet() {
//     let actionSheet = this.actionSheetCtrl.create({
//       buttons: [{
//         text: '拍照',
//         role: 'takePhoto',
//         handler: () => {
//           this.takePhoto();
//         }
//       }, {
//         text: '从相册选择',
//         role: 'chooseFromAlbum',
//         handler: () => {
//           this.chooseFromAlbum();
//         }
//       }, {
//         text: '取消',
//         role: 'cancel',
//         handler: () => {
//           console.log("cancel");
//         }
//       }]
//     });

//     actionSheet.present().then(value => {
//       return value;
//     });
//   }
//   takePhoto() {
//     const options: CameraOptions = {
//       quality: 100,
//       allowEdit: true,
//       targetWidth: 200,
//       targetHeight: 200,
//       saveToPhotoAlbum: true,
//     };

//     this.camera.getPicture(options).then(image => {
//       console.log('Image URI: ' + image);
//       this.avatar = image.slice(7);
//     }, error => {
//       console.log('Error: ' + error);
//     });
//   }

//   chooseFromAlbum() {
//     const options: ImagePickerOptions = {
//       maximumImagesCount: 1,
//       width: 200,
//       height: 200
//     };
//     this.imagePicker.getPictures(options).then(images => {
//       if (images.length > 1) {
//         this.presentAlert();
//       } else if (images.length === 1) {
//         console.log('Image URI: ' + images[0]);
//         this.avatar = images[0].slice(7);
//       }
//     }, error => {
//       console.log('Error: ' + error);
//     });
//   }

//   presentAlert() {
//     let alert = this.alertCtrl.create({title: "上传失败", message: "只能选择一张图片作为头像哦", buttons: ["确定"]});
//     alert.present().then(value => {
//       return value;
//     });
//   }

// }
