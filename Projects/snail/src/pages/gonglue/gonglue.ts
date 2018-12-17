import { Component} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { PinglunPage } from '../pinglun/pinglun';
import { ShouyeqqPage } from '../shouyeqq/shouyeqq';


@Component({
  selector: 'page-gonglue',
  templateUrl: 'gonglue.html',
})
export class GongluePage {
  userInfo={
    name:'',
    test:'',
    touxiang:'',
    title:'',
    content:'',
    imgUrl:'',
    time:'',
    comment:[]
  };

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.userInfo=params.data;
    // this.userInfo=this.params.get('comment');
  }
  goHomePage(){
    this.navCtrl.push(ShouyeqqPage);
  }
  goPinglunPage(){
    this.navCtrl.push(PinglunPage,{
      comment:this.userInfo.comment
    });
  }
  ionViewDidLoad() {
    // let modelData: string = '用户名：' + this.params.get('content');
    // console.log(modelData);
  }
}
