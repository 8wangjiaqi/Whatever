import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-mingxi',
  templateUrl: 'mingxi.html',
})
export class MingxiPage {

  i;
  items={
    money:'',
    time:'',
    style:'',
    other:''
  };
  constructor(public navCtrl: NavController, public params: NavParams) {
   this.items=params.data;
   console.log(this.items);
  }

  deletelist(){

  }
}
