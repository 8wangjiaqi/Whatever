import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-mingxi',
  templateUrl: 'mingxi.html',
})
export class MingxiPage {

  i;
  userInfo={
    goodtype:'',
    money:'',
    time:'',
    typemoney:'',
    more:'',
  };
  constructor(public navCtrl: NavController, public params: NavParams) {
   
  }

  ionViewDidLoad() {  
    this.i = this.params.data.index;
    this.userInfo=JSON.parse(window.localStorage.getItem('list1'))[this.i];
    console.log(window.localStorage.getItem('list1'));
    //console.log(1)
    console.log(this.userInfo);

  }
  deletelist(){

    this.navCtrl.pop();
    console.log("删除的序列号:",this.i);
    console.log(window.localStorage.getItem('list1'));
    console.log(JSON.parse(window.localStorage.getItem('list1')));
  
    var arr=JSON.parse(window.localStorage.getItem('list1'))
    arr.splice(this.i,1);

   window.localStorage.setItem('list1',JSON.stringify(arr));
  }
}
