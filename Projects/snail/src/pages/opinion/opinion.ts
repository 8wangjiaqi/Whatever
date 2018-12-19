import { Component } from '@angular/core';
import { NavController, NavParams, App, AlertController } from 'ionic-angular';
import { ShouyeqqPage } from '../shouyeqq/shouyeqq';
import { RegisterPage } from '../register/register';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the OpinionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-opinion',
  templateUrl: 'opinion.html',
})
export class OpinionPage {
  titleTitle: any;

  constructor(public app:App,public alertCtrl:AlertController,public http:HttpClient, public navParams: NavParams,public navCtrl: NavController,) {
    this.titleTitle =this.navParams.get('title');
  }
  private headers=new HttpHeaders({'Content-Type':'application/json'} )
  tel;
  say;
  pho;
   logForm() {
    console.log('tel',this.tel);
    this.http.post('/api/say',{
    "username":this.tel,
    "say":this.say,
    "phone":this.pho,
  },{
    headers:this.headers,
  }).subscribe((data)=>{
    this.tel=RegisterPage.t;
    console.log('data',data);
    // -1 数据不完整  0 成功
    switch(data){
      case -1:
        this.presentPrompt('请将内容添写完整');
        break;
      
      case 0:
        this.goHome();
        break;
    }
  })
   }

  

ionViewWillEnter() { //page初始化时
  this.tel=RegisterPage.t;
}

  presentPrompt(str) {
    console.log(str);
    let alert = this.alertCtrl.create({
      title: '添加失败',
      subTitle:str,
      buttons: [
        {
          text: '确认',
          role: 'cancel',
          handler: data => {
            console.log('Confirm clicked');
          }
        }
      ]
    });
    alert.present();
  }
  goHome(){
    // this.app.getRootNavs()[0].setRoot(TabsPage,{username:this.tel});
    // this.navCtrl.popToRoot();
    this.navCtrl.push(ContactPage);
    // console.log('1',this.tel);
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

}
