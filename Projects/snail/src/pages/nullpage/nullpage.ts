import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-nullpage',
  templateUrl: 'nullpage.html',
})
export class NullpagePage {
goodtype;
money;
time;
typemoney;
more;
userInfo={
  goodtype:'',
  money:'',
  time:'',
  typemoney:'',
  more:'',
}
arr1=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
  }
  getSubmit(){
    this.navCtrl.pop();
    if(window.localStorage.getItem('list1')){
      this.arr1=JSON.parse(window.localStorage.getItem('list1'));
    }
    this.userInfo.goodtype = this.goodtype||"";
    this.userInfo.money = this.money;
    this.userInfo.time = this.time||"";
    this.userInfo.typemoney = this.typemoney;
    this.userInfo.more = this.more;
    //console.log(2)
    console.log(this.userInfo);
    if(this.userInfo.money!=null){
      this.arr1.push(this.userInfo);
    }
    window.localStorage.setItem('list1', JSON.stringify(this.arr1));
    // if(this.money!=null){
    //   this.navCtrl.push(JizhangbenPage);
    // }
  }
}
