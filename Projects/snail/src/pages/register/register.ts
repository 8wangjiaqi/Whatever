import { Component } from '@angular/core';
import { NavController, NavParams,App } from 'ionic-angular';
import { EnrollPage } from '../enroll/enroll';
import { TabsPage } from '../tabs/tabs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private headers=new HttpHeaders({'Content-Type':'application/json'} )

  tel;
  pwd;

  constructor(public app:App,public alertCtrl:AlertController,public http:HttpClient,public navCtrl: NavController, public navParams: NavParams){
  // RegisterPage.t=this.tel;
  }
  
  goEnroll(){
    this.navCtrl.push(EnrollPage,{
      title : '注册'
    });
    console.log("EnrollPage");
  }  
  goTabs(){
    this.navCtrl.push(TabsPage);
  }

  //post
doPost(){
  this.http.post('/api',{
    "tel":this.tel,
    "pwd":this.pwd
  },{
    headers:this.headers,
    //responseType:"text"  //返回字符串形式
  }).subscribe((data)=>{
    console.log(data);
    console.log(this.tel);
        //1成功 0密码空 -1用户不存在 -2密码错误 -3用户名空
    switch(data){
      case 0:
          this.presentPrompt('密码不能为空');
          break;
      case 1:
          this.goHome();
          break;
      case -1:
          this.presentPrompt('该手机号未注册');
          break;
      case -2:
          this.presentPrompt('密码错误');
          break;
    }
  });
}

goHome(){
  //跳转到tabs页并将用户tel传给tabs
  this.app.getRootNavs()[0].setRoot(TabsPage,{username:this.tel});
 
  console.log(this.tel);
}

presentPrompt(str) {
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


}