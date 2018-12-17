import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-pinglun',
  templateUrl: 'pinglun.html',
})
export class PinglunPage {
 comment=[];
 flag=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.comment=navParams.data;
  }

  ionViewDidLoad() {
    // for(var i=0;i<this.comment['comment'].length;i++){
    //   this.flag[i]=0;
    // }
  }
  //点赞
  inceresezan(idx){
    //for(var j=0;j<this.comment['comment'].length;j++){
      if(!this.flag[idx]){
        this.comment['comment'][idx].zan=this.comment['comment'][idx].zan+1;
        this.flag[idx]=1;
        console.log('点赞成功',idx);
      }else{
        this.comment['comment'][idx].zan=this.comment['comment'][idx].zan-1;
        this.flag[idx]=0;
        console.log('取消点赞',idx);
      }
      console.log(this.flag);
    }
    }
  //}

