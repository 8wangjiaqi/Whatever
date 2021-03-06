import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavController} from 'ionic-angular';
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
    console.log(this.isActive);
  };
  arr=["推荐","关注"];
  private headers=new HttpHeaders({'Content-Type':'application/json'});
  tel;
  write;
  a;
  guanzhu;
  search_items;
  num;
  i;
  index;
  src1;
  gong_username;
  bb;
  idx;
  constructor(public http:HttpClient,public navCtrl: NavController, public params: NavParams,public modalCtrl: ModalController) {
    this.tel=RegisterPage.t;
    
    this.http.post('/api/home',
      {  headers:this.headers}).subscribe((data)=>{
      
      this.search_items=data;
      console.log(this.search_items);
      console.log('gong',data);
      });

    this.http.post('/api/home/a',{"username":this.tel},
    {  headers:this.headers}).subscribe((data1)=>{
      this.a=data1;
    });

    this.http.post('/api/guanzhu/i',{"username":this.tel},
    {  headers:this.headers}).subscribe((data1)=>{
      this.i=data1;
      console.log('data1',data1)
    });

    this.http.post('/api/home/src',{"username":this.tel},
    {  headers:this.headers}).subscribe((data2)=>{
      this.src1=data2;
      console.log('data2',data2);
      console.log(this.idx);
    });

   
     
  }

  
 
  getItems(ev) {
    this.http.post('/api/home',
    {  headers:this.headers}).subscribe((data)=>{
    // this.id=data[idx].ID;
    // this.write=data;
    this.search_items=data;
    // this.initializeItems();
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.search_items = this.search_items.filter((item) => {
        return ((item.username.toLowerCase().indexOf(val.toLowerCase()) > -1)
        ||(item.title.toLowerCase().indexOf(val.toLowerCase()) > -1)
        ||(item.article.toLowerCase().indexOf(val.toLowerCase()) > -1));
      })
    }
  });
   
  }
  guanusername;
  ionViewWillEnter() { //page初始化时
    this.tel=RegisterPage.t;

  }
  ionViewDidLoad(){
    document.querySelector('.ion-md-add').addEventListener('click',()=>{
      let profileModal = this.modalCtrl.create(AddpagePage);
      profileModal.present();
    },false);
  }

  showConfirm(i) {
    console.log("+关注->已关注");
    this.gong_username = this.search_items[i].username;
    console.log(this.gong_username);//找到点击按钮对应的用户名
    // 1.数据库攻略表用户的num改为已关注

    // 2.数据库关注表中添加此用户
  }

//  imgUrl:String;
//   listData: Object;// 接收数据用
//   res: Response;
//   constructor(public modalCtrl: ModalController,public navCtrl: NavController,private http: Http,public navParams:NavParams) {
    
//   }
great(e) {
  console.log(e.target.outerHTML);
  if (e.target.outerHTML == '<p class="like">❤</p>') {
    console.log('变蓝色');
    e.target.className = 'like2';
  }
  else {
    console.log('变灰色');
    e.target.className = 'like';
  }
}

  goGongluePage(idx) {
    // console.log(idx);
    // if(this.isActive==0){
      console.log(idx);
      this.navCtrl.push(GongluePage, {
        username: this.search_items[idx].username,
        // touxiang:this.write[idx].src,
        title: this.search_items[idx].title,
        content: this.search_items[idx].article,
        picture:this.search_items[idx].picture,
        src:this.search_items[idx].src

      });
  //   }else{
  //     this.navCtrl.push(GongluePage, {
  //       username: this.i[idx].username,
  //       title: this.i[idx].title,
  //       content: this.i[idx].article,
  //   });
  // }
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
