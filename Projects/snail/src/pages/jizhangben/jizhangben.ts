import { Component, ViewChild} from '@angular/core';
import {NavController, NavParams,Navbar} from 'ionic-angular';
import { NullpagePage } from '../nullpage/nullpage';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { MingxiPage } from '../mingxi/mingxi';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
// import { TabsPage } from '../tabs/tabs';



@Component({
  selector: 'page-jizhangben',
  templateUrl: 'jizhangben.html',

})
export class JizhangbenPage {
  @ViewChild(Navbar)  navBar: Navbar;

  private headers=new HttpHeaders({'Content-Type':'application/json'});
  write;
  tel;
  // item={
  //   money:'',
  //   time:'',
  //   style:'',
  //   other:''
  // };
  // arr=[];
  constructor(public http:HttpClient,public navCtrl: NavController, public params: NavParams) {
    this.tel=RegisterPage.t;
    this.http.post('/api/zhangben',{'username':this.tel},
      {  headers:this.headers}).subscribe((data)=>{
      this.write=data;
      // console.log('1',this.tel);
      console.log(data);
    });
    // this.item=params.data;
    // console.log(this.item);
  }
  ionViewDidLoad() { 
    this.navBar.backButtonClick = this.backButtonClick;  
  }
  gonullpage(){
    this.navCtrl.push(NullpagePage);
  }
  gomingxipage(i){
    // console.log(i);
    // console.log( this.write[i]);
    this.navCtrl.push(MingxiPage,{
      money:this.write[i].money,
      time:this.write[i].time,
      style:this.write[i].style,
      other:this.write[i].other

    });
  }
  // goHomePage(){
  //   this.navCtrl.push(HomePage);
  // }
  backButtonClick = (e: UIEvent) => {
    this.navCtrl.pop();
  }
}

