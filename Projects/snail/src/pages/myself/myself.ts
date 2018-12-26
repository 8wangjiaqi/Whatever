import { Component } from '@angular/core';
import { NavController, NavParams, App, AlertController } from 'ionic-angular';
import { SubHeaderPage } from '../sub-header/sub-header';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactPage } from '../contact/contact';


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
  logForm() {
  this.http.post('/api/usermessage/a',{
    "username":this.tel,
    "signature":this. signature,
  },{
    headers:this.headers,
  }).subscribe((data)=>{
    // this.tel=RegisterPage.t;
    switch(data){ 
      case 0:
        this.navCtrl.push(ContactPage);
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

  goHome(){
    // this.app.getRootNavs()[0].setRoot(TabsPage,{username:this.tel});
    // this.navCtrl.popToRoot();
    this.navCtrl.push(ContactPage);
    // console.log('1',this.tel);
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
