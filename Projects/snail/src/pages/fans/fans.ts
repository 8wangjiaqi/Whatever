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
    // this.http.post('/api/guanzhu/h',{
    //   "username":this.tel,
    // },{
    //   headers:this.headers,
    // }).subscribe((data)=>{
    //   this.write=data;
    //   console.log('粉丝',this.write);
    // });
    this.http.post('/api/guanzhu/a',{
      "username":this.tel,
    },{
      headers:this.headers,
    }).subscribe((data)=>{
      
      this.src=data;
    });
    this.http.post('/api/guanzhu/aa',{
      "username":this.tel,
    },{
      headers:this.headers,
    }).subscribe((data)=>{
      
      this.srcc=data;
      // console.log('src',data);
    });

    
  }
  src1;
  srcc2;
  srcc3;
  username;
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

    this.http.post('/api/guanzhu/h',{
      "username":this.tel,
    },{
      headers:this.headers,
    }).subscribe((data)=>{
      this.write=data;
      console.log('粉丝',this.write);
      // for(var i=0;i<this.write.length;i++){
      //   this.username=this.write[i].username;
      //   console.log('username',this.username);
      //   this.http.post('/api/guanzhu/aa',
      //   {
      //     "username":this.username,
      //   },
    
      //   {  headers:this.headers}).subscribe((data)=>{
      //       // console.log('this.srcc1',this.srcc1);
      
//?把好几个对象变成一个

      //       this.srcc1=data;
      //       console.log(data[0]);
      //       this.srcc3=data[0].src;
      //       console.log('this.srcc1',this.srcc1);



      //       // var arr = []
      //       // for (let i in data[0]) {
      //       // arr.push(data[0][i]); //属性
      //       // }
      //       // console.log(arr);
      //       // let newObj = {};
 
      //       // console.log(Object.assign(newObj,data[0],data[0]));
      // });  
       
  // }
    });
    // console.log('粉丝1',this.write);
  

 
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
  show(i){
    this.index = i;
  }
}
