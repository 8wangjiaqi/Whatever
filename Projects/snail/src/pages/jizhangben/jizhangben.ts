import { Component,ViewChild } from '@angular/core';
import {NavController, NavParams,Navbar} from 'ionic-angular';
import { NullpagePage } from '../nullpage/nullpage';
import { MingxiPage } from '../mingxi/mingxi';



@Component({
  selector: 'page-jizhangben',
  templateUrl: 'jizhangben.html',

})
export class JizhangbenPage {
  @ViewChild(Navbar)  navBar: Navbar;
  arr=[];
  i;

  constructor(public navCtrl: NavController, public params: NavParams) {

  }

  ionViewWillEnter() {  
    this.arr=[];
    this.arr=JSON.parse(window.localStorage.getItem('list1'));
  }
  ionViewDidLoad() { 
    this.navBar.backButtonClick = this.backButtonClick;
    this.arr=JSON.parse(window.localStorage.getItem('list1'));   
  }
  backButtonClick = (e: UIEvent) => {
    this.navCtrl.pop();
  }
  gonullpage(){
    this.navCtrl.push(NullpagePage);
  }
  gomingxi(i){
    this.navCtrl.push(MingxiPage,{index:i,arr:this.arr});
    console.log("chuani",i);
  }

}

