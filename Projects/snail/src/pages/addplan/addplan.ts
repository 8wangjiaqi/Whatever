import { Component } from '@angular/core';
import {NavController, NavParams, AlertController, App } from 'ionic-angular';
import { TriplanPage } from '../triplan/triplan';
import { RegisterPage } from '../register/register';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'page-addplan',
  templateUrl: 'addplan.html',
})
export class AddplanPage {
  // days;
  // shangwu;
  // zhongwu;
  // xiawu;
  // wanshang;
  // arr=[];
  // constructor(public navCtrl: NavController, public params: NavParams) {
  //   console.log(this.days);
  // }

  // saveplan(){
  //   this.navCtrl.push(TriplanPage,{
 
  //     days:this.days,
  //     shangwu:this.shangwu,
  //     zhongwu:this.zhongwu,
  //     xiawu:this.xiawu,
  //     wanshang:this.wanshang
  //   });
  // }

  private headers=new HttpHeaders({'Content-Type':'application/json'} );
  tel;
  days;
  morning;
  afternoon;
  evening;
  logForm() {
    console.log(this.tel);
    // console.log(this.pwd);
    this.http.post('/api/addplan',{
      "username":this.tel,
      "days":this.days,
      "morning":this.morning,
      "afternoon":this.afternoon,
      "evening":this.evening,
    },{
      headers:this.headers,
    }).subscribe((data)=>{
      console.log('data:',data);
      this.tel=RegisterPage.t;
      // -1 数据为空  0 成功 
      switch(data){
        
        case -1:
            this.presentPrompt('计划不能为空');
            break;

        case 0:
            this.goHome();
            break;
      }
     })

    }
  constructor(public app:App,public alertCtrl:AlertController,public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    // console.log('days',this.days);
  }

  presentPrompt(str) {
    console.log(str);
    let alert = this.alertCtrl.create({
      title: '添加失败',
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
    this.navCtrl.push(TriplanPage);
    console.log(this.tel);
  }
  ionViewWillEnter() { //page初始化时
    this.tel=RegisterPage.t;
  } 

}
