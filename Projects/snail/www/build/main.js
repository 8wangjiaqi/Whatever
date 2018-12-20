webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_message__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__concerning_concerning__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__opinion_opinion__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fans_fans__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__attention_attention__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__strategy_strategy__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__collection_collection__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__myself_myself__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_register__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        // this.user_display = ContactPage.user;
        this.tel = __WEBPACK_IMPORTED_MODULE_10__register_register__["a" /* RegisterPage */].t;
        this.http.post('/api/contact', { 'username': this.tel }, { headers: this.headers }).subscribe(function (data) {
            _this.gonglue = data;
            // console.log('1',this.tel);
            console.log('my:', data);
            //console.log(this.gonglue);
            // console.log(this.gonglue[0].username);
        });
        this.http.post('/api/home/a', { "username": this.tel }, { headers: this.headers }).subscribe(function (data) {
            // this.id=data[idx].ID;
            _this.a = data;
            // console.log()
            // console.log('1',this.tel);
            console.log('a:', data);
        });
        // if(this.gonglue.username==undefined){
        //   this.gonglue.username = "请点击登录"
        // }
        // if(this.gonglue.headerSrc==null){
        //   this.gonglue.headerSrc = "assets/imgs/un_register.jpg"
        // }
    }
    ContactPage.prototype.ionViewWillEnter = function () {
        this.attention_volume = __WEBPACK_IMPORTED_MODULE_6__attention_attention__["a" /* AttentionPage */].attentionarr.length;
        this.fans_volume = __WEBPACK_IMPORTED_MODULE_5__fans_fans__["a" /* FansPage */].fansarr.length;
        this.tel = __WEBPACK_IMPORTED_MODULE_10__register_register__["a" /* RegisterPage */].t;
        // if(this.gonglue[0].username==undefined){
        //   this.gonglue[0].username = "请点击登录"
        // }
        // if(this.gonglue.headerSrc==null){
        //   this.gonglue.headerSrc = "assets/imgs/un_register.jpg"
        // }
    };
    ContactPage.prototype.goMyself = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__myself_myself__["a" /* MyselfPage */], {
            title: '个人信息'
        });
    };
    ContactPage.prototype.goMessage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__message_message__["a" /* MessagePage */], {
            title: '我的消息'
        });
    };
    ContactPage.prototype.goConcerning = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__concerning_concerning__["a" /* ConcerningPage */], {
            title: '关于我们'
        });
    };
    ContactPage.prototype.goOpinion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__opinion_opinion__["a" /* OpinionPage */], {
            title: '意见反馈'
        });
    };
    ContactPage.prototype.goFans = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__fans_fans__["a" /* FansPage */], {
            title: '全部粉丝'
        });
    };
    ContactPage.prototype.goAttention = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__attention_attention__["a" /* AttentionPage */], {
            title: '我的关注'
        });
    };
    ContactPage.prototype.goStrategy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__strategy_strategy__["a" /* StrategyPage */], {
            title: '我的攻略'
        });
    };
    ContactPage.prototype.goCollection = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__collection_collection__["a" /* CollectionPage */], {
            title: '我的收藏'
        });
    };
    ContactPage.prototype.goRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__register_register__["a" /* RegisterPage */], {
            title: '登录'
        });
    };
    ContactPage.prototype.Clear = function () {
        localStorage.clear();
    };
    ContactPage.prototype.goJudge = function () {
        if (this.gonglue.username == "请点击登录") {
            this.goRegister();
        }
        else {
            this.goMyself();
        }
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\contact\contact.html"*/'<!-- 我的 -->\n\n<ion-header>\n\n  <div class="top" (click)="goJudge()">\n\n    <li *ngFor="let item of gonglue">\n\n        <div class="image">\n\n            <!-- <img src=" http://192.168.62.144:3000/upload/{{item.src}}" alt="头像" /> -->\n\n            <ul >\n\n                <li *ngFor="let item of a">\n\n                  <img src="http://192.168.62.144:3000/upload/{{item.src}}" alt="头像">\n\n                </li>\n\n            </ul>\n\n        </div>\n\n        <div class="name">\n\n          <span text-center class="p1">\n\n         {{item.username}}\n\n          </span>\n\n        </div>\n\n        <div class="signature">\n\n          <span text-center class="p2">\n\n              {{item.signature}}\n\n          </span> \n\n        </div>\n\n        </li>\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="con1">\n\n    <ul>\n\n      <li (click)="goFans()">\n\n        <p text-center class="p1">{{fans_volume}}</p>\n\n        <p text-center class="p2">粉丝</p>\n\n      </li>\n\n      <li (click)="goAttention()">\n\n        <p text-center class="p1">{{attention_volume}}</p>\n\n        <p text-center class="p2">关注</p>\n\n      </li>\n\n      <li (click)="goStrategy()">\n\n        <p text-center class="p1">32</p>\n\n        <p text-center class="p2">我的攻略</p>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n  <div class="con2">\n\n    <ul>\n\n      <li (click)="goCollection()">\n\n        <ion-icon ios="logo-codepen" md="logo-codepen" class="icon1"></ion-icon>\n\n        <span>我的收藏</span>\n\n        <span float-right class="right">></span>\n\n      </li>\n\n      <!-- <li (click)="goMessage()">\n\n        <ion-icon ios="ios-text" md="md-text" class="icon1"></ion-icon>\n\n        <span>我的消息</span>\n\n        <ion-icon name="notifications-outline" class="bell"></ion-icon>\n\n        <span float-right class="right">></span>\n\n      </li> -->\n\n      <li (click)="goConcerning()">\n\n          <ion-icon ios="ios-people" md="md-people" class="icon1"></ion-icon>\n\n          <span>关于我们</span>\n\n          <span float-right class="right">></span>\n\n      </li>\n\n      <li (click)="goOpinion()">\n\n          <ion-icon ios="ios-create" md="md-create" class="icon1"></ion-icon>\n\n          <span>意见反馈</span>\n\n          <span float-right class="right">></span>\n\n      </li>\n\n      <li (click)="goRegister();Clear()">\n\n          <ion-icon ios="ios-close-circle" md="md-close-circle" class="icon1"></ion-icon>\n\n          <span>退出登录</span>\n\n          <span float-right class="right">></span>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["a" /* HttpClient */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attention_attention__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FansPage = /** @class */ (function () {
    function FansPage(events, navCtrl, navParams, alertCtrl) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.titleTitle = this.navParams.get('title');
        this.fans = FansPage_1.fansarr;
    }
    FansPage_1 = FansPage;
    FansPage.prototype.showConfirm = function ($event) {
        var _this = this;
        if ($event.target.innerHTML == "互相关注") {
            var confirm_1 = this.alertCtrl.create({
                message: '确定不再关注此人？',
                buttons: [
                    {
                        text: '取消',
                        handler: function () {
                        }
                    },
                    {
                        text: '确定',
                        handler: function () {
                            for (_this.i = 0; _this.i < __WEBPACK_IMPORTED_MODULE_2__attention_attention__["a" /* AttentionPage */].attentionarr.length; _this.i++) {
                                if ((FansPage_1.fansarr[_this.index].headerSrc == __WEBPACK_IMPORTED_MODULE_2__attention_attention__["a" /* AttentionPage */].attentionarr[_this.i].headerSrc)
                                    && (FansPage_1.fansarr[_this.index].signature == __WEBPACK_IMPORTED_MODULE_2__attention_attention__["a" /* AttentionPage */].attentionarr[_this.i].signature)
                                    && (FansPage_1.fansarr[_this.index].name == __WEBPACK_IMPORTED_MODULE_2__attention_attention__["a" /* AttentionPage */].attentionarr[_this.i].name)) {
                                    __WEBPACK_IMPORTED_MODULE_2__attention_attention__["a" /* AttentionPage */].attentionarr.splice(_this.i, 1);
                                }
                            }
                            FansPage_1.fansarr[_this.index].status = 0;
                            FansPage_1.fansarr[_this.index].buttonValue = "+ 关注";
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            FansPage_1.fansarr[this.index].buttonValue = "互相关注";
            FansPage_1.fansarr[this.index].status = 1;
            __WEBPACK_IMPORTED_MODULE_2__attention_attention__["a" /* AttentionPage */].attentionarr.push(FansPage_1.fansarr[this.index]);
        }
    };
    FansPage.prototype.show = function (i) {
        this.index = i;
    };
    FansPage.fansarr = [
        {
            status: 1,
            headerSrc: "assets/imgs/header_4.jpg",
            name: "佳琦琦琦",
            signature: 4,
            buttonValue: "互相关注"
        },
        {
            status: 0,
            headerSrc: "assets/imgs/header_5.jpg",
            name: "咿呀呀",
            signature: 3,
            buttonValue: "+ 关注"
        },
        {
            status: 1,
            headerSrc: "assets/imgs/header_2.jpg",
            name: "123",
            signature: 2,
            buttonValue: "互相关注"
        },
        {
            status: 0,
            headerSrc: "assets/imgs/header_3.jpg",
            name: "lemon",
            signature: 2,
            buttonValue: "+ 关注"
        },
    ];
    FansPage = FansPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fans',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\fans\fans.html"*/'<!-- 粉丝 -->\n\n<ion-header text-center no-border>\n\n  <ion-navbar color="major">\n\n    <ion-title>{{titleTitle}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button>\n\n        <ion-icon></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="fans">\n\n    <ul>\n\n      <li *ngFor="let item of fans;let i = index">\n\n        <div class="header">\n\n          <img src="{{item.headerSrc}}" alt="头像">\n\n        </div>\n\n        <div class="center">\n\n          <div class="name">\n\n            {{item.name}}\n\n          </div>\n\n          <div class="signature">\n\n            粉丝&nbsp;&nbsp;{{item.signature}}\n\n          </div>\n\n        </div>\n\n        <div class="right">\n\n          <button [ngClass]="{\'only\':item.status == 0,\'each\':item.status == 1}" (click)="show(i);showConfirm($event);">{{item.buttonValue}}</button>\n\n        </div>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\fans\fans.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], FansPage);
    return FansPage;
    var FansPage_1;
}());

//# sourceMappingURL=fans.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttentionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fans_fans__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AttentionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AttentionPage = /** @class */ (function () {
    function AttentionPage(events, navCtrl, navParams, alertCtrl) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.titleTitle = this.navParams.get('title');
        this.attention = AttentionPage_1.attentionarr;
    }
    AttentionPage_1 = AttentionPage;
    AttentionPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            message: '确定不再关注此人？',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        for (_this.i = 0; _this.i < __WEBPACK_IMPORTED_MODULE_2__fans_fans__["a" /* FansPage */].fansarr.length; _this.i++) {
                            if ((AttentionPage_1.attentionarr[_this.index].headerSrc == __WEBPACK_IMPORTED_MODULE_2__fans_fans__["a" /* FansPage */].fansarr[_this.i].headerSrc)
                                && (AttentionPage_1.attentionarr[_this.index].signature == __WEBPACK_IMPORTED_MODULE_2__fans_fans__["a" /* FansPage */].fansarr[_this.i].signature)
                                && (AttentionPage_1.attentionarr[_this.index].name == __WEBPACK_IMPORTED_MODULE_2__fans_fans__["a" /* FansPage */].fansarr[_this.i].name)) {
                                __WEBPACK_IMPORTED_MODULE_2__fans_fans__["a" /* FansPage */].fansarr[_this.index].status = 0;
                                __WEBPACK_IMPORTED_MODULE_2__fans_fans__["a" /* FansPage */].fansarr[_this.index].buttonValue = "+ 关注";
                            }
                        }
                        AttentionPage_1.attentionarr.splice(_this.index, 1);
                    }
                }
            ]
        });
        confirm.present();
    };
    AttentionPage.prototype.show = function (i) {
        this.index = i;
    };
    AttentionPage.attentionarr = [
        {
            status: 1,
            headerSrc: "assets/imgs/header_4.jpg",
            name: "佳琦琦琦",
            signature: 4,
            buttonValue: "互相关注",
        },
        {
            status: 0,
            headerSrc: "assets/imgs/header_7.jpg",
            name: "大头大头",
            signature: 4,
            buttonValue: "√ 已关注"
        },
        {
            status: 0,
            headerSrc: "assets/imgs/header_1.jpg",
            name: "hhh_",
            signature: 2,
            buttonValue: "√ 已关注"
        },
        {
            status: 0,
            headerSrc: "assets/imgs/header_6.jpg",
            name: "啊哈哈",
            signature: 3,
            buttonValue: "√ 已关注"
        },
        {
            status: 1,
            headerSrc: "assets/imgs/header_2.jpg",
            name: "123",
            signature: 2,
            buttonValue: "互相关注"
        },
    ];
    AttentionPage = AttentionPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-attention',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\attention\attention.html"*/'<!-- 关注 -->\n\n<ion-header text-center no-border>\n\n  <ion-navbar color="major">\n\n    <ion-title>{{titleTitle}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button>\n\n        <ion-icon></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n  \n\n<ion-content padding>\n\n  <div class="fans">\n\n    <ul>\n\n        <li *ngFor="let item of attention;let i = index">\n\n        <div class="header">\n\n          <img src="{{item.headerSrc}}" alt="头像">\n\n        </div>\n\n        <div class="center">\n\n          <div class="name">\n\n              {{item.name}}\n\n          </div>\n\n          <div class="signature">\n\n              粉丝&nbsp;&nbsp;{{item.signature}}\n\n          </div>\n\n        </div>\n\n        <div class="right">\n\n          <button [ngClass]="{\'only\':item.status == 0,\'each\':item.status == 1}" (click)="show(i);showConfirm()">{{item.buttonValue}}</button>\n\n        </div>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\attention\attention.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AttentionPage);
    return AttentionPage;
    var AttentionPage_1;
}());

//# sourceMappingURL=attention.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JizhangbenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nullpage_nullpage__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mingxi_mingxi__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { TabsPage } from '../tabs/tabs';
var JizhangbenPage = /** @class */ (function () {
    // item={
    //   money:'',
    //   time:'',
    //   style:'',
    //   other:''
    // };
    // arr=[];
    function JizhangbenPage(http, navCtrl, params) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.params = params;
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        this.backButtonClick = function (e) {
            // do something
            _this.navCtrl.popToRoot();
        };
        this.tel = __WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */].t;
        this.http.post('/api/zhangben', { 'username': this.tel }, { headers: this.headers }).subscribe(function (data) {
            _this.write = data;
            // console.log('1',this.tel);
            console.log(data);
        });
        // this.item=params.data;
        // console.log(this.item);
    }
    JizhangbenPage.prototype.gonullpage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__nullpage_nullpage__["a" /* NullpagePage */]);
    };
    JizhangbenPage.prototype.gomingxipage = function (i) {
        // console.log(i);
        // console.log( this.write[i]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mingxi_mingxi__["a" /* MingxiPage */], {
            money: this.write[i].money,
            time: this.write[i].time,
            style: this.write[i].style,
            other: this.write[i].other
        });
    };
    JizhangbenPage.prototype.ionViewDidLoad = function () {
        this.navBar.backButtonClick = this.backButtonClick;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */])
    ], JizhangbenPage.prototype, "navBar", void 0);
    JizhangbenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jizhangben',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\jizhangben\jizhangben.html"*/'<ion-header>\n\n  <ion-navbar id="a" color="blu">\n\n    <ion-title text-center>记一笔&nbsp;&nbsp;<ion-icon name="md-create"></ion-icon></ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name=""></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <img src="assets/imgs/plan.png">\n\n  <button ion-button full (click)="gonullpage()" >添加记录</button>\n\n\n\n    <div (click)="gomingxipage(i)" *ngFor="let item of write;let i =index;">\n\n      <table style="width: 90%" class="table">\n\n          <tr >\n\n            <td class="front"><ion-icon ios="ios-clock" md="md-clock"></ion-icon>&nbsp;&nbsp;时间：</td> \n\n            <td class="later" align="right" >{{item.time}}</td> \n\n          </tr>\n\n        <tr>\n\n          <td class="front"> <ion-icon ios="ios-keypad" md="md-keypad"></ion-icon>&nbsp;&nbsp;支付方式：</td>\n\n          <td class="later" align="right">{{item.style}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td class="front"><ion-icon ios="logo-usd" md="logo-usd"></ion-icon>&nbsp;&nbsp;花费：</td>\n\n          <td class="later" align="right">{{item.money}}</td>\n\n        </tr>\n\n      </table>\n\n      <hr style="height:3px;">\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\jizhangben\jizhangben.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], JizhangbenPage);
    return JizhangbenPage;
}());

//# sourceMappingURL=jizhangben.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriplanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addplan_addplan__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zongji_zongji__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TriplanPage = /** @class */ (function () {
    function TriplanPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        this.backButtonClick = function (e) {
            // do something
            _this.navCtrl.popToRoot();
        };
        this.tel = __WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */].t;
        this.http.post('/api/plan', { 'username': this.tel }, { headers: this.headers }).subscribe(function (data) {
            _this.write = data;
            // console.log('1',this.tel);
            console.log(data);
        });
    }
    TriplanPage.prototype.goaddplan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addplan_addplan__["a" /* AddplanPage */]);
    };
    // gomingxi2(i){
    //   this.navCtrl.push(ZongjiPage,{index:i,arr:this.arr});
    //   console.log("chuani",i);
    // }
    TriplanPage.prototype.gomingxi2 = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__zongji_zongji__["a" /* ZongjiPage */], {
            days: this.write[i].days,
            morning: this.write[i].morning,
            afternoon: this.write[i].afternoon,
            evening: this.write[i].evening,
        });
    };
    TriplanPage.prototype.ionViewDidLoad = function () {
        this.navBar.backButtonClick = this.backButtonClick;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */])
    ], TriplanPage.prototype, "navBar", void 0);
    TriplanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-triplan',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\triplan\triplan.html"*/'<ion-header>\n\n  <ion-navbar id="a" color="blu">\n\n    <ion-title text-center>我的计划</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="goaddplan()" >\n\n        <ion-icon name="md-add" id="icony"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  \n\n  <div id="listdiv">\n\n    <ul id="list" text-center>\n\n        <li  ngDefaultControl  (click)="gomingxi2(i)" *ngFor="let item of write;let i =index;" >\n\n          <h3>第{{item.days}}天</h3>\n\n          <!-- <br/> -->\n\n          <h5 >上午:{{item.morning}}</h5>\n\n          <h5 >下午:{{item.afternoon}}</h5>\n\n          <h5 >晚上:{{item.evening}}</h5>\n\n          <!-- <br/>\n\n          下午:{{item.afternoon}}<br/>\n\n          晚上:{{item.evening}}\n\n          <h5> -->\n\n        </li>  \n\n      \n\n    </ul>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\triplan\triplan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], TriplanPage);
    return TriplanPage;
}());

//# sourceMappingURL=triplan.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShouyeqqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gonglue_gonglue__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addpage_addpage__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ShouyeqqPage = /** @class */ (function () {
    function ShouyeqqPage(http, navCtrl, params, modalCtrl) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.isActive = 0;
        this.arr = ["推荐", "关注"];
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        this.tel = __WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */].t;
        this.http.post('/api/home', { headers: this.headers }).subscribe(function (data) {
            // this.id=data[idx].ID;
            _this.write = data;
            // console.log('1',this.tel);
            console.log(data);
        });
        this.http.post('/api/home/a', { "username": this.tel }, { headers: this.headers }).subscribe(function (data) {
            // this.id=data[idx].ID;
            _this.a = data;
            // console.log()
            // console.log('1',this.tel);
            console.log('a:', data);
        });
    }
    ShouyeqqPage.prototype.isClick = function (i) {
        this.isActive = i;
    };
    ;
    ShouyeqqPage.prototype.ionViewWillEnter = function () {
        this.tel = __WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */].t;
    };
    ShouyeqqPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        document.querySelector('.ion-md-add').addEventListener('click', function () {
            var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__addpage_addpage__["a" /* AddpagePage */]);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__gonglue_gonglue__["a" /* GongluePage */], {
            username: this.write[idx].username,
            // touxiang:this.write[idx].src,
            title: this.write[idx].title,
            content: this.write[idx].article,
        });
    };
    ShouyeqqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shouyeqq',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\shouyeqq\shouyeqq.html"*/'<ion-header>\n\n  <ion-navbar color="blu">\n\n      <ion-searchbar class="search1">\n\n          [(ngModel)]="myInput"\n\n          [showCancelButton]="shouldShowCancel"\n\n          (ionInput)="onInput($event)"\n\n          (ionCancel)="onCancel($event)">\n\n      </ion-searchbar>\n\n      <ul class="navList">\n\n        <li *ngFor="let item of arr;let idx=index;" (click)="isClick(idx)" [class.first]="isActive==idx">{{arr[idx]}}</li>\n\n      </ul>\n\n      <ion-icon name="md-add" class="ion"></ion-icon>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div [ngSwitch]="isActive">\n\n    <div *ngSwitchCase="0">\n\n      <!-- 轮播图 -->\n\n     <ion-slides pager="true" autoplay="1000" loop="true" class="sli" style="width:100%;height:240px;">\n\n            <!-- <ion-slide>\n\n              <img src="assets/imgs/北京攻略.jpg" alt="" calss="slide-image" style="width:100%;">\n\n            </ion-slide> -->\n\n            <ion-slide>\n\n              <img src="assets/imgs/5.jpg" alt="" calss="slide-image" style="width:100%;">\n\n            </ion-slide>\n\n            <ion-slide>\n\n              <img src="assets/imgs/6.jpg" alt="" calss="slide-image" style="width:100%;">\n\n            </ion-slide>\n\n     </ion-slides>\n\n\n\n     <div class="articles" style="width:90%;margin-left:5%;margin-top:5%;" *ngFor="let item of write;let idx=index">\n\n      <div calss="div1">\n\n        <img src="assets/imgs/1.jpg" alt="" style="border-radius:50%;width: 40px ;height: 40px;">\n\n        <span class="username">&nbsp;&nbsp;{{item.username}}</span>\n\n       <!-- <button calss="guanzhu" style="position:absolute;width:15%;margin-left:70%;margin-top:3%">+关注</button> -->\n\n      </div>\n\n      <div calss="div2">\n\n        <p class="title" style="position:relative;" (click)="goGongluePage(idx)">{{item.title}}</p>\n\n        <p class="content" style="width:60%;margin-top:5%;color:#808080 " (click)="goGongluePage(idx)">{{item.description}}</p>\n\n        <img src="assets/imgs/北京攻略.jpg" alt="" class="articleimg" style="position:absolute;margin-left:60%;margin-top:-25%;width:40%;height:45%;">\n\n        <!-- <img src="{{user.imgUrl}}" alt="" class="articleimg" style="position:absolute;margin-left:75%;margin-top:-20%;width:25%;height:40%;" (click)="goGongluePage(idx)"> -->\n\n      </div>\n\n      <hr style="margin-top:8%;margin-bottom:5%;">\n\n  \n\n     </div>\n\n    </div>\n\n    <!-- <div *ngSwitchCase="1">\n\n      <ion-slides pager="true" autoplay="1000" loop="true" class="sli" style="width:100%;height:10%;">\n\n        <ion-slide>\n\n          <img src="assets/imgs/1.jpg" alt="" calss="slide-image" style="width:100%;">\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <img src="assets/imgs/5.jpg" alt="" calss="slide-image" style="width:100%;">\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <img src="assets/imgs/6.jpg" alt="" calss="slide-image" style="width:100%;">\n\n        </ion-slide>\n\n      </ion-slides>\n\n      <div class="articles" style="width:90%;margin-left:5%;" *ngFor="let user of users2;let idx=index;">\n\n      <div calss="div1">\n\n       <img src="{{user.touxiang}}" class="touxiang">\n\n        <span class="username">{{user.name}}</span>\n\n       <button calss="guanzhu" style="position:absolute;width:15%;margin-left:70%;margin-top:3%">+关注</button>\n\n      </div>\n\n      <div calss="div2">\n\n        <p class="title" style="position:relative;" (click)="goGongluePage(idx)">{{user.title}}</p>\n\n        <p class="content" style="width:70%;margin-top:5%;" (click)="goGongluePage(idx)">{{user.content}}</p>\n\n       <img src="{{user.imgUrl}}" alt="" class="articleimg" style="position:absolute;margin-left:75%;margin-top:-20%;width:25%;height:40%;" (click)="goGongluePage(idx)">\n\n      </div>\n\n      <div calss="div3" style="margin-top:3%;">\n\n        <span>{{user.agree}}赞同</span>\n\n        <span style="position:relative;">{{user.pinglun}}评论</span>\n\n        <span class="time" style="position:absolute;margin-left:45%;">{{user.time}}</span>\n\n      </div>\n\n      <hr style="margin-top:3%;margin-bottom:3%;">\n\n     </div>\n\n    </div> -->\n\n  </div>\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\shouyeqq\shouyeqq.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ShouyeqqPage);
    return ShouyeqqPage;
}());

//# sourceMappingURL=shouyeqq.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enroll_enroll__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(app, alertCtrl, http, navCtrl, navParams) {
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        // RegisterPage.t=this.tel;
    }
    RegisterPage_1 = RegisterPage;
    RegisterPage.prototype.goEnroll = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enroll_enroll__["a" /* EnrollPage */], {
            title: '注册'
        });
        // console.log("EnrollPage");
    };
    RegisterPage.prototype.goTabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    //post
    RegisterPage.prototype.doPost = function () {
        var _this = this;
        this.http.post('/api', {
            "tel": this.tel,
            "pwd": this.pwd
        }, {
            headers: this.headers,
        }).subscribe(function (data) {
            RegisterPage_1.t = _this.tel;
            // console.log(data);
            // console.log(this.tel);
            //1成功 0密码空 -1用户不存在 -2密码错误 -3用户名空
            switch (data) {
                case 0:
                    _this.presentPrompt('密码不能为空');
                    break;
                case 1:
                    _this.goHome();
                    break;
                case -1:
                    _this.presentPrompt('该用户名未注册');
                    break;
                case -2:
                    _this.presentPrompt('密码错误');
                    break;
                case -3:
                    _this.presentPrompt('用户名不能为空');
                    break;
            }
        });
    };
    RegisterPage.prototype.goHome = function () {
        //跳转到tabs页并将用户tel传给tabs
        this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], { username: this.tel });
        console.log(this.tel);
    };
    RegisterPage.prototype.presentPrompt = function (str) {
        var alert = this.alertCtrl.create({
            title: '登录失败',
            subTitle: str + '，请重新输入。',
            buttons: [
                {
                    text: '确认',
                    role: 'cancel',
                    handler: function (data) {
                        // console.log('Confirm clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage = RegisterPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\register\register.html"*/'<!-- 登录 -->\n\n<ion-content padding>\n\n  <div class="close">\n\n      <!-- <ion-icon ios="ios-close" md="md-close" (click)="goTabs()"></ion-icon> -->\n\n      <ion-icon class="over" (click)="goTabs()">跳过</ion-icon>\n\n  </div>\n\n  <div class="header">\n\n    <img src="assets/imgs/蜗牛.png" alt="图标">\n\n  </div>\n\n  <div class="box">\n\n    <div class="pn">\n\n      <label>\n\n        <ion-icon name="contact"></ion-icon>\n\n        <input type="text" placeholder="手机号/邮箱" class="text-input" [(ngModel)]="tel">\n\n      </label>\n\n    </div>\n\n    <div class="pw">\n\n      <label>\n\n        <ion-icon name="lock"></ion-icon>\n\n        <input type="password" placeholder="密码" class="text-input" [(ngModel)]="pwd">\n\n      </label>\n\n    </div>\n\n    <button ion-button block (click)="doPost()">登录</button>\n\n  </div>\n\n  <div class="buttom">\n\n    <span float-left (click)="goEnroll()">没有账号？立即注册</span>\n\n    <span class="psw">忘记密码</span>\n\n  </div>\n\n</ion-content>\n\n  '/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
    var RegisterPage_1;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrollPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EnrollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnrollPage = /** @class */ (function () {
    function EnrollPage(app, alertCtrl, http, navCtrl, navParams) {
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
    }
    EnrollPage.prototype.logForm = function () {
        var _this = this;
        console.log(this.tel);
        console.log(this.pwd);
        this.http.post('/api/send', {
            "tel": this.tel,
            "pwd": this.pwd,
        }, {
            headers: this.headers,
        }).subscribe(function (data) {
            console.log(data);
            // -1 用户名为空 -2 密码为空 0 成功 1 用户名重复
            switch (data) {
                case -1:
                    _this.presentPrompt('用户名不能为空');
                    break;
                case -2:
                    _this.presentPrompt('密码不能为空');
                    break;
                case 1:
                    _this.presentPrompt('用户名重复');
                    break;
                case 0:
                    _this.goHome();
                    break;
            }
        });
    };
    EnrollPage.prototype.goTabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    // goRegister(){
    //   this.navCtrl.push(RegisterPage);
    // }
    EnrollPage.prototype.goHome = function () {
        //跳转到tabs页并将用户tel传给tabs
        // this.app.getRootNavs()[0].setRoot(TabsPage,{username:this.tel});
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
        console.log(this.tel);
    };
    EnrollPage.prototype.presentPrompt = function (str) {
        console.log(str);
        var alert = this.alertCtrl.create({
            title: '登录失败',
            subTitle: str + '，请重新输入。',
            buttons: [
                {
                    text: '确认',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Confirm clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    EnrollPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enroll',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\enroll\enroll.html"*/'<!-- 注册 -->\n\n<ion-content padding>\n\n  <div class="close">\n\n    <!-- <ion-icon class="over" (click)="goTabs()">跳过</ion-icon> -->\n\n    <!-- <ion-icon ios="ios-close" md="md-close"></ion-icon> -->\n\n  </div>\n\n  <div class="header">\n\n    <img src="assets/imgs/蜗牛.png" alt="图标">\n\n  </div>\n\n  <div class="box">\n\n    <!-- <div class="pn">\n\n      <label>\n\n        <ion-icon name="contact"></ion-icon>\n\n        <input type="text" placeholder="手机号/邮箱" class="text-input">\n\n      </label>\n\n    </div>\n\n    <div class="vc">\n\n   \n\n    </div>\n\n    <div class="pw">\n\n      <label>\n\n        <ion-icon name="lock"></ion-icon>\n\n        <input type="password" placeholder="密码" class="text-input">\n\n      </label>\n\n    </div>\n\n  </div> -->\n\n    <form (ngSubmit)="logForm()">\n\n      <div class="username">\n\n        <ion-icon name="contact"></ion-icon>\n\n        <ion-input class="text-input" type="text" placeholder="用户名" name="username" [(ngModel)]="tel"></ion-input>\n\n      </div>\n\n      <div class="pw">\n\n        <ion-icon name="lock"></ion-icon>\n\n        <ion-input class="text-input" type="password" placeholder="密码" name=\'pass\' [(ngModel)]="pwd"></ion-input>\n\n      </div>\n\n      <button ion-button block>注册</button>\n\n    </form>\n\n  </div>\n\n\n\n  <div class="buttom">\n\n    <span float-left (click)="goRegister()">已有账号？去登陆</span>\n\n  </div>\n\n</ion-content>\n\n  '/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\enroll\enroll.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EnrollPage);
    return EnrollPage;
}());

//# sourceMappingURL=enroll.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagePage = /** @class */ (function () {
    function MessagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.titleTitle = this.navParams.get('title');
    }
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\message\message.html"*/'<!-- 我的消息 -->\n\n<ion-header text-center no-border>\n\n  <ion-navbar color="major">\n\n    <ion-title>{{titleTitle}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button>\n\n        <ion-icon></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ul>\n\n  <li>\n\n    <div class="header">\n\n      <img src="assets/imgs/header_3.jpg" alt="头像">\n\n    </div>\n\n    <div class="center">\n\n      <div class="name">\n\n        佳琦琦琦\n\n      </div>\n\n      <div class="signature">\n\n        ##每一天要开心\n\n      </div>\n\n    </div>\n\n    <div class="right">\n\n      <div class="imformation" text-right>\n\n        赞了我\n\n      </div>\n\n      <div class="time" text-right>\n\n        2018-11-24\n\n      </div>\n\n    </div>\n\n  </li>\n\n  <li>\n\n    <div class="header">\n\n      <img src="assets/imgs/header_2.jpg" alt="头像">\n\n    </div>\n\n    <div class="center">\n\n      <div class="name">\n\n        嘻嘻嘻呀\n\n      </div>\n\n      <div class="signature">\n\n        蜗牛旅行\n\n      </div>\n\n    </div>\n\n    <div class="right">\n\n      <div class="imformation" text-right>\n\n        私信了我\n\n      </div>\n\n      <div class="time" text-right>\n\n        2018-11-24\n\n      </div>\n\n    </div>\n\n  </li>\n\n  <li>\n\n    <div class="header">\n\n      <img src="assets/imgs/header_4.jpg" alt="头像">\n\n    </div>\n\n    <div class="center">\n\n      <div class="name">\n\n        snail\n\n      </div>\n\n      <div class="signature">\n\n        坦然\n\n      </div>\n\n    </div>\n\n    <div class="right">\n\n      <div class="imformation" text-right>\n\n        私信了我\n\n      </div>\n\n      <div class="time" text-right>\n\n        2018-11-24\n\n      </div>\n\n    </div>\n\n  </li>\n\n  <li>\n\n    <div class="header">\n\n      <img src="assets/imgs/header_5.jpg" alt="头像">\n\n    </div>\n\n    <div class="center">\n\n      <div class="name">\n\n        大可爱\n\n      </div>\n\n      <div class="signature">\n\n        跟我一起旅游吧\n\n      </div>\n\n    </div>\n\n    <div class="right">\n\n      <div class="imformation" text-right>\n\n        评论了我\n\n      </div>\n\n      <div class="time" text-right>\n\n        2018-11-24\n\n      </div>\n\n    </div>\n\n  </li>\n\n</ul>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\message\message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConcerningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConcerningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConcerningPage = /** @class */ (function () {
    function ConcerningPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.titleTitle = this.navParams.get('title');
    }
    ConcerningPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-concerning',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\concerning\concerning.html"*/'<!-- 关于我们 -->\n\n<ion-header text-center no-border>\n\n  <ion-navbar color="major">\n\n    <ion-title>{{titleTitle}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button>\n\n        <ion-icon></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="picture">\n\n    <img src="assets/imgs/蜗牛.png" alt="logo">\n\n  </div>\n\n  <div class="font">\n\n    <div class="title" text-center>蜗牛旅行</div>\n\n    <div class="platform" text-center>v1.0.0</div>\n\n  </div>\n\n  <div class="list">\n\n    <ul>\n\n      <li>\n\n          <span>功能介绍</span>\n\n          <span float-right class="right">></span>\n\n      </li>\n\n      <li>\n\n          <span>协议及声明</span>\n\n          <span float-right class="right">></span>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n  <div class="bottom">\n\n    <div class="statement" text-center>\n\n      <span><a href="">服务条款&nbsp;&nbsp;&nbsp;</a></span>\n\n      |\n\n      <span><a href="">&nbsp;&nbsp;&nbsp;隐私声明</a></span>\n\n    </div>\n\n    <div class="copyright" text-center>\n\n        Copyright © 2018-2018 SnailTravel.All Righr Reserved.\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\concerning\concerning.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ConcerningPage);
    return ConcerningPage;
}());

//# sourceMappingURL=concerning.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpinionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the OpinionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OpinionPage = /** @class */ (function () {
    function OpinionPage(app, alertCtrl, http, navParams, navCtrl) {
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        this.titleTitle = this.navParams.get('title');
    }
    OpinionPage.prototype.logForm = function () {
        var _this = this;
        console.log('tel', this.tel);
        this.http.post('/api/say', {
            "username": this.tel,
            "say": this.say,
            "phone": this.pho,
        }, {
            headers: this.headers,
        }).subscribe(function (data) {
            _this.tel = __WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */].t;
            console.log('data', data);
            // -1 数据不完整  0 成功
            switch (data) {
                case -1:
                    _this.presentPrompt('请将内容添写完整');
                    break;
                case 0:
                    _this.goHome();
                    break;
            }
        });
    };
    OpinionPage.prototype.ionViewWillEnter = function () {
        this.tel = __WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */].t;
    };
    OpinionPage.prototype.presentPrompt = function (str) {
        console.log(str);
        var alert = this.alertCtrl.create({
            title: '添加失败',
            subTitle: str,
            buttons: [
                {
                    text: '确认',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Confirm clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    OpinionPage.prototype.goHome = function () {
        // this.app.getRootNavs()[0].setRoot(TabsPage,{username:this.tel});
        // this.navCtrl.popToRoot();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */]);
        // console.log('1',this.tel);
    };
    OpinionPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '是否要保存草稿？',
            buttons: [
                {
                    text: '否',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                },
                {
                    text: '是',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    };
    OpinionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-opinion',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\opinion\opinion.html"*/'<!-- 意见反馈 -->\n\n<ion-header text-center no-border>\n\n  <ion-navbar color="major">\n\n    <ion-title>{{titleTitle}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button>\n\n        <ion-icon></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <div class="content">\n\n    <div class="c1">\n\n      <div class="font">您的问题或建议：</div>\n\n      <div class="text">\n\n        <label>\n\n          <input type="text" placeholder="意见反馈:" class="text-input">\n\n        </label>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class="content">\n\n    <div class="c1">\n\n      <div class="font">您联系方式：</div>\n\n      <div class="text">\n\n        <label>\n\n          <input type="text" placeholder="请输入电话号码" class="text-input">\n\n        </label>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class="comfirm">\n\n    <button ion-button block>确认</button>\n\n  </div> -->\n\n  <form (ngSubmit)="logForm()">\n\n    <ion-item>\n\n      <ion-label>say</ion-label>\n\n      <ion-input type="text" [(ngModel)]="say" name="shuo"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>phone</ion-label>\n\n      <ion-input  type="text" [(ngModel)]="phone" name="hua"></ion-input>\n\n    </ion-item>\n\n    <div class="comfirm">\n\n      <button ion-button type="submit" block id="button">发送</button>\n\n    </div>\n\n  </form> \n\n</ion-content>\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\opinion\opinion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], OpinionPage);
    return OpinionPage;
}());

//# sourceMappingURL=opinion.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrategyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StrategyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StrategyPage = /** @class */ (function () {
    function StrategyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.titleTitle = this.navParams.get('title');
    }
    StrategyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-strategy',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\strategy\strategy.html"*/'<!-- 我的攻略 -->\n\n<ion-header text-center no-border>\n\n  <ion-navbar color="major">\n\n    <ion-title>{{titleTitle}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button>\n\n        <ion-icon></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="s_content">\n\n    \n\n    <ul>\n\n      <li>\n\n        <div class="list">\n\n          <div class="title">\n\n            <p>八月去北京，这份攻略你一定要看</p>\n\n          </div>\n\n          <div class="c_content">\n\n            <p>说到北京，我算是很有发言权了，前后和不同的人去过三次，每次感受都不同，分享给你：\n\n              第一次...</p>\n\n          </div>\n\n          <div class="picture">\n\n            <img src="assets/imgs/北京攻略.jpg" alt="北京攻略图片">\n\n          </div>\n\n          <div class="bottom">\n\n            <span>赞 345</span>\n\n            <span>评论 12</span>\n\n            <span float-right>2018-11-24</span>\n\n          </div>\n\n        </div>\n\n      </li>\n\n      <li>\n\n        <div class="list">\n\n          <div class="title">\n\n            <p>半梦半醒间，醉美崂山</p>\n\n          </div>\n\n          <div class="c_content">\n\n            <p>第 1 天\n\n              初看山是山，水是水\n\n              继而山不是山，水不是水\n\n              终乃山还是山，水还是水。夜晚的仰口沙滩上...</p>\n\n          </div>\n\n          <div class="picture">\n\n            <img src="assets/imgs/青岛攻略.jpg" alt="青岛攻略图片">\n\n          </div>\n\n          <div class="bottom">\n\n            <span>赞 345</span>\n\n            <span>评论 12</span>\n\n            <span float-right>2018-11-24</span>\n\n          </div>\n\n        </div>\n\n      </li>\n\n      <li>\n\n        <div class="list">\n\n          <div class="title">\n\n            <p>一篇攻略告诉你，到了四川该怎么玩？</p>\n\n          </div>\n\n          <div class="c_content">\n\n            <p>成都必去—也是网红打卡圣地---稻城亚丁：成都-康定-日瓦-稻城亚丁，这路上的风景堪称一绝，简直是...</p>\n\n          </div>\n\n          <div class="picture">\n\n            <img src="assets/imgs/成都攻略.jpg" alt="四川攻略图片">\n\n          </div>\n\n          <div class="bottom">\n\n            <span>赞 345</span>\n\n            <span>评论 12</span>\n\n            <span float-right>2018-11-24</span>\n\n          </div>\n\n        </div>\n\n      </li>\n\n      <li>\n\n        <div class="list">\n\n          <div class="title">\n\n            <p>就是现在跟我去西藏吧</p>\n\n          </div>\n\n          <div class="c_content">\n\n            <p>“人间天堂，天上西藏”，很多人把去西藏视为人生的朝圣之旅，净化心灵，洗涤灵魂的旅程。\n\n              每年的5...</p>\n\n          </div>\n\n          <div class="picture">\n\n            <img src="assets/imgs/西藏攻略.jpg" alt="西藏攻略图片">\n\n          </div>\n\n          <div class="bottom">\n\n            <span>赞 345</span>\n\n            <span>评论 12</span>\n\n            <span float-right>2018-11-24</span>\n\n          </div>\n\n        </div>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\strategy\strategy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], StrategyPage);
    return StrategyPage;
}());

//# sourceMappingURL=strategy.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CollectionPage = /** @class */ (function () {
    function CollectionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.titleTitle = this.navParams.get('title');
    }
    CollectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-collection',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\collection\collection.html"*/'<!-- 我的收藏 -->\n\n<ion-header text-center no-border>\n\n  <ion-navbar color="major">\n\n    <ion-title>{{titleTitle}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button>\n\n        <ion-icon></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="s_content">\n\n    <ul>\n\n      <li>\n\n        <div class="list">\n\n          <div class="name">\n\n            <img src="assets/imgs/header_1.jpg" alt="头像">\n\n            <span>佳琦琦琦</span>\n\n          </div>\n\n          <div class="title">\n\n            <p>八月去北京，这份攻略你一定要看</p>\n\n          </div>\n\n          <div class="c_content">\n\n            <p>说到北京，我算是很有发言权了，前后和不同的人去过三次，每次感受都不同，分享给你：\n\n              第一次...</p>\n\n          </div>\n\n          <div class="picture">\n\n            <img src="assets/imgs/北京攻略.jpg" alt="北京攻略图片">\n\n          </div>\n\n          <div class="bottom">\n\n            <span>赞 345</span>\n\n            <span>评论 12</span>\n\n            <span float-right>2018-11-24</span>\n\n          </div>\n\n        </div>\n\n      </li>\n\n      <li>\n\n        <div class="list">\n\n          <div class="name">\n\n              <img src="assets/imgs/header_2.jpg" alt="头像">\n\n              <span>琦琦琦</span>\n\n          </div>\n\n          <div class="title">\n\n            <p>半梦半醒间，醉美崂山</p>\n\n          </div>\n\n          <div class="c_content">\n\n            <p>第 1 天\n\n              初看山是山，水是水\n\n              继而山不是山，水不是水\n\n              终乃山还是山，水还是水。夜晚的仰口沙滩上...</p>\n\n          </div>\n\n          <div class="picture">\n\n            <img src="assets/imgs/青岛攻略.jpg" alt="青岛攻略图片">\n\n          </div>\n\n          <div class="bottom">\n\n            <span>赞 345</span>\n\n            <span>评论 12</span>\n\n            <span float-right>2018-11-24</span>\n\n          </div>\n\n        </div>\n\n      </li>\n\n      <li>\n\n        <div class="list">\n\n          <div class="name">\n\n              <img src="assets/imgs/header_3.jpg" alt="头像">\n\n              <span>琦琦琦</span>\n\n          </div>\n\n          <div class="title">\n\n            <p>一篇攻略告诉你，到了四川该怎么玩？</p>\n\n          </div>\n\n          <div class="c_content">\n\n            <p>成都必去—也是网红打卡圣地---稻城亚丁：成都-康定-日瓦-稻城亚丁，这路上的风景堪称一绝，简直是...</p>\n\n          </div>\n\n          <div class="picture">\n\n            <img src="assets/imgs/成都攻略.jpg" alt="四川攻略图片">\n\n          </div>\n\n          <div class="bottom">\n\n            <span>赞 345</span>\n\n            <span>评论 12</span>\n\n            <span float-right>2018-11-24</span>\n\n          </div>\n\n        </div>\n\n      </li>\n\n      <li>\n\n        <div class="list">\n\n          <div class="name">\n\n              <img src="assets/imgs/header_4.jpg" alt="头像">\n\n              <span>曦丫丫丫丫</span>\n\n          </div>\n\n          <div class="title">\n\n            <p>就是现在跟我去西藏吧</p>\n\n          </div>\n\n          <div class="c_content">\n\n            <p>“人间天堂，天上西藏”，很多人把去西藏视为人生的朝圣之旅，净化心灵，洗涤灵魂的旅程。\n\n              每年的5...</p>\n\n          </div>\n\n          <div class="picture">\n\n            <img src="assets/imgs/西藏攻略.jpg" alt="西藏攻略图片">\n\n          </div>\n\n          <div class="bottom">\n\n            <span>赞 345</span>\n\n            <span>评论 12</span>\n\n            <span float-right>2018-11-24</span>\n\n          </div>\n\n        </div>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\collection\collection.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CollectionPage);
    return CollectionPage;
}());

//# sourceMappingURL=collection.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyselfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_header_sub_header__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MyselfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyselfPage = /** @class */ (function () {
    function MyselfPage(app, alertCtrl, http, navCtrl, navParams) {
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        this.titleTitle = this.navParams.get('title');
    }
    MyselfPage.prototype.logForm = function () {
        var _this = this;
        console.log('tel', this.tel);
        this.http.post('/api/usermessage/a', {
            "username": this.tel,
            "signature": this.signature,
            "ousername": this.ousername,
        }, {
            headers: this.headers,
        }).subscribe(function (data) {
            // this.tel=RegisterPage.t;
            console.log('data', data);
            // this.id=data;
            // -1 数据不完整  0 成功
            switch (data) {
                case 1:
                    _this.presentPrompt('用户名重复');
                    break;
                case 0:
                    _this.goHome();
                    break;
            }
        });
    };
    MyselfPage.prototype.ionViewWillEnter = function () {
        this.tel = __WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */].t;
    };
    MyselfPage.prototype.presentPrompt = function (str) {
        console.log(str);
        var alert = this.alertCtrl.create({
            title: '添加失败',
            subTitle: str + '，请重新输入。',
            buttons: [
                {
                    text: '确认',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Confirm clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    MyselfPage.prototype.goHome = function () {
        // this.app.getRootNavs()[0].setRoot(TabsPage,{username:this.tel});
        // this.navCtrl.popToRoot();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        // console.log('1',this.tel);
    };
    MyselfPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '是否要保存草稿？',
            buttons: [
                {
                    text: '否',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                },
                {
                    text: '是',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    };
    MyselfPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyselfPage');
    };
    MyselfPage.prototype.subHeader = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sub_header_sub_header__["a" /* SubHeaderPage */], {
            title: '个人头像'
        });
    };
    MyselfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myself',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\myself\myself.html"*/'<!-- 个人信息 -->\n\n<ion-header text-center no-border>\n\n  <ion-navbar color="major">\n\n    <ion-title>{{titleTitle}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button>\n\n        <ion-icon></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <div class="information">\n\n    <ul>\n\n      <li class="header" (click)="subHeader()">\n\n        <span>头像</span>\n\n        <span float-right class="right">></span>\n\n      </li>\n\n      <li>\n\n        <span>名字</span>\n\n        <span float-right class="right">></span>\n\n      </li>\n\n      <li>\n\n        <span>个性签名</span>\n\n        <span float-right class="right">></span>\n\n      </li>\n\n    </ul>\n\n  </div> -->\n\n  <form (ngSubmit)="logForm()">\n\n    <!-- <ion-item>\n\n      <ion-label>Todo</ion-label>\n\n      <ion-input type="text" [(ngModel)]="tit" name="title"></ion-input>\n\n    </ion-item> -->\n\n    <ion-item>\n\n      <!-- <ion-label>description</ion-label> -->\n\n      <ion-input  type="text" [(ngModel)]="ousername" name="yonghuming" placeholder="用户名"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <!-- <ion-label>description</ion-label> -->\n\n      <ion-input  type="text" [(ngModel)]="signature" name="qianming" placeholder="个性签名"></ion-input>\n\n    </ion-item>\n\n    <button ion-button type="submit" block id="button"><ion-icon name="md-add" class="ion"></ion-icon>确认</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\myself\myself.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MyselfPage);
    return MyselfPage;
}());

//# sourceMappingURL=myself.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubHeaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SubHeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubHeaderPage = /** @class */ (function () {
    function SubHeaderPage(camera, platform, actionsheetCtrl, navCtrl, navParams) {
        this.camera = camera;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.titleTitle = this.navParams.get('title');
        // this.imgUrl = ContactPage.user.headerSrc;
    }
    SubHeaderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubHeaderPage');
    };
    SubHeaderPage.prototype.openMenu = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: '拍照',
                    cssClass: 'phone',
                    handler: function () {
                        console.log('拍照');
                        var options = {
                            quality: 100,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                    }
                },
                {
                    text: '从手机相册选择',
                    cssClass: 'select',
                    handler: function () {
                        console.log('从手机相册选择');
                    }
                },
                {
                    text: '取消',
                    cssClass: 'cancel',
                    handler: function () {
                        console.log('取消');
                    }
                },
            ]
        });
        actionSheet.present();
    };
    SubHeaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sub-header',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\sub-header\sub-header.html"*/'<!-- 个人头像 -->\n\n<ion-header text-center no-border>\n\n    <ion-navbar color="major">\n\n      <ion-title>{{titleTitle}}</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button block (click)="openMenu()">\n\n          <ion-icon name="more"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="picture">\n\n    <img src="{{imgUrl}}" alt="您的头像">\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\sub-header\sub-header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SubHeaderPage);
    return SubHeaderPage;
}());

//# sourceMappingURL=sub-header.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jizhangben_jizhangben__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__triplan_triplan__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.gosub = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__jizhangben_jizhangben__["a" /* JizhangbenPage */]);
    };
    HomePage.prototype.goplan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__triplan_triplan__["a" /* TriplanPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\home\home.html"*/'<ion-content>\n\n  <div id="banner">\n\n    <img src="assets/imgs/lang.png">\n\n    <p>生活不止眼前的苟且，还有诗和远方~</p>\n\n  </div>\n\n  <p id="word">蜗牛旅行，我们一直都在~</p>\n\n  <div id="div0">\n\n    <div id="div1" (click)="gosub()">\n\n      <ion-icon name="md-list-box"></ion-icon>\n\n      <p>旅行账本</p>\n\n    </div>\n\n    <div id="div2" (click)="goplan()">\n\n      <ion-icon name="md-create"></ion-icon>\n\n      <p>旅行计划</p>\n\n    </div>\n\n    \n\n    \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NullpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jizhangben_jizhangben__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NullpagePage = /** @class */ (function () {
    function NullpagePage(app, alertCtrl, http, navCtrl, navParams) {
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.arr = [];
        this.obj = { money: '',
            time: '',
            style: '',
            other: ''
        };
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
    }
    NullpagePage.prototype.logForm = function () {
        var _this = this;
        console.log(this.tel);
        // console.log(this.pwd);
        this.http.post('/api/write', {
            "username": this.tel,
            "money": this.money,
            "time": this.time,
            "style": this.style,
            "other": this.other,
        }, {
            headers: this.headers,
        }).subscribe(function (data) {
            console.log('data:', data);
            _this.tel = __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */].t;
            // -1 花销为空 -2 付款方式为空  0 成功 
            switch (data) {
                case -1:
                    _this.presentPrompt('花销不能为空');
                    break;
                case -2:
                    _this.presentPrompt('付款方式不能为空');
                    break;
                case 0:
                    _this.goHome();
                    break;
            }
        });
    };
    NullpagePage.prototype.presentPrompt = function (str) {
        console.log(str);
        var alert = this.alertCtrl.create({
            title: '添加失败',
            subTitle: str + '，请重新输入。',
            buttons: [
                {
                    text: '确认',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Confirm clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    NullpagePage.prototype.goHome = function () {
        //跳转到tabs页并将用户tel传给tabs
        // this.app.getRootNavs()[0].setRoot(TabsPage,{username:this.tel});
        // this.navCtrl.popToRoot();   //回到自己的root
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__jizhangben_jizhangben__["a" /* JizhangbenPage */]);
        console.log(this.tel);
    };
    NullpagePage.prototype.ionViewWillEnter = function () {
        this.tel = __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */].t;
    };
    NullpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nullpage',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\nullpage\nullpage.html"*/'<ion-header>\n\n\n\n    <ion-navbar id="a" color="blu">\n\n      <ion-title text-center>记一笔&nbsp;&nbsp;<ion-icon name="md-create"></ion-icon></ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only>\n\n          <ion-icon name=""></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n    \n\n  </ion-header>\n\n\n\n\n\n<ion-content color="lgrey">\n\n        <form  (ngSubmit)="logForm()">\n\n          <ion-item>\n\n            <ion-input type="text" placeholder="花销" name="huaxiao" [(ngModel)]="money"></ion-input>\n\n          </ion-item>\n\n        \n\n          <ion-item>\n\n            <ion-input type="text" placeholder="时间" name=\'shijian\' [(ngModel)]="time"></ion-input>\n\n          </ion-item>\n\n  \n\n          <ion-item>\n\n            <ion-input type="text" placeholder="付款方式" name=\'fangshi\' [(ngModel)]="style"></ion-input>\n\n          </ion-item>\n\n  \n\n          <ion-item>\n\n              <ion-input type="text" placeholder="备注" name=\'beizhu\' [(ngModel)]="other"></ion-input>\n\n            </ion-item>\n\n          <button ion-button block id="button">保存</button>\n\n\n\n  </form>\n\n  </ion-content>\n\n  '/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\nullpage\nullpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NullpagePage);
    return NullpagePage;
}());

//# sourceMappingURL=nullpage.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MingxiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MingxiPage = /** @class */ (function () {
    function MingxiPage(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.items = {
            money: '',
            time: '',
            style: '',
            other: ''
        };
        this.items = params.data;
        console.log(this.items);
    }
    MingxiPage.prototype.deletelist = function () {
    };
    MingxiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mingxi',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\mingxi\mingxi.html"*/'<ion-header>\n\n\n\n  <ion-navbar id="a" color="blu">\n\n    <ion-title text-center>明细&nbsp;&nbsp;<ion-icon name="md-create"></ion-icon></ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name=""></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content color="lgrey">\n\n  <ion-item id="money">\n\n    <ion-label style="color:black;font-size:20px;">花费:&nbsp;&nbsp;{{items.money}}</ion-label>\n\n  </ion-item>\n\n\n\n  <!-- <ion-item id="money">\n\n    <ion-label color="blu">类别:&nbsp;&nbsp;{{userInfo.goodtype}}</ion-label>\n\n  </ion-item> -->\n\n\n\n\n\n  <ion-item id="money">\n\n    <ion-label style="color:black;font-size:20px;">时间:&nbsp;&nbsp;{{items.time}}</ion-label>\n\n  </ion-item>\n\n\n\n  <ion-item id="money">\n\n    <ion-label style="color:black;font-size:20px;">付款方式:&nbsp;&nbsp;{{items.style}}</ion-label>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item id="money">\n\n    <ion-label style="color:black;font-size:20px;">备注:&nbsp;&nbsp;{{items.other}}</ion-label>\n\n  </ion-item>\n\n\n\n  <br/><br/><br/>\n\n  <button ion-button round (click)="deletelist()">删除</button>\n\n</ion-content>'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\mingxi\mingxi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MingxiPage);
    return MingxiPage;
}());

//# sourceMappingURL=mingxi.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddplanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__triplan_triplan__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddplanPage = /** @class */ (function () {
    function AddplanPage(app, alertCtrl, http, navCtrl, navParams) {
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // days;
        // shangwu;
        // zhongwu;
        // xiawu;
        // wanshang;
        // arr=[];
        // constructor(public navCtrl: NavController, public params: NavParams) {
        //   console.log(this.days);
        // }
        // saveplan(){
        //   this.navCtrl.push(TriplanPage,{
        //     days:this.days,
        //     shangwu:this.shangwu,
        //     zhongwu:this.zhongwu,
        //     xiawu:this.xiawu,
        //     wanshang:this.wanshang
        //   });
        // }
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        // console.log('days',this.days);
    }
    AddplanPage.prototype.logForm = function () {
        var _this = this;
        console.log(this.tel);
        // console.log(this.pwd);
        this.http.post('/api/addplan', {
            "username": this.tel,
            "days": this.days,
            "morning": this.morning,
            "afternoon": this.afternoon,
            "evening": this.evening,
        }, {
            headers: this.headers,
        }).subscribe(function (data) {
            console.log('data:', data);
            _this.tel = __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */].t;
            // -1 数据为空  0 成功 
            switch (data) {
                case -1:
                    _this.presentPrompt('计划不能为空');
                    break;
                case 0:
                    _this.goHome();
                    break;
            }
        });
    };
    AddplanPage.prototype.presentPrompt = function (str) {
        console.log(str);
        var alert = this.alertCtrl.create({
            title: '添加失败',
            subTitle: str + '，请重新输入。',
            buttons: [
                {
                    text: '确认',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Confirm clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    AddplanPage.prototype.goHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__triplan_triplan__["a" /* TriplanPage */]);
        console.log(this.tel);
    };
    AddplanPage.prototype.ionViewWillEnter = function () {
        this.tel = __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */].t;
    };
    AddplanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addplan',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\addplan\addplan.html"*/'<ion-header>\n\n  <ion-navbar id="a" color="blu">\n\n    <ion-title text-center>添加计划</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name=""></ion-icon>\n\n        <ion-icon name=""></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <!-- <ion-item id="item1">\n\n    <ion-label color="blu">第几天：</ion-label>\n\n    <ion-select [(ngModel)]="days" multiple="true">\n\n      <ion-option>1天</ion-option>\n\n      <ion-option>2天</ion-option>\n\n      <ion-option>3天</ion-option>\n\n      <ion-option>4天</ion-option>\n\n      <ion-option>5天</ion-option>\n\n      <ion-option>6天</ion-option>\n\n      <ion-option>7天</ion-option>\n\n      <ion-option>8天</ion-option>\n\n      <ion-option>9天</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label color="blu" stacked>上午：</ion-label>\n\n    <ion-input type="text" [(ngModel)]="shangwu"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="blu" stacked>中午：</ion-label>\n\n    <ion-input type="text" [(ngModel)]="zhongwu"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="blu" stacked>下午：</ion-label>\n\n    <ion-input type="text" [(ngModel)]="xiawu"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="blu" stacked>晚上：</ion-label>\n\n    <ion-input type="text" [(ngModel)]="wanshang"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button round type="submit" ion-button (click)="saveplan()">保存</button> -->\n\n\n\n  <form  (ngSubmit)="logForm()">\n\n    <!-- <ion-item>\n\n      <ion-input type="text" placeholder="第几天" name="tian" [(ngModel)]="days"></ion-input>\n\n    </ion-item> -->\n\n   <ion-item id="item1">\n\n  <ion-label color="blu">第几天：</ion-label>\n\n  <ion-select [(ngModel)]="days" multiple="true" name="tian">\n\n    <ion-option>1天</ion-option>\n\n    <ion-option>2天</ion-option>\n\n    <ion-option>3天</ion-option>\n\n    <ion-option>4天</ion-option>\n\n    <ion-option>5天</ion-option>\n\n    <ion-option>6天</ion-option>\n\n    <ion-option>7天</ion-option>\n\n    <ion-option>8天</ion-option>\n\n    <ion-option>9天</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-input type="text" placeholder="上午：" name=\'shangwu\' [(ngModel)]="morning"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="下午：" name=\'xiawu\' [(ngModel)]="afternoon"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-input type="text" placeholder="晚上：" name=\'wanshang\' [(ngModel)]="evening"></ion-input>\n\n      </ion-item>\n\n    <button ion-button block id="button">保存</button>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\addplan\addplan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AddplanPage);
    return AddplanPage;
}());

//# sourceMappingURL=addplan.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZongjiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZongjiPage = /** @class */ (function () {
    function ZongjiPage(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.list = {
            days: "",
            morning: "",
            afternoon: "",
            evening: "",
        };
        this.arr2 = [];
        this.list = params.data;
        console.log(this.list);
    }
    ZongjiPage.prototype.deletelist = function () {
        this.navCtrl.pop();
    };
    ZongjiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-zongji',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\zongji\zongji.html"*/'<ion-header>\n\n    <ion-navbar id="a" color="blu">\n\n      <ion-title text-center>我的计划</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only>\n\n          <ion-icon name=""></ion-icon>\n\n          <ion-icon name=""></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n    \n\n  </ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-item>\n\n    <ion-label style="color:black;font-size:20px;">第{{list.days}}天</ion-label>\n\n    <ion-input ></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label style="color:black;font-size:20px;">上午:{{list.morning}}</ion-label>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label style="color:black;font-size:20px;">下午:{{list.afternoon}}</ion-label>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label style="color:black;font-size:20px;">晚上:{{list.evening}}</ion-label>\n\n    <!-- <ion-input style="color:black;font-size:20px;"></ion-input> -->\n\n  </ion-item>\n\n\n\n  <br/><br/><br/>\n\n  <button ion-button round (click)="deletelist()">删除</button>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\zongji\zongji.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ZongjiPage);
    return ZongjiPage;
}());

//# sourceMappingURL=zongji.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GongluePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pinglun_pinglun__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shouyeqq_shouyeqq__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GongluePage = /** @class */ (function () {
    function GongluePage(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.userInfo = {
            name: '',
            test: '',
            touxiang: '',
            title: '',
            content: '',
            imgUrl: '',
            time: '',
            comment: []
        };
        this.userInfo = params.data;
        // this.userInfo=this.params.get('comment');
    }
    GongluePage.prototype.goHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__shouyeqq_shouyeqq__["a" /* ShouyeqqPage */]);
    };
    GongluePage.prototype.goPinglunPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pinglun_pinglun__["a" /* PinglunPage */], {
            comment: this.userInfo.comment
        });
    };
    GongluePage.prototype.ionViewDidLoad = function () {
        // let modelData: string = '用户名：' + this.params.get('content');
        // console.log(modelData);
    };
    GongluePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gonglue',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\gonglue\gonglue.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="blu">\n\n    <ion-title (click)="goHomePage()"></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="ioncontent">\n\n  <div class="fixed1">\n\n      <p class="title">{{userInfo.title}}</p>\n\n    <hr>\n\n    <!-- <img src="{{userInfo.src}}" alt="" class="touxiang"> -->\n\n    <img src="assets/imgs/1.jpg" alt="" style="border-radius:50%;width: 40px ;height: 40px;">\n\n    <span class="username" style="color:#808080;font-weight:bold;">&nbsp;&nbsp;&nbsp;{{userInfo.username}}</span>\n\n    <br>\n\n    <p class="content" style="white-space: pre-wrap;font-size: 15px;"    >{{userInfo.content}}</p>\n\n    <!-- <p v-model="userInfo.content" class="content">{{userInfo.content}}</p> -->\n\n    <img src="{{userInfo.imgUrl}}" alt="" class="articleimg">\n\n  </div>\n\n    \n\n    \n\n</ion-content>\n\n<!-- <ion-footer>\n\n    <div  class="fixed"> -->\n\n        <!-- <p class="time">发布于{{userInfo.time}}--著作权归作者所有</p> -->\n\n        <!-- <img src="../assets/imgs/3.jpg" alt="" class="mytouxiang">\n\n        <input type="text" placeholder="添加评论..." class="pinglun"> -->\n\n        <!-- <div class="last"> -->\n\n         <!-- <button class="agree"> <ion-icon ios="ios-arrow-dropup" md="md-arrow-dropup"></ion-icon>赞同</button>\n\n         <button class="argue"> <ion-icon ios="ios-arrow-dropdown" md="md-arrow-dropdown"></ion-icon></button> -->\n\n          <!-- <div class="divs">\n\n            <div class="div1">\n\n              <ion-icon ios="ios-heart" md="md-heart" class="icon"></ion-icon>\n\n              <p>感谢</p>\n\n            </div>\n\n            <div class="div2">\n\n              <ion-icon ios="ios-star" md="md-star" class="icon"></ion-icon>\n\n              <p>收藏</p>\n\n            </div>\n\n            <div class="div3" (click)="goPinglunPage()">\n\n              <ion-icon ios="ios-menu" md="md-menu" class="icon"></ion-icon>\n\n              <p>评论</p>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n</ion-footer> -->\n\n\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\gonglue\gonglue.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], GongluePage);
    return GongluePage;
}());

//# sourceMappingURL=gonglue.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinglunPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PinglunPage = /** @class */ (function () {
    function PinglunPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comment = [];
        this.flag = [];
        this.comment = navParams.data;
    }
    PinglunPage.prototype.ionViewDidLoad = function () {
        // for(var i=0;i<this.comment['comment'].length;i++){
        //   this.flag[i]=0;
        // }
    };
    //点赞
    PinglunPage.prototype.inceresezan = function (idx) {
        //for(var j=0;j<this.comment['comment'].length;j++){
        if (!this.flag[idx]) {
            this.comment['comment'][idx].zan = this.comment['comment'][idx].zan + 1;
            this.flag[idx] = 1;
            console.log('点赞成功', idx);
        }
        else {
            this.comment['comment'][idx].zan = this.comment['comment'][idx].zan - 1;
            this.flag[idx] = 0;
            console.log('取消点赞', idx);
        }
        console.log(this.flag);
    };
    PinglunPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pinglun',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\pinglun\pinglun.html"*/'<!--\n\n  Generated template for the PinglunPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="blu">\n\n      <ion-title>评论</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n     <p class="allpinglun">全部评论</p>\n\n    <div *ngFor="let comment of comment[\'comment\'];let idx=index;" class="pingluns">\n\n        <img src="{{comment.touxiang}}" alt="" class="touxiang">\n\n        <span class="username">{{comment.name}}</span>\n\n        <div class="div1">\n\n            <p>{{comment.content}}</p>\n\n        </div>\n\n        <div class="other">\n\n          <span class="time">{{comment.time}}</span>\n\n          <span class="huifu">查看回复</span>\n\n          <div class="zanpinglun">\n\n              <div class="zan">\n\n                <span>{{comment.zan}}</span><ion-icon  md="md-hand" (click)="inceresezan(idx)" class="dianzan"></ion-icon>\n\n              </div>\n\n              <div class="pinglun">\n\n                <span>{{comment.pinglun}}</span><ion-icon md="md-chatbubbles" (click)="increasecomment(idx)"></ion-icon>\n\n              </div>\n\n          </div>\n\n        </div>\n\n    </div>\n\n  </ion-content>\n\n  '/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\pinglun\pinglun.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PinglunPage);
    return PinglunPage;
}());

//}
//# sourceMappingURL=pinglun.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddpagePage = /** @class */ (function () {
    function AddpagePage(app, alertCtrl, http, navCtrl, navParams) {
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // todo = {}
        // logForm() {
        //   console.log(this.todo)
        // }
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
    }
    AddpagePage.prototype.logForm = function () {
        var _this = this;
        console.log('tel', this.tel);
        this.http.post('/api/artical', {
            "username": this.tel,
            "title": this.tit,
            "description": this.des,
            "article": this.art,
        }, {
            headers: this.headers,
        }).subscribe(function (data) {
            _this.tel = __WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */].t;
            console.log('data', data);
            // -1 数据不完整  0 成功
            switch (data) {
                case -1:
                    _this.presentPrompt('请将内容添写完整');
                    break;
                case 0:
                    _this.goHome();
                    break;
            }
        });
    };
    AddpagePage.prototype.ionViewWillEnter = function () {
        this.tel = __WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */].t;
    };
    AddpagePage.prototype.presentPrompt = function (str) {
        console.log(str);
        var alert = this.alertCtrl.create({
            title: '添加失败',
            subTitle: str,
            buttons: [
                {
                    text: '确认',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Confirm clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    AddpagePage.prototype.goHome = function () {
        // this.app.getRootNavs()[0].setRoot(TabsPage,{username:this.tel});
        // this.navCtrl.popToRoot();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        // console.log('1',this.tel);
    };
    AddpagePage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '是否要保存草稿？',
            buttons: [
                {
                    text: '否',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                },
                {
                    text: '是',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    };
    AddpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addpage',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\addpage\addpage.html"*/'<ion-header >\n\n  <ion-navbar color="blu">\n\n    <ion-buttons style="position: absolute;left:2%">\n\n      <button ion-button icon-only (click)="showConfirm()">\n\n        取消       \n\n      </button>\n\n    </ion-buttons>  \n\n    <ion-title text-center>在路上</ion-title>\n\n    <ion-buttons style="position: absolute;right:2%;top:25%;">\n\n      <!-- <button ion-button icon-only>\n\n        发布\n\n      </button> -->\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <!-- <ion-list>\n\n    <ion-item>\n\n      <ion-textarea placeholder="分享你的旅行攻略，你的心情。。。"></ion-textarea>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>禁止转载</ion-label>\n\n      <ion-toggle [(ngModel)]="zhuanzai"></ion-toggle>\n\n    </ion-item>\n\n    \n\n    <ion-item>\n\n      <ion-label>匿名身份</ion-label>\n\n      <ion-toggle [(ngModel)]="niming"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>公开</ion-label>\n\n      <ion-toggle [(ngModel)]="gongkai"></ion-toggle>\n\n    </ion-item>\n\n\n\n  </ion-list> -->\n\n  <!-- <form (ngSubmit)="logForm()">\n\n    <div class="username">\n\n      <ion-input class="text-input" type="text" placeholder="用户名" name="username" [(ngModel)]="tel"></ion-input>\n\n    </div>\n\n    <button ion-button block>注册</button>\n\n  </form> -->\n\n  <form (ngSubmit)="logForm()">\n\n    <ion-item>\n\n      <ion-label>Todo</ion-label>\n\n      <ion-input type="text" [(ngModel)]="tit" name="title"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>description</ion-label>\n\n      <ion-input  type="text" [(ngModel)]="des" name="description"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Article</ion-label>\n\n      <ion-textarea [(ngModel)]="art" name="article" class="art"></ion-textarea>\n\n    </ion-item>\n\n    <button ion-button type="submit" block id="button"> <ion-icon name="md-add" class="ion"></ion-icon>&nbsp;&nbsp;发布</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\addpage\addpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AddpagePage);
    return AddpagePage;
}());

//# sourceMappingURL=addpage.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_jizhangben_jizhangben__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_mingxi_mingxi__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_addplan_addplan__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_triplan_triplan__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_zongji_zongji__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_nullpage_nullpage__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_gonglue_gonglue__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_pinglun_pinglun__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_shouyeqq_shouyeqq__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_collection_collection__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_strategy_strategy__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_attention_attention__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_register_register__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_enroll_enroll__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_concerning_concerning__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_message_message__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_opinion_opinion__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_fans_fans__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_addpage_addpage__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_myself_myself__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_sub_header_sub_header__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_image_picker__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// import { LocalStorageProvider } from '../providers/local-storage/local-storage';
//qiqi

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_jizhangben_jizhangben__["a" /* JizhangbenPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_mingxi_mingxi__["a" /* MingxiPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_addplan_addplan__["a" /* AddplanPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_nullpage_nullpage__["a" /* NullpagePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_triplan_triplan__["a" /* TriplanPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_zongji_zongji__["a" /* ZongjiPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_shouyeqq_shouyeqq__["a" /* ShouyeqqPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_gonglue_gonglue__["a" /* GongluePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_pinglun_pinglun__["a" /* PinglunPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_enroll_enroll__["a" /* EnrollPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_concerning_concerning__["a" /* ConcerningPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_opinion_opinion__["a" /* OpinionPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_fans_fans__["a" /* FansPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_attention_attention__["a" /* AttentionPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_strategy_strategy__["a" /* StrategyPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_collection_collection__["a" /* CollectionPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_addpage_addpage__["a" /* AddpagePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_myself_myself__["a" /* MyselfPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_sub_header_sub_header__["a" /* SubHeaderPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    tabsHideOnSubPages: true,
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_jizhangben_jizhangben__["a" /* JizhangbenPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_mingxi_mingxi__["a" /* MingxiPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_nullpage_nullpage__["a" /* NullpagePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_addplan_addplan__["a" /* AddplanPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_triplan_triplan__["a" /* TriplanPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_zongji_zongji__["a" /* ZongjiPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_shouyeqq_shouyeqq__["a" /* ShouyeqqPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_gonglue_gonglue__["a" /* GongluePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_pinglun_pinglun__["a" /* PinglunPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_enroll_enroll__["a" /* EnrollPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_concerning_concerning__["a" /* ConcerningPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_opinion_opinion__["a" /* OpinionPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_fans_fans__["a" /* FansPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_attention_attention__["a" /* AttentionPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_strategy_strategy__["a" /* StrategyPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_collection_collection__["a" /* CollectionPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_addpage_addpage__["a" /* AddpagePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_myself_myself__["a" /* MyselfPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_sub_header_sub_header__["a" /* SubHeaderPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_image_picker__["a" /* ImagePicker */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_register_register__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_register_register__["a" /* RegisterPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shouyeqq_shouyeqq__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__shouyeqq_shouyeqq__["a" /* ShouyeqqPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\bbb\Whatever\Projects\snail\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="助手" tabIcon="md-build"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="我" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"F:\bbb\Whatever\Projects\snail\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ModalController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[222]);
//# sourceMappingURL=main.js.map