import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessagePage } from '../message/message';
import { ConcerningPage } from '../concerning/concerning';
import { OpinionPage } from '../opinion/opinion';
import { FansPage } from '../fans/fans';
import { AttentionPage } from '../attention/attention';
import { StrategyPage } from '../strategy/strategy';
import { CollectionPage } from '../collection/collection';
import { MyselfPage } from '../myself/myself';
import { RegisterPage } from '../register/register';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  attention_volume;
  fans_volume;
  // public static user = {
  //   headerSrc: "assets/imgs/header_1.jpg",
  //   username: "杏仁",
  //   autograph: "跟我一起旅游吧"
  // };
  user_display;
  private headers=new HttpHeaders({'Content-Type':'application/json'});
  gonglue;
  tel;
  constructor(public navCtrl: NavController,public http:HttpClient,) {
    // this.user_display = ContactPage.user;
    this.tel=RegisterPage.t;
    this.http.post('/api/contact',{'username':this.tel},
      {  headers:this.headers}).subscribe((data)=>{
      this.gonglue=data;
      // console.log('1',this.tel);
      console.log(data);
    });
    if(this.gonglue.username==null){
      this.gonglue.username = "请点击登录"
    }
    if(this.gonglue.headerSrc==null){
      this.gonglue.headerSrc = "assets/imgs/un_register.jpg"
    }
  }
  ionViewWillEnter() { //page初始化时
    this.attention_volume = AttentionPage.attentionarr.length;
    this.fans_volume = FansPage.fansarr.length;
    this.tel=RegisterPage.t;
  }
  
  goMyself(){
    this.navCtrl.push(MyselfPage,{
      title : '个人信息'
    });
  }  
  goMessage(){
    this.navCtrl.push(MessagePage,{
      title : '我的消息'
    });
  }  
  goConcerning(){
    this.navCtrl.push(ConcerningPage,{
      title : '关于我们'
    });
  }  
  goOpinion(){
    this.navCtrl.push(OpinionPage,{
      title : '意见反馈'
    });
  }  
  goFans(){
    this.navCtrl.push(FansPage,{
      title : '全部粉丝'
    });
  }  
  goAttention(){
    this.navCtrl.push(AttentionPage,{
      title : '我的关注'
    });
  }
  goStrategy(){
    this.navCtrl.push(StrategyPage,{
      title : '我的攻略'
    });
  }
  goCollection(){
    this.navCtrl.push(CollectionPage,{
      title : '我的收藏'
    });
  }
  goRegister(){
    this.navCtrl.push(RegisterPage,{
      title : '登录'
    });
  }
  Clear(){
    localStorage.clear();
  }
  goJudge(){
    if(this.gonglue.username == "请点击登录"){
      this.goRegister();
    }else{
      this.goMyself();
    }
  }
  
}
