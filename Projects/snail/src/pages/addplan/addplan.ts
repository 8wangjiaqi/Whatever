import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-addplan',
  templateUrl: 'addplan.html',
})
export class AddplanPage {
  days;
  shangwu;
  zhongwu;
  xiawu;
  wanshang;
  arr=[];
  list={
    days:"",
    shangwu:"",
    zhongwu:"",
    xiawu:"",
    wanshang:""
  };
  
  constructor(public navCtrl: NavController, public params: NavParams) {
  }

  ionViewDidLoad() {
   
  }
  saveplan(){
    this.navCtrl.pop();

    if(window.localStorage.getItem('list2')){
      this.arr=JSON.parse(window.localStorage.getItem('list2'));
    }
    this.list.days = this.days;
    this.list.shangwu = this.shangwu;
    this.list.zhongwu = this.zhongwu;
    this.list.xiawu = this.xiawu;
    this.list.wanshang = this.wanshang;
    console.log(this.arr);
    this.arr.push(this.list);
    window.localStorage.setItem('list2', JSON.stringify(this.arr));
  }
  
}
