import { Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { NullpagePage } from '../nullpage/nullpage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterPage } from '../register/register';



@Component({
  selector: 'page-jizhangben',
  templateUrl: 'jizhangben.html',

})
export class JizhangbenPage {

  private headers=new HttpHeaders({'Content-Type':'application/json'});
  write;
  tel;
  constructor(public http:HttpClient,public navCtrl: NavController, public params: NavParams) {
    this.tel=RegisterPage.t;
    this.http.post('/api/zhangben',{'username':this.tel},
      {  headers:this.headers}).subscribe((data)=>{
      this.write=data;
      // console.log('1',this.tel);
      console.log(data);
    });
  }

  ionViewWillEnter() { //page初始化时
    this.tel=RegisterPage.t;
  }
  gonullpage(){
    this.navCtrl.push(NullpagePage);
  }

}

