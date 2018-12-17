import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { AddplanPage } from '../addplan/addplan';
import { ZongjiPage } from '../zongji/zongji';

@Component({
  selector: 'page-triplan',
  templateUrl: 'triplan.html',
})
export class TriplanPage {
  arr=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goaddplan(){
   this.navCtrl.push(AddplanPage);
  }

  ionViewWillEnter() {  
    this.arr=[];
    this.arr=JSON.parse(window.localStorage.getItem('list2'));
  }
  ionViewDidLoad() {  
    this.arr=JSON.parse(window.localStorage.getItem('list2'));   
  }
  gomingxi2(i){
    this.navCtrl.push(ZongjiPage,{index:i,arr:this.arr});
    console.log("chuani",i);
  }

}
