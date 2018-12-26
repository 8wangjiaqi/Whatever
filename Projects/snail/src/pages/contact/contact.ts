import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
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
  a;
  b;
  nu;
  user_display;
  private headers=new HttpHeaders({'Content-Type':'application/json'});
  gonglue;
  tel;
  num;
  b1;
  nu1;
  constructor(public app:App,public navCtrl: NavController,public http:HttpClient,) {
    // this.user_display = ContactPage.user;
    this.tel=RegisterPage.t;
    this.http.post('/api/contact',{'username':this.tel},
      {  headers:this.headers}).subscribe((data)=>{
      this.gonglue=data;
      this.num=StrategyPage.n;
    });
    
    this.http.post('/api/home/a',{"username":this.tel},
    {  headers:this.headers}).subscribe((data)=>{
    // this.id=data[idx].ID;
    this.a=data;
    // console.log()
    // console.log('1',this.tel);
    console.log('a:',data);
  });
  this.http.post('/api/mygl',
  {"username":this.tel},
  {  headers:this.headers}).subscribe((data)=>{
    // this.id=data[idx].ID;
    // this.write=data;
    this.b=data;
    this.nu=this.b.length;
  });
  // this.http.post('/api/guanzhu',{
  //   "username":this.tel,
  // },{
  //   headers:this.headers,
  // }).subscribe((data)=>{
  //   this.b1=data;
    
  //   this.nu1=this.b1.length;
  // });
    // if(this.gonglue.username==undefined){
    //   this.gonglue.username = "请点击登录"
    // }
    // if(this.gonglue.headerSrc==null){
    //   this.gonglue.headerSrc = "assets/imgs/un_register.jpg"
    // }
  }
  ionViewWillEnter() { //page初始化时
    this.attention_volume = AttentionPage.attentionarr.length;
    // this.fans_volume = FansPage.fansarr.length;
    this.tel=RegisterPage.t;
    // if(this.gonglue[0].username==undefined){
    //   this.gonglue[0].username = "请点击登录"
    // }
    // if(this.gonglue.headerSrc==null){
    //   this.gonglue.headerSrc = "assets/imgs/un_register.jpg"
    // }
    this.http.post('/api/guanzhu',{
      "username":this.tel,
    },{
      headers:this.headers,
    }).subscribe((data)=>{
      this.b1=data;
      
      this.nu1=this.b1.length;
    });

    this.http.post('/api/guanzhu/h',{
      "username":this.tel,
    },{
      headers:this.headers,
    }).subscribe((data)=>{
      this.b2=data;
      
      this.nu2=this.b2.length;
    });
  }
  nu2;
  b2;
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
    // this.navCtrl.push(RegisterPage,{
    //   title : '登录'
    // });
    this.app.getRootNav().setRoot(RegisterPage);

    // this.navCtrl.popToRoot();

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
