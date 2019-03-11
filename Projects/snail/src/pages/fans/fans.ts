import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, } from 'ionic-angular';
import { Events } from 'ionic-angular'; 
import { AttentionPage } from '../attention/attention';
import { RegisterPage } from '../register/register';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
/**
 * Generated class for the FansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-fans',
  templateUrl: 'fans.html',
})
export class FansPage {
  titleTitle: any;
  index;
  fans;
  i;
  // public static fansarr=[
  //   {
  //     status:1,
  //     headerSrc:"assets/imgs/header_4.jpg",
  //     name:"佳琦琦琦",
  //     signature:4,
  //     buttonValue:"互相关注"
  //   },
  //   {
  //     status:0,
  //     headerSrc:"assets/imgs/header_5.jpg",
  //     name:"咿呀呀",
  //     signature:3,
  //     buttonValue:"+ 关注"
  //   },
  //   {
  //     status:1,
  //     headerSrc:"assets/imgs/header_2.jpg",
  //     name:"123",
  //     signature:2,
  //     buttonValue:"互相关注"
  //   },
  //   {
  //     status:0,
  //     headerSrc:"assets/imgs/header_3.jpg",
  //     name:"lemon",
  //     signature:2,
  //     buttonValue:"+ 关注"
  //   },
  // ];
  tel;
  write;
  src;
  srcc;
  private headers=new HttpHeaders({'Content-Type':'application/json'} );
  constructor(public http:HttpClient,public events: Events,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.titleTitle =this.navParams.get('title');
    // this.fans = FansPage.fansarr;
    this.tel=RegisterPage.t;
   
    // this.http.post('/api/guanzhu/a',{
    //   "username":this.tel,
    // },{
    //   headers:this.headers,
    // }).subscribe((data)=>{
      
    //   this.src=data;
    // });
    // this.http.post('/api/guanzhu/aa',{
    //   "username":this.tel,
    // },{
    //   headers:this.headers,
    // }).subscribe((data)=>{
      
    //   this.srcc=data;
    //   // console.log('src',data);
    // });

    
  }
  src1;
  username;
  h;
  hhh;
  ionViewWillEnter() { //page初始化时
    this.tel=RegisterPage.t;
    
    this.http.post('/api/guanzhu/hh',{
      "username":this.tel,
    },{
      headers:this.headers,
    }).subscribe((data1)=>{
      this.src1=data1;
      console.log('srcqqqqq',data1);
    });


    // this.http.post('/api/guanzhu/h',{
    //   "username":this.tel,
    // },{
    //   headers:this.headers,
    // }).subscribe((data)=>{
    //   this.h=data;
    //   for (var i=0;i<this.h.length;i++){
    //     console.log('h',this.h[i]);
    //     this.http.post('/api/guanzhu/hhh',{
    //       "username":this.tel,
    //       "guanusername":this.h[i]
    //     },{
    //       headers:this.headers,
    //     }).subscribe((data1)=>{
    //       console.log('h[i]',this.h[i]);
    //       this.hhh=data1;
    //       console.log('data1',data1);
    //     });
    //   }
      
     
    // });
 

 
  } 
  
  // showConfirm($event) {
  //   if ($event.target.innerHTML == "互相关注") {
  //     const confirm = this.alertCtrl.create({
  //       message: '确定不再关注此人？',
  //       buttons: [
  //         {
  //           text: '取消',
  //           handler: () => {
  //           }
  //         },
  //         {
  //           text: '确定',
  //           handler: () => {
  //             for(this.i = 0;this.i < AttentionPage.attentionarr.length;this.i++){
  //               if((FansPage.fansarr[this.index].headerSrc == AttentionPage.attentionarr[this.i].headerSrc)
  //               &&(FansPage.fansarr[this.index].signature == AttentionPage.attentionarr[this.i].signature)
  //               &&(FansPage.fansarr[this.index].name == AttentionPage.attentionarr[this.i].name)){
  //                 AttentionPage.attentionarr.splice(this.i, 1);
  //               }
  //             }
  //             FansPage.fansarr[this.index].status = 0;
  //             FansPage.fansarr[this.index].buttonValue = "+ 关注";
  //           }
  //         }
  //       ]
  //     });
  //     confirm.present();
  //   } else {
  //     FansPage.fansarr[this.index].buttonValue = "互相关注";
  //     FansPage.fansarr[this.index].status = 1;
  //     AttentionPage.attentionarr.push(FansPage.fansarr[this.index]);
  //   }
  // }
 buttonValue = "+关注";
   showConfirm(i) {
      // const confirm = this.alertCtrl.create({
      //   message: '确定不再关注此人？',
      //   buttons: [
      //     {
      //       text: '取消',
      //       handler: () => {
      //       }
      //     },
      //     {
      //       text: '确定',
      //       handler: () => {
              // for(this.i = 0;this.i < AttentionPage.attentionarr.length;this.i++){
              //   if((FansPage.fansarr[this.index].headerSrc == AttentionPage.attentionarr[this.i].headerSrc)
              //   &&(FansPage.fansarr[this.index].signature == AttentionPage.attentionarr[this.i].signature)
              //   &&(FansPage.fansarr[this.index].name == AttentionPage.attentionarr[this.i].name)){
              //     AttentionPage.attentionarr.splice(this.i, 1);
              //   }
              // }
              // FansPage.fansarr[this.index].status = 0;
              // FansPage.fansarr[this.index].buttonValue = "+ 关注";
              this.buttonValue = "已关注";

            // }
          }
        // ]
      // });
      // confirm.present();
    // } 
     


  show(i){
    this.index = i;
  }
}
