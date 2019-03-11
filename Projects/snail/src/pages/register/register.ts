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
  public static t;

  constructor(public app:App,public alertCtrl:AlertController,public http:HttpClient,public navCtrl: NavController, public navParams: NavParams){
  RegisterPage.t=this.tel;
  }
  
  goEnroll(){
    this.navCtrl.push(EnrollPage,{
      title : '注册'
    });
    // console.log("EnrollPage");
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
  }).subscribe((data)=>{
    RegisterPage.t=this.tel;
    // console.log(data);
    // console.log(this.tel);
        //1成功 0密码空 -1用户不存在 -2密码错误 -3用户名空
    switch(data){
      case 0:
          this.presentPrompt('密码不能为空');
          break;
      case 1:
          this.goHome();
          break;
      case -1:
          this.presentPrompt('该用户名未注册');
          break;
      case -2:
          this.presentPrompt('密码错误');
          break;
        
      case -3:
          this.presentPrompt('用户名不能为空');
          break;
    }
  });
  
//   this.http.post('/api/home',
//   {  headers:this.headers}).subscribe((data)=>{
//   // this.id=data[idx].ID;
//   this.search_items=data;
//   console.log(data);
//   for(var i=0;i<this.search_items.length;i++){
//     this.guanusername=this.search_items[i].username;
//     this.http.post('/api/guanzhu/c',
//     {
//       "username":this.tel,
//       "guanusername":this.guanusername
//     },

//     {  headers:this.headers}).subscribe((data)=>{
//         console.log('zhe');
//       // this.num=data;
//       // console.log('num',this.num);
//   });
//   }
  
// });

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
          // console.log('Confirm clicked');
        }
      }
    ]
  });
  alert.present();
}
search_items;
guanusername;

}