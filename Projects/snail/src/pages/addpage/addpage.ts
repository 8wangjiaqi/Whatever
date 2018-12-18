import { Component } from '@angular/core';
import {NavController, NavParams, App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { ShouyeqqPage } from '../shouyeqq/shouyeqq';
@Component({
  selector: 'page-addpage',
  templateUrl: 'addpage.html',
})
export class AddpagePage {
  // todo = {}
  // logForm() {
  //   console.log(this.todo)
  // }
  private headers=new HttpHeaders({'Content-Type':'application/json'} )
  tel;
  tit;
  des;
  art;
   logForm() {
    console.log('tel',this.tel);
  this.http.post('/api/artical',{
    "username":this.tel,
    "title":this.tit,
    "description":this.des,
    "article":this.art,
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

  

constructor(public app:App,public alertCtrl:AlertController,public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
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
    // this.navCtrl.push(ShouyeqqPage);
    console.log(this.tel);
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

  // ionViewDidLoad() {
  //   //console.log('ionViewDidLoad AddpagePage');
  // }

}
