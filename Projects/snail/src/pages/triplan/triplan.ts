import { Component, ViewChild } from '@angular/core';
import {NavController, NavParams, Navbar} from 'ionic-angular';
import { AddplanPage } from '../addplan/addplan';
import { ZongjiPage } from '../zongji/zongji';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-triplan',
  templateUrl: 'triplan.html',
})
export class TriplanPage {
  @ViewChild(Navbar) navBar: Navbar;


  private headers=new HttpHeaders({'Content-Type':'application/json'});
  write;
  tel;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.tel=RegisterPage.t;
    this.http.post('/api/plan',{'username':this.tel},
      {  headers:this.headers}).subscribe((data)=>{
      this.write=data;
      // console.log('1',this.tel);
      console.log(data);
    });
  }

  goaddplan(){
   this.navCtrl.push(AddplanPage);
  }

  // gomingxi2(i){
  //   this.navCtrl.push(ZongjiPage,{index:i,arr:this.arr});
  //   console.log("chuani",i);
  // }
  gomingxi2(i){
    this.navCtrl.push(ZongjiPage,{
      days:this.write[i].days,
      morning:this.write[i].morning,
      afternoon:this.write[i].afternoon,
      evening:this.write[i].evening,
    });
  }
  ionViewDidLoad() { 
    this.navBar.backButtonClick = this.backButtonClick; 
  }
 backButtonClick = (e: UIEvent) => {
    // do something
    this.navCtrl.popToRoot();
  }
}
