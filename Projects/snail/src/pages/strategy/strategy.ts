import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { GongluePage } from '../gonglue/gonglue';
import { RegisterPage } from '../register/register';
import { HttpHeaders, HttpClient } from '@angular/common/http';

/**
 * Generated class for the StrategyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-strategy',
  templateUrl: 'strategy.html',
})
export class StrategyPage {
  titleTitle: any;
  write;
  tel;
  public static n;
  private headers=new HttpHeaders({'Content-Type':'application/json'});
  constructor(public http:HttpClient, public params: NavParams,public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
    this.titleTitle =this.navParams.get('title');
    this.tel=RegisterPage.t;
    
    this.http.post('/api/mygl',
    {"username":this.tel},
    {  headers:this.headers}).subscribe((data)=>{
      // this.id=data[idx].ID;
      this.write=data;
      StrategyPage.n=data;
      console.log('3',StrategyPage.n);
      console.log('sha',data);
    });
  }

  ionViewWillEnter() { //page初始化时
    this.tel=RegisterPage.t;
  }

  goGongluePage(idx){
    console.log(idx);

     this.navCtrl.push(GongluePage,{
       username:this.write[idx].username,
       // touxiang:this.write[idx].src,
       title:this.write[idx].title,
       content:this.write[idx].article,
     });
     }



}
