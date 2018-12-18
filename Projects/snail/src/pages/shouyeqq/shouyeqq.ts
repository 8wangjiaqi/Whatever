import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavController} from 'ionic-angular';
import { Http} from '@angular/http';
import { GongluePage } from '../gonglue/gonglue';
import { NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterPage } from '../register/register';
import { AddpagePage } from '../addpage/addpage';
@Component({
  selector: 'page-shouyeqq',
  templateUrl: 'shouyeqq.html'
})
export class ShouyeqqPage {
  isActive=0;
  isClick(i){
    this.isActive=i;
  };
  arr=["攻略","关注"];
  private headers=new HttpHeaders({'Content-Type':'application/json'});
  tel;
a;
  write;
  constructor(public http:HttpClient,public navCtrl: NavController, public params: NavParams,public modalCtrl: ModalController) {
    this.tel=RegisterPage.t;
    
    this.http.post('/api/home',
      {  headers:this.headers}).subscribe((data)=>{
      // this.id=data[idx].ID;
      this.write=data;
      // console.log('1',this.tel);
      console.log(data);
    });

    this.http.post('/api/home/a',{"username":this.tel},
    {  headers:this.headers}).subscribe((data)=>{
    // this.id=data[idx].ID;
    this.a=data;
    // console.log()
    // console.log('1',this.tel);
    console.log('a:',data);
  });
  }

  ionViewWillEnter() { //page初始化时
    this.tel=RegisterPage.t;
  }
  ionViewDidLoad(){
    document.querySelector('.ion-md-add').addEventListener('click',()=>{
      let profileModal = this.modalCtrl.create(AddpagePage);
      profileModal.present();
    },false);
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
        // touxiang:this.write[idx].src,
        title:this.write[idx].title,
        content:this.write[idx].article,
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
