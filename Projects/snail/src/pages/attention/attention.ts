import { Component  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { FansPage } from '../fans/fans';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterPage } from '../register/register';
/**
 * Generated class for the AttentionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-attention',
  templateUrl: 'attention.html',
})
export class AttentionPage {
  i;
  index;
  myEvent;
  titleTitle: any;
  tel;
  write;
  src;
  src1;
  ID;
  public static attentionarr=[
    {
      status:1,
      headerSrc:"assets/imgs/header_4.jpg",
      name:"佳琦琦琦",
      signature:4,
      buttonValue:"互相关注",
    },
    {
      status:0,
      headerSrc:"assets/imgs/header_7.jpg",
      name:"大头大头",
      signature:4,
      buttonValue:"√ 已关注"
    },
    {
      status:0,
      headerSrc:"assets/imgs/header_1.jpg",
      name:"hhh_",
      signature:2,
      buttonValue:"√ 已关注"
    },
    {
      status:0,
      headerSrc:"assets/imgs/header_6.jpg",
      name:"啊哈哈",
      signature:3,
      buttonValue:"√ 已关注"
    },
    {
      status:1,
      headerSrc:"assets/imgs/header_2.jpg",
      name:"123",
      signature:2,
      buttonValue:"互相关注"
    },
  ];
  attention;
  // guanusername;
  private headers=new HttpHeaders({'Content-Type':'application/json'} );
  constructor(public http:HttpClient,public events: Events,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.titleTitle =this.navParams.get('title');
    this.attention = AttentionPage.attentionarr;
    this.tel=RegisterPage.t;
    this.http.post('/api/guanzhu',{
      "username":this.tel,
    },{
      headers:this.headers,
    }).subscribe((data)=>{
      this.write=data;
      // console.log(this.write);
    });

    this.http.post('/api/guanzhu/a',{
      "username":this.tel,
    },{
      headers:this.headers,
    }).subscribe((data)=>{
      
      this.src=data;
    });

    this.http.post('/api/guanzhu/ff',{
      "username":this.tel,
    },{
      headers:this.headers,
    }).subscribe((data1)=>{
      // console.log('src',data1);
      this.src1=data1;
    });

  }

  showConfirm() {
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

            this.http.post('/api/guanzhu/b',{
              "ID":this.ID,
            },{
              headers:this.headers,
            }).subscribe((data)=>{
             console.log(this.ID);
            });
                        
            this.http.post('/api/guanzhu/ff',{
              "username":this.tel,
            },{
              headers:this.headers,
            }).subscribe((data1)=>{
              console.log('src',data1);
              this.src1=data1;
            });
            // this.http.post('/api/guanzhu',{
            //   "username":this.tel,
            // },{
            //   headers:this.headers,
            // }).subscribe((data)=>{
            //   this.write=data;
            //   // console.log(this.write);
            // });
          //   for(this.i = 0;this.i < FansPage.fansarr.length;this.i++){
          //     if((AttentionPage.attentionarr[this.index].headerSrc == FansPage.fansarr[this.i].headerSrc)
          //     &&(AttentionPage.attentionarr[this.index].signature == FansPage.fansarr[this.i].signature)
          //     &&(AttentionPage.attentionarr[this.index].name == FansPage.fansarr[this.i].name)){
          //       FansPage.fansarr[this.index].status = 0;
          //       FansPage.fansarr[this.index].buttonValue = "+ 关注";
          //     }
          //   }
          //   AttentionPage.attentionarr.splice(this.index, 1);
          }
        },
      ]
    });
    confirm.present();
  }

  show(i) {
    this.index = i;
    // console.log('1',this.index);
    this.ID=this.write[i].ID;
  }
  ionViewWillEnter() { //page初始化时
    this.tel=RegisterPage.t;
  } 
}
