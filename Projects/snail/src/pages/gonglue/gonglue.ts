import { Component} from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { PinglunPage } from '../pinglun/pinglun';
import { ShouyeqqPage } from '../shouyeqq/shouyeqq';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-gonglue',
  templateUrl: 'gonglue.html',
})
export class GongluePage {
  private headers=new HttpHeaders({'Content-Type':'application/json'});
  userInfo={
    name:'',
    test:'',
    touxiang:'',
    title:'',
    content:'',
    imgUrl:'',
    time:'',
    comment:[],
    buttonValue:''
  };
tel;
a;
guanusername;
buttonValue;
  constructor(public alertCtrl:AlertController,public http:HttpClient,public navCtrl: NavController, public params: NavParams) {
    this.tel=RegisterPage.t;
    this.guanusername=params.data.username;
    // console.log("chuan",params.data.username);

    this.http.post('/api/guanzhu/d',{
      "guanusername":params.data.username,
      "username":this.tel,
    },
    {  headers:this.headers}).subscribe((data)=>{
    // console.log("chuan",params.data.username);
    // console.log('gongluo',data);
    this.a=data;
    console.log('data',data);
    if(data==0){
        this.buttonValue="已关注";
        console.log('已关注');
    }else if(data==2){
        console.log('自己');
    }else{
      console.log('+关注',data)
      this.buttonValue="+关注";
      console.log('未关注');

    }
    });
    this.userInfo=params.data;
    console.log('params.data',params.data);
    // this.userInfo=this.params.get('comment');
  }

  showConfirm(){
    console.log('zhe',this.guanusername);
    console.log('aa',this.a);
    if(this.a==0){
      //0 已关注
      const confirm = this.alertCtrl.create({
        message: '确定不再关注此人？',
        buttons: [
          {
            text: '取消',
            handler: () => {
            }
          },
          {
            text: '确定',
            handler: () => {
              console.log('bb', this.a);
              this.http.post('/api/guanzhu/f', {
                "guanusername": this.guanusername,
                "username": this.tel,
              },
                { headers: this.headers }).subscribe((data) => {
                  // console.log(data);
                  this.buttonValue = "+关注";
                  this.a = 1;
                });
            }
          },
        ]
      });
      confirm.present();
  
  }else if( this.a==1){
    // console.log('aaa',this.a);
    this.buttonValue = "已关注";
    this.a = 0;
    this.http.post('/api/guanzhu/g', {
      "guanusername": this.guanusername,
      "username": this.tel,
    },
      { headers: this.headers }).subscribe((data) => {
        // console.log(data);
        // this.buttonValue = "已关注";
        // this.a = 0;
      });
  }else{
    console.log('自己');
  }

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
    this.tel=RegisterPage.t;
  }
}
