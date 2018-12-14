import { Component  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { FansPage } from '../fans/fans';
/**
 * Generated class for the AttentionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-attention',
  templateUrl: 'attention.html',
})
export class AttentionPage {
  i;
  index;
  myEvent;
  titleTitle: any;
  public static attentionarr=[
    {
      status:1,
      headerSrc:"assets/imgs/header_4.jpg",
      name:"佳琦琦琦",
      signature:4,
      buttonValue:"互相关注",
    },
    {
      status:0,
      headerSrc:"assets/imgs/header_7.jpg",
      name:"大头大头",
      signature:4,
      buttonValue:"√ 已关注"
    },
    {
      status:0,
      headerSrc:"assets/imgs/header_1.jpg",
      name:"hhh_",
      signature:2,
      buttonValue:"√ 已关注"
    },
    {
      status:0,
      headerSrc:"assets/imgs/header_6.jpg",
      name:"啊哈哈",
      signature:3,
      buttonValue:"√ 已关注"
    },
    {
      status:1,
      headerSrc:"assets/imgs/header_2.jpg",
      name:"123",
      signature:2,
      buttonValue:"互相关注"
    },
  ];
  attention;
  constructor(public events: Events,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.titleTitle =this.navParams.get('title');
    this.attention = AttentionPage.attentionarr;
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      message: '确定不再关注此人？',
      buttons: [
        {
          text: '取消',
          handler: () => {
          }
        },
        {
          text: '确定',
          handler: () => {
            for(this.i = 0;this.i < FansPage.fansarr.length;this.i++){
              if((AttentionPage.attentionarr[this.index].headerSrc == FansPage.fansarr[this.i].headerSrc)
              &&(AttentionPage.attentionarr[this.index].signature == FansPage.fansarr[this.i].signature)
              &&(AttentionPage.attentionarr[this.index].name == FansPage.fansarr[this.i].name)){
                FansPage.fansarr[this.index].status = 0;
                FansPage.fansarr[this.index].buttonValue = "+ 关注";
              }
            }
            AttentionPage.attentionarr.splice(this.index, 1);
          }
        }
      ]
    });
    confirm.present();
  }

  show(i) {
    this.index = i;
  }
}
