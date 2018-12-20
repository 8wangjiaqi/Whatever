import { Component } from '@angular/core';
import { NavController, NavParams, App, AlertController } from 'ionic-angular';
import { SubHeaderPage } from '../sub-header/sub-header';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the MyselfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-myself',
  templateUrl: 'myself.html',
})
export class MyselfPage {
  titleTitle: any;
  private headers=new HttpHeaders({'Content-Type':'application/json'} )
  tel;
  username
  signature;
  ousername
  logForm() {
  console.log('tel',this.tel);
  this.http.post('/api/usermessage/a',{
    "username":this.tel,
    "signature":this. signature,
    "ousername":this.ousername,
  },{
    headers:this.headers,
  }).subscribe((data)=>{
    // this.tel=RegisterPage.t;
    console.log('data',data);
    // this.id=data;
    // -1 数据不完整  0 成功
    switch(data){
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
  this.titleTitle =this.navParams.get('title');
}

ionViewWillEnter() { //page初始化时
  this.tel=RegisterPage.t;
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
    // this.app.getRootNavs()[0].setRoot(TabsPage,{username:this.tel});
    // this.navCtrl.popToRoot();
    this.navCtrl.push(TabsPage);
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


  ionViewDidLoad() {
    console.log('ionViewDidLoad MyselfPage');
  }
  subHeader(){
    this.navCtrl.push(SubHeaderPage,{
      title : '个人头像'
    });
  } 
}
