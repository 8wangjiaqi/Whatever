import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { AddplanPage } from '../addplan/addplan';
import { ZongjiPage } from '../zongji/zongji';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-triplan',
  templateUrl: 'triplan.html',
})
export class TriplanPage {
  // arr=[];
  private headers=new HttpHeaders({'Content-Type':'application/json'});
  write;
  tel;
  constructor(public http:HttpClient,public navCtrl: NavController, public params: NavParams) {
    this.tel=RegisterPage.t;
    this.http.post('/api/plan',{'username':this.tel},
      {  headers:this.headers}).subscribe((data)=>{
      this.write=data;
      // console.log('1',this.tel);
      console.log(data);
    });
  }

  ionViewWillEnter() { //page初始化时
    this.tel=RegisterPage.t;
  }

  goaddplan(){
   this.navCtrl.push(AddplanPage);
  }

  // ionViewWillEnter() {  
  //   this.arr=[];
  //   this.arr=JSON.parse(window.localStorage.getItem('list2'));
  // }
  // ionViewDidLoad() {  
  //   this.arr=JSON.parse(window.localStorage.getItem('list2'));   
  // }
  // gomingxi2(i){
  //   this.navCtrl.push(ZongjiPage);
  //   console.log("chuani",i);
  // }

}
