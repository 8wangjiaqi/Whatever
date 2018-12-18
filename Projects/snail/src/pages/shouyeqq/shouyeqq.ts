import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavController} from 'ionic-angular';
import { Http} from '@angular/http';
import { GongluePage } from '../gonglue/gonglue';
import { NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterPage } from '../register/register';
@Component({
  selector: 'page-shouyeqq',
  templateUrl: 'shouyeqq.html'
})
export class ShouyeqqPage {
  isActive=0;
  isClick(i){
    this.isActive=i;
  };
  arr=["你的攻略","我的关注"];
  private headers=new HttpHeaders({'Content-Type':'application/json'});
  tel;

  write;
  constructor(public http:HttpClient,public navCtrl: NavController, public params: NavParams) {
    // this.tel=RegisterPage.t;
    
    this.http.post('/api/home',
      {  headers:this.headers}).subscribe((data)=>{
      // this.id=data[idx].ID;
      this.write=data;
      // console.log('1',this.tel);
      console.log(data);
    });
  }

  ionViewWillEnter() { //page初始化时
    this.tel=RegisterPage.t;
  }



//  imgUrl:String;
//   listData: Object;// 接收数据用
//   res: Response;
//   constructor(public modalCtrl: ModalController,public navCtrl: NavController,private http: Http,public navParams:NavParams) {
    
//   }
   goGongluePage(idx){
     console.log(idx);

      this.navCtrl.push(GongluePage,{
        username:this.write[idx].username,
        touxiang:this.write[idx].touxiang,
        title:this.write[idx].title,
        content:this.write[idx].description,
        // href:this.write[idx].href,
        // time:this.users[idx].time,
        // comment:this.users[idx].comment,
        // data:this.data
      });
      }
//      }else{
//       this.navCtrl.push(GongluePage,{
//         name:this.users2[idx].name,
//         touxiang:this.users2[idx].touxiang,
//         title:this.users2[idx].title,
//         content:this.users2[idx].content,
//         imgUrl:this.users2[idx].imgUrl,
//         time:this.users2[idx].time,
//         comment:this.users2[idx].comment,
//         data:this.data
//       });
//      }
   
//   }
}
