import { Component } from '@angular/core';
import {NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JizhangbenPage } from '../jizhangben/jizhangben';

@Component({
  selector: 'page-mingxi',
  templateUrl: 'mingxi.html',
})
export class MingxiPage {
  money1;
  time1;
  style1;
  other1;
  ID;
  i;
  private headers=new HttpHeaders({'Content-Type':'application/json'});
  items={
    money:'',
    shijian:'',
    style:'',
    other:'',
    ID:''
  };
  constructor(public alertCtrl:AlertController,public http:HttpClient,public navCtrl: NavController, public params: NavParams) {
   this.items=params.data;
   this.ID=params.data.ID;
  //  console.log(params.data);
  }
  logForm(){
    
  }
  add(){
    // console.log(this.ID);
    this.http.post('/api/zhushou',{
      'ID':this.items.ID,
      'time':this.time1,
      'style':this.style1,
      'money':this.money1,
      'other':this.other1
    },
    {  headers:this.headers}).subscribe((data)=>{
      console.log(data);
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
  });
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
    this.navCtrl.push(JizhangbenPage);
  }
  
  onFocus(){
    // console.log('q',this.other1);
    this.other1=this.items.other;
    this.time1=this.items.shijian;
    // console.log(this.items.shijian);
    this.style1=this.items.style;
    this.money1=this.items.money;
  }

  del(){
    this.http.post('/api/zhushou/del',{
      'ID':this.items.ID,
    },
    {  headers:this.headers}).subscribe((data)=>{
      // console.log(data);
      this.navCtrl.push(JizhangbenPage);
    });
  }

}
