import { Component } from '@angular/core';
import {NavController, NavParams, App, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-nullpage',
  templateUrl: 'nullpage.html',
})
export class NullpagePage {
  private headers=new HttpHeaders({'Content-Type':'application/json'} )
  tel;
  money;
  time;
  style;
  other;

   logForm() {
    console.log(this.tel);
    // console.log(this.pwd);
    this.http.post('/api/write',{
      "username":this.tel,
      "money":this.money,
      "time":this.time,
      "style":this.style,
      "other":this.other,
    },{
      headers:this.headers,
    }).subscribe((data)=>{
      console.log('data:',data);
      this.tel=RegisterPage.t;
      // -1 花销为空 -2 付款方式为空  0 成功 
      switch(data){
        
        case -1:
            this.presentPrompt('花销不能为空');
            break;
        
        case -2:
            this.presentPrompt('付款方式不能为空');
            break;

        case 0:
            this.goHome();
            break;
      }
     })

  }
  constructor(public app:App,public alertCtrl:AlertController,public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {

  }
  presentPrompt(str) {
    console.log(str);
    let alert = this.alertCtrl.create({
      title: '登录失败',
      subTitle:str+'，请重新输入。',
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
    //跳转到tabs页并将用户tel传给tabs
    this.app.getRootNavs()[0].setRoot(TabsPage,{username:this.tel});
   
    console.log(this.tel);
  }
  ionViewWillEnter() { //page初始化时
    this.tel=RegisterPage.t;
  } 
}
