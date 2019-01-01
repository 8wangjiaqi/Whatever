var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { GongluePage } from '../gonglue/gonglue';
import { NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterPage } from '../register/register';
import { AddpagePage } from '../addpage/addpage';
var ShouyeqqPage = /** @class */ (function () {
    function ShouyeqqPage(http, navCtrl, params, modalCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.isActive = 0;
        this.arr = ["推荐", "关注"];
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.num = 1;
        this.num2 = 2;
        this.information = [
            {
                username: "杏仁",
                title: "八月",
                article: "跟我一起旅游吧"
            },
            {
                username: "杏仁",
                title: "八月",
                article: "跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧"
            },
            {
                username: "杏仁",
                title: "八月",
                article: "跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧跟我一起旅游吧"
            },
        ];
        this.tel = RegisterPage.t;
        //   this.http.post('/api/home',
        //     {  headers:this.headers}).subscribe((data)=>{
        //     // this.id=data[idx].ID;
        //     this.write=data;
        //     // console.log('1',this.tel);
        //     console.log(data);
        //   });
        //   this.http.post('/api/home/a',{"username":this.tel},
        //   {  headers:this.headers}).subscribe((data)=>{
        //   // this.id=data[idx].ID;
        //   this.a=data;
        //   // console.log()
        //   // console.log('1',this.tel);
        //   console.log('a:',data);
        // });
        if (this.num = 1) {
            this.value = "1";
        }
        if (this.num2 = 2) {
            this.value = "2";
        }
        this.initializeItems();
    }
    ShouyeqqPage.prototype.isClick = function (i) {
        this.isActive = i;
    };
    ;
    ShouyeqqPage.prototype.initializeItems = function () {
        this.search_items = this.information;
    };
    ShouyeqqPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.search_items = this.search_items.filter(function (item) {
                return ((item.username.toLowerCase().indexOf(val.toLowerCase()) > -1)
                    || (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1)
                    || (item.content.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
    };
    ShouyeqqPage.prototype.ionViewWillEnter = function () {
        this.tel = RegisterPage.t;
    };
    ShouyeqqPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        document.querySelector('.ion-md-add').addEventListener('click', function () {
            var profileModal = _this.modalCtrl.create(AddpagePage);
            profileModal.present();
        }, false);
    };
    //  imgUrl:String;
    //   listData: Object;// 接收数据用
    //   res: Response;
    //   constructor(public modalCtrl: ModalController,public navCtrl: NavController,private http: Http,public navParams:NavParams) {
    //   }
    ShouyeqqPage.prototype.goGongluePage = function (idx) {
        console.log(idx);
        this.navCtrl.push(GongluePage, {
            username: this.search_items[idx].username,
            // touxiang:this.write[idx].src,
            title: this.search_items[idx].title,
            content: this.search_items[idx].article,
        });
    };
    ShouyeqqPage = __decorate([
        Component({
            selector: 'page-shouyeqq',
            templateUrl: 'shouyeqq.html'
        }),
        __metadata("design:paramtypes", [HttpClient, NavController, NavParams, ModalController])
    ], ShouyeqqPage);
    return ShouyeqqPage;
}());
export { ShouyeqqPage };
//# sourceMappingURL=shouyeqq.js.map