import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { MessagePage } from '../message/message';
import { ConcerningPage } from '../concerning/concerning';
import { OpinionPage } from '../opinion/opinion';
import { FansPage } from '../fans/fans';
import { AttentionPage } from '../attention/attention';
import { StrategyPage } from '../strategy/strategy';
import { CollectionPage } from '../collection/collection';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  attention_volume;
  fans_volume;
  constructor(public navCtrl: NavController) {
  }
  ionViewWillEnter() { //page初始化时
    this.attention_volume = AttentionPage.attentionarr.length;
    this.fans_volume = FansPage.fansarr.length;
  }
  
  goRegister(){
    this.navCtrl.push(RegisterPage,{
      title : '登录'
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

  Clear(){
    // console.log("清除");
    localStorage.clear();
  }
}
