import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-zongji',
  templateUrl: 'zongji.html',
})
export class ZongjiPage {
  list={
    days:"",
    morning:"",
    afternoon:"",
    evening:"",
  };
  i;
  arr2=[];
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.list=params.data;
    console.log(this.list);
  }

 
  deletelist(){
    this.navCtrl.pop();
  }

}
