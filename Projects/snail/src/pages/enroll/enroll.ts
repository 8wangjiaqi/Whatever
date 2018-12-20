import { Component } from '@angular/core';
import { NavController, NavParams,App, AlertController,} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the EnrollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-enroll',
  templateUrl: 'enroll.html',
})
export class EnrollPage {
  private headers=new HttpHeaders({'Content-Type':'application/json'} )
  tel;
  pwd;
   logForm() {
    console.log(this.tel);
    console.log(this.pwd);
    this.http.post('/api/send',{
      "tel":this.tel,
      "pwd":this.pwd,
    },{
      headers:this.headers,
    }).subscribe((data)=>{
      console.log(data);
      // -1 用户名为空 -2 密码为空 0 成功 1 用户名重复
      switch(data){
        case -1:
            this.presentPrompt('用户名不能为空');
            break;
        
        case -2:
            this.presentPrompt('密码不能为空');
            break;

        case 1:
            this.presentPrompt('用户名重复');
            break;
        case 0:
            this.goHome();
            break;
      }
    })

  }
  constructor(public app:App,public alertCtrl:AlertController,public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  goTabs(){
    this.navCtrl.push(TabsPage);
  }
  // goRegister(){
  //   this.navCtrl.push(RegisterPage);
  // }
  goHome(){
    //跳转到tabs页并将用户tel传给tabs
    // this.app.getRootNavs()[0].setRoot(TabsPage,{username:this.tel});
    this.navCtrl.push(RegisterPage);
    console.log(this.tel);
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
}
