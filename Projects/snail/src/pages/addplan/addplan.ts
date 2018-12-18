import { Component } from '@angular/core';
import {NavController, NavParams, App, AlertController } from 'ionic-angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RegisterPage } from '../register/register';
import { TriplanPage } from '../triplan/triplan';


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
  // list={
  //   days:"",
  //   shangwu:"",
  //   zhongwu:"",
  //   xiawu:"",
  //   wanshang:""
  // };
 
  private headers=new HttpHeaders({'Content-Type':'application/json'} )
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


  // saveplan(){
  //   this.navCtrl.pop();

  //   if(window.localStorage.getItem('list2')){
  //     this.arr=JSON.parse(window.localStorage.getItem('list2'));
  //   }
  //   this.list.days = this.days;
  //   console.log(this.days);
  //   this.list.shangwu = this.shangwu;
  //   this.list.zhongwu = this.zhongwu;
  //   this.list.xiawu = this.xiawu;
  //   this.list.wanshang = this.wanshang;
  //   console.log(this.arr);
  //   this.arr.push(this.list);
  //   window.localStorage.setItem('list2', JSON.stringify(this.arr));
  // }
  
}
