import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-zongji',
  templateUrl: 'zongji.html',
})
export class ZongjiPage {
  list={
    days:"",
    shangwu:"",
    zhongwu:"",
    xiawu:"",
    wanshang:""
  };
  i;
  arr2=[];
  constructor(public navCtrl: NavController, public params: NavParams) {
  }

  ionViewDidLoad() {
    this.i = this.params.data.index;
    this.list=JSON.parse(window.localStorage.getItem('list2'))[this.i];
    console.log(window.localStorage.getItem('list1'));
    console.log(this.i);
    console.log(this.list);

  }
  deletelist(){
    this.navCtrl.pop();
    var arr2=JSON.parse(window.localStorage.getItem('list2'))
    arr2.splice(this.i,1);

    window.localStorage.setItem('list2',JSON.stringify(arr2));
  }

}
