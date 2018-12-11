webpackJsonp([9],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-collection',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\collection\collection.html"*/'<!-- 我的收藏 -->\n<ion-header text-center no-border>\n  <ion-navbar color="major">\n    <ion-title>{{titleTitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="s_content">\n    <ul>\n      <li>\n        <div class="list">\n          <div class="name">\n            <img src="assets/imgs/header_1.jpg" alt="头像">\n            <span>佳琦琦琦</span>\n          </div>\n          <div class="title">\n            <p>八月去北京，这份攻略你一定要看</p>\n          </div>\n          <div class="c_content">\n            <p>说到北京，我算是很有发言权了，前后和不同的人去过三次，每次感受都不同，分享给你：\n              第一次...</p>\n          </div>\n          <div class="picture">\n            <img src="assets/imgs/北京攻略.jpg" alt="北京攻略图片">\n          </div>\n          <div class="bottom">\n            <span>赞 345</span>\n            <span>评论 12</span>\n            <span float-right>2018-11-24</span>\n          </div>\n        </div>\n      </li>\n      <li>\n        <div class="list">\n          <div class="name">\n              <img src="assets/imgs/header_2.jpg" alt="头像">\n              <span>琦琦琦</span>\n          </div>\n          <div class="title">\n            <p>半梦半醒间，醉美崂山</p>\n          </div>\n          <div class="c_content">\n            <p>第 1 天\n              初看山是山，水是水\n              继而山不是山，水不是水\n              终乃山还是山，水还是水。夜晚的仰口沙滩上...</p>\n          </div>\n          <div class="picture">\n            <img src="assets/imgs/青岛攻略.jpg" alt="青岛攻略图片">\n          </div>\n          <div class="bottom">\n            <span>赞 345</span>\n            <span>评论 12</span>\n            <span float-right>2018-11-24</span>\n          </div>\n        </div>\n      </li>\n      <li>\n        <div class="list">\n          <div class="name">\n              <img src="assets/imgs/header_3.jpg" alt="头像">\n              <span>琦琦琦</span>\n          </div>\n          <div class="title">\n            <p>一篇攻略告诉你，到了四川该怎么玩？</p>\n          </div>\n          <div class="c_content">\n            <p>成都必去—也是网红打卡圣地---稻城亚丁：成都-康定-日瓦-稻城亚丁，这路上的风景堪称一绝，简直是...</p>\n          </div>\n          <div class="picture">\n            <img src="assets/imgs/成都攻略.jpg" alt="四川攻略图片">\n          </div>\n          <div class="bottom">\n            <span>赞 345</span>\n            <span>评论 12</span>\n            <span float-right>2018-11-24</span>\n          </div>\n        </div>\n      </li>\n      <li>\n        <div class="list">\n          <div class="name">\n              <img src="assets/imgs/header_4.jpg" alt="头像">\n              <span>曦丫丫丫丫</span>\n          </div>\n          <div class="title">\n            <p>就是现在跟我去西藏吧</p>\n          </div>\n          <div class="c_content">\n            <p>“人间天堂，天上西藏”，很多人把去西藏视为人生的朝圣之旅，净化心灵，洗涤灵魂的旅程。\n              每年的5...</p>\n          </div>\n          <div class="picture">\n            <img src="assets/imgs/西藏攻略.jpg" alt="西藏攻略图片">\n          </div>\n          <div class="bottom">\n            <span>赞 345</span>\n            <span>评论 12</span>\n            <span float-right>2018-11-24</span>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\collection\collection.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CollectionPage);
    return CollectionPage;
}());

//# sourceMappingURL=collection.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConcerningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-concerning',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\concerning\concerning.html"*/'<!-- 关于我们 -->\n<ion-header text-center no-border>\n  <ion-navbar color="major">\n    <ion-title>{{titleTitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="picture">\n    <img src="assets/imgs/蜗牛.png" alt="logo">\n  </div>\n  <div class="font">\n    <div class="title" text-center>蜗牛旅行</div>\n    <div class="platform" text-center>v1.0.0</div>\n  </div>\n  <div class="list">\n    <ul>\n      <li>\n          <span>功能介绍</span>\n          <span float-right class="right">></span>\n      </li>\n      <li>\n          <span>协议及声明</span>\n          <span float-right class="right">></span>\n      </li>\n    </ul>\n  </div>\n  <div class="bottom">\n    <div class="statement" text-center>\n      <span><a href="">服务条款&nbsp;&nbsp;&nbsp;</a></span>\n      |\n      <span><a href="">&nbsp;&nbsp;&nbsp;隐私声明</a></span>\n    </div>\n    <div class="copyright" text-center>\n        Copyright © 2018-2018 SnailTravel.All Righr Reserved.\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\concerning\concerning.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ConcerningPage);
    return ConcerningPage;
}());

//# sourceMappingURL=concerning.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrollPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(53);
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
    function EnrollPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EnrollPage.prototype.goTabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    EnrollPage.prototype.goRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    EnrollPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enroll',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\enroll\enroll.html"*/'<!-- 注册 -->\n<ion-content padding>\n  <div class="close" (click)="goTabs()">\n      <ion-icon ios="ios-close" md="md-close"></ion-icon>\n  </div>\n  <div class="header">\n    <img src="assets/imgs/蜗牛.png" alt="图标">\n  </div>\n  <div class="box">\n    <div class="pn">\n      <label>\n        <ion-icon name="contact"></ion-icon>\n        <input type="text" placeholder="手机号/邮箱" class="text-input">\n      </label>\n    </div>\n    <div class="vc">\n      <label>\n        <ion-icon name="checkmark"></ion-icon>\n        <input type="number" placeholder="验证码" class="text-input">\n        <button ion-button>发送验证码</button>\n      </label>\n    </div>\n    <div class="pw">\n      <label>\n        <ion-icon name="lock"></ion-icon>\n        <input type="password" placeholder="密码" class="text-input">\n      </label>\n    </div>\n    <button ion-button block>注册</button>\n  </div>\n  <div class="buttom">\n    <span float-left (click)="goRegister()">已有账号？去登陆</span>\n  </div>\n</ion-content>\n  '/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\enroll\enroll.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EnrollPage);
    return EnrollPage;
}());

//# sourceMappingURL=enroll.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-message',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\message\message.html"*/'<!-- 我的消息 -->\n<ion-header text-center no-border>\n  <ion-navbar color="major">\n    <ion-title>{{titleTitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ul>\n  <li>\n    <div class="header">\n      <img src="assets/imgs/header_3.jpg" alt="头像">\n    </div>\n    <div class="center">\n      <div class="name">\n        佳琦琦琦\n      </div>\n      <div class="signature">\n        ##每一天要开心\n      </div>\n    </div>\n    <div class="right">\n      <div class="imformation" text-right>\n        赞了我\n      </div>\n      <div class="time" text-right>\n        2018-11-24\n      </div>\n    </div>\n  </li>\n  <li>\n    <div class="header">\n      <img src="assets/imgs/header_2.jpg" alt="头像">\n    </div>\n    <div class="center">\n      <div class="name">\n        嘻嘻嘻呀\n      </div>\n      <div class="signature">\n        蜗牛旅行\n      </div>\n    </div>\n    <div class="right">\n      <div class="imformation" text-right>\n        私信了我\n      </div>\n      <div class="time" text-right>\n        2018-11-24\n      </div>\n    </div>\n  </li>\n  <li>\n    <div class="header">\n      <img src="assets/imgs/header_4.jpg" alt="头像">\n    </div>\n    <div class="center">\n      <div class="name">\n        snail\n      </div>\n      <div class="signature">\n        坦然\n      </div>\n    </div>\n    <div class="right">\n      <div class="imformation" text-right>\n        私信了我\n      </div>\n      <div class="time" text-right>\n        2018-11-24\n      </div>\n    </div>\n  </li>\n  <li>\n    <div class="header">\n      <img src="assets/imgs/header_5.jpg" alt="头像">\n    </div>\n    <div class="center">\n      <div class="name">\n        大可爱\n      </div>\n      <div class="signature">\n        跟我一起旅游吧\n      </div>\n    </div>\n    <div class="right">\n      <div class="imformation" text-right>\n        评论了我\n      </div>\n      <div class="time" text-right>\n        2018-11-24\n      </div>\n    </div>\n  </li>\n</ul>\n</ion-content>\n'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\message\message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpinionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
    function OpinionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.titleTitle = this.navParams.get('title');
    }
    OpinionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-opinion',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\opinion\opinion.html"*/'<!-- 意见反馈 -->\n<ion-header text-center no-border>\n  <ion-navbar color="major">\n    <ion-title>{{titleTitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="content">\n    <div class="c1">\n      <div class="font">您的问题或建议：</div>\n      <div class="text">\n        <label>\n          <input type="text" placeholder="意见反馈:" class="text-input">\n        </label>\n      </div>\n    </div>\n  </div>\n  <div class="content">\n    <div class="c1">\n      <div class="font">您联系方式：</div>\n      <div class="text">\n        <label>\n          <input type="text" placeholder="请输入电话号码" class="text-input">\n        </label>\n      </div>\n    </div>\n  </div>\n  <div class="comfirm">\n    <button ion-button block>确认</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\opinion\opinion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], OpinionPage);
    return OpinionPage;
}());

//# sourceMappingURL=opinion.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrategyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-strategy',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\strategy\strategy.html"*/'<!-- 我的攻略 -->\n<ion-header text-center no-border>\n  <ion-navbar color="major">\n    <ion-title>{{titleTitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="s_content">\n    <ul>\n      <li>\n        <div class="list">\n          <div class="title">\n            <p>八月去北京，这份攻略你一定要看</p>\n          </div>\n          <div class="c_content">\n            <p>说到北京，我算是很有发言权了，前后和不同的人去过三次，每次感受都不同，分享给你：\n              第一次...</p>\n          </div>\n          <div class="picture">\n            <img src="assets/imgs/北京攻略.jpg" alt="北京攻略图片">\n          </div>\n          <div class="bottom">\n            <span>赞 345</span>\n            <span>评论 12</span>\n            <span float-right>2018-11-24</span>\n          </div>\n        </div>\n      </li>\n      <li>\n        <div class="list">\n          <div class="title">\n            <p>半梦半醒间，醉美崂山</p>\n          </div>\n          <div class="c_content">\n            <p>第 1 天\n              初看山是山，水是水\n              继而山不是山，水不是水\n              终乃山还是山，水还是水。夜晚的仰口沙滩上...</p>\n          </div>\n          <div class="picture">\n            <img src="assets/imgs/青岛攻略.jpg" alt="青岛攻略图片">\n          </div>\n          <div class="bottom">\n            <span>赞 345</span>\n            <span>评论 12</span>\n            <span float-right>2018-11-24</span>\n          </div>\n        </div>\n      </li>\n      <li>\n        <div class="list">\n          <div class="title">\n            <p>一篇攻略告诉你，到了四川该怎么玩？</p>\n          </div>\n          <div class="c_content">\n            <p>成都必去—也是网红打卡圣地---稻城亚丁：成都-康定-日瓦-稻城亚丁，这路上的风景堪称一绝，简直是...</p>\n          </div>\n          <div class="picture">\n            <img src="assets/imgs/成都攻略.jpg" alt="四川攻略图片">\n          </div>\n          <div class="bottom">\n            <span>赞 345</span>\n            <span>评论 12</span>\n            <span float-right>2018-11-24</span>\n          </div>\n        </div>\n      </li>\n      <li>\n        <div class="list">\n          <div class="title">\n            <p>就是现在跟我去西藏吧</p>\n          </div>\n          <div class="c_content">\n            <p>“人间天堂，天上西藏”，很多人把去西藏视为人生的朝圣之旅，净化心灵，洗涤灵魂的旅程。\n              每年的5...</p>\n          </div>\n          <div class="picture">\n            <img src="assets/imgs/西藏攻略.jpg" alt="西藏攻略图片">\n          </div>\n          <div class="bottom">\n            <span>赞 345</span>\n            <span>评论 12</span>\n            <span float-right>2018-11-24</span>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\strategy\strategy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], StrategyPage);
    return StrategyPage;
}());

//# sourceMappingURL=strategy.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/attention/attention.module": [
		291,
		8
	],
	"../pages/collection/collection.module": [
		292,
		7
	],
	"../pages/concerning/concerning.module": [
		293,
		6
	],
	"../pages/enroll/enroll.module": [
		294,
		5
	],
	"../pages/fans/fans.module": [
		295,
		4
	],
	"../pages/message/message.module": [
		296,
		3
	],
	"../pages/opinion/opinion.module": [
		297,
		2
	],
	"../pages/register/register.module": [
		298,
		1
	],
	"../pages/strategy/strategy.module": [
		299,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_message__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__concerning_concerning__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__opinion_opinion__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fans_fans__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__attention_attention__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__strategy_strategy__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__collection_collection__ = __webpack_require__(104);
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
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage.prototype.ionViewWillEnter = function () {
        this.attention_volume = __WEBPACK_IMPORTED_MODULE_7__attention_attention__["a" /* AttentionPage */].attentionarr.length;
        this.fans_volume = __WEBPACK_IMPORTED_MODULE_6__fans_fans__["a" /* FansPage */].fansarr.length;
    };
    ContactPage.prototype.goRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */], {
            title: '登录'
        });
    };
    ContactPage.prototype.goMessage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], {
            title: '我的消息'
        });
    };
    ContactPage.prototype.goConcerning = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__concerning_concerning__["a" /* ConcerningPage */], {
            title: '关于我们'
        });
    };
    ContactPage.prototype.goOpinion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__opinion_opinion__["a" /* OpinionPage */], {
            title: '意见反馈'
        });
    };
    ContactPage.prototype.goFans = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__fans_fans__["a" /* FansPage */], {
            title: '全部粉丝'
        });
    };
    ContactPage.prototype.goAttention = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__attention_attention__["a" /* AttentionPage */], {
            title: '我的关注'
        });
    };
    ContactPage.prototype.goStrategy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__strategy_strategy__["a" /* StrategyPage */], {
            title: '我的攻略'
        });
    };
    ContactPage.prototype.goCollection = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__collection_collection__["a" /* CollectionPage */], {
            title: '我的收藏'
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\contact\contact.html"*/'<!-- 我的 -->\n<ion-header>\n  <div class="top">\n    <img src="assets/imgs/header_1.jpg" alt="头像" (click)="goRegister()">\n    <p text-center class="p1">\n      <ion-icon ios="ios-create" md="md-create"></ion-icon>\n      杏仁\n    </p>\n    <p text-center class="p2">\n      <ion-icon ios="ios-create" md="md-create"></ion-icon>\n      很酷,不说话\n    </p>\n</div>\n</ion-header>\n\n<ion-content>\n  <div class="con1">\n    <ul>\n      <li (click)="goFans()">\n        <p text-center class="p1">{{fans_volume}}</p>\n        <p text-center class="p2">粉丝</p>\n      </li>\n      <li (click)="goAttention()">\n        <p text-center class="p1">{{attention_volume}}</p>\n        <p text-center class="p2">关注</p>\n      </li>\n      <li (click)="goStrategy()">\n        <p text-center class="p1">32</p>\n        <p text-center class="p2">我的攻略</p>\n      </li>\n    </ul>\n  </div>\n  <div class="con2">\n    <ul>\n      <li (click)="goCollection()">\n        <ion-icon ios="logo-codepen" md="logo-codepen" class="icon1"></ion-icon>\n        <span>我的收藏</span>\n        <span float-right class="right">></span>\n      </li>\n      <li (click)="goMessage()">\n        <ion-icon ios="ios-text" md="md-text" class="icon1"></ion-icon>\n        <span>我的消息</span>\n        <ion-icon name="notifications-outline" class="bell"></ion-icon>\n        <span float-right class="right">></span>\n      </li>\n      <li (click)="goConcerning()">\n          <ion-icon ios="ios-people" md="md-people" class="icon1"></ion-icon>\n          <span>关于我们</span>\n          <span float-right class="right">></span>\n      </li>\n      <li (click)="goOpinion()">\n          <ion-icon ios="ios-create" md="md-create" class="icon1"></ion-icon>\n          <span>意见反馈</span>\n          <span float-right class="right">></span>\n      </li>\n      <li (click)="goRegister()">\n          <ion-icon ios="ios-close-circle" md="md-close-circle" class="icon1"></ion-icon>\n          <span>退出登录</span>\n          <span float-right class="right">></span>\n      </li>\n    </ul>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jizhangben_jizhangben__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__triplan_triplan__ = __webpack_require__(166);
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
            selector: 'page-home',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\home\home.html"*/'<ion-content>\n  <div id="banner">\n    <img src="assets/imgs/lang.png">\n    <p>生活不止眼前的苟且，还有诗和远方~</p>\n  </div>\n  <p id="word">蜗牛旅行，我们一直都在~</p>\n  <div id="div0">\n    <div id="div1" (click)="gosub()">\n      <ion-icon name="md-list-box"></ion-icon>\n      <p>旅行账本</p>\n    </div>\n    <div id="div2" (click)="goplan()">\n      <ion-icon name="md-create"></ion-icon>\n      <p>旅行计划</p>\n    </div>\n    \n    \n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JizhangbenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nullpage_nullpage__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mingxi_mingxi__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JizhangbenPage = /** @class */ (function () {
    function JizhangbenPage(navCtrl, params) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.params = params;
        this.arr = [];
        this.backButtonClick = function (e) {
            _this.navCtrl.pop();
        };
    }
    JizhangbenPage.prototype.ionViewWillEnter = function () {
        this.arr = [];
        this.arr = JSON.parse(window.localStorage.getItem('list1'));
    };
    JizhangbenPage.prototype.ionViewDidLoad = function () {
        this.navBar.backButtonClick = this.backButtonClick;
        this.arr = JSON.parse(window.localStorage.getItem('list1'));
    };
    JizhangbenPage.prototype.gonullpage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__nullpage_nullpage__["a" /* NullpagePage */]);
    };
    JizhangbenPage.prototype.gomingxi = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mingxi_mingxi__["a" /* MingxiPage */], { index: i, arr: this.arr });
        console.log("chuani", i);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */])
    ], JizhangbenPage.prototype, "navBar", void 0);
    JizhangbenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jizhangben',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\jizhangben\jizhangben.html"*/'<ion-header>\n  <ion-navbar id="a" color="blu">\n    <ion-title text-center>记一笔&nbsp;&nbsp;<ion-icon name="md-create"></ion-icon></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name=""></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content>\n  <img src="assets/imgs/plan.png">\n  <button ion-button full (click)="gonullpage()" >添加记录</button>\n\n  <div id="listdiv">\n    <ul id="list" text-center [(ngModel)]="arr" ngDefaultControl>\n      <li  ngDefaultControl *ngFor="let item of arr;let i = index;" (click)="gomingxi(i)" >{{item.goodtype}}:{{item.money}}&nbsp;&nbsp;&nbsp;date:{{item.time}}\n      </li>  \n      \n    </ul>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\jizhangben\jizhangben.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], JizhangbenPage);
    return JizhangbenPage;
}());

//# sourceMappingURL=jizhangben.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NullpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
    function NullpagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userInfo = {
            goodtype: '',
            money: '',
            time: '',
            typemoney: '',
            more: '',
        };
        this.arr1 = [];
    }
    NullpagePage.prototype.ionViewDidLoad = function () {
    };
    NullpagePage.prototype.getSubmit = function () {
        this.navCtrl.pop();
        if (window.localStorage.getItem('list1')) {
            this.arr1 = JSON.parse(window.localStorage.getItem('list1'));
        }
        this.userInfo.goodtype = this.goodtype || "";
        this.userInfo.money = this.money;
        this.userInfo.time = this.time || "";
        this.userInfo.typemoney = this.typemoney;
        this.userInfo.more = this.more;
        //console.log(2)
        console.log(this.userInfo);
        if (this.userInfo.money != null) {
            this.arr1.push(this.userInfo);
        }
        window.localStorage.setItem('list1', JSON.stringify(this.arr1));
        // if(this.money!=null){
        //   this.navCtrl.push(JizhangbenPage);
        // }
    };
    NullpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nullpage',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\nullpage\nullpage.html"*/'<ion-header>\n\n    <ion-navbar id="a" color="blu">\n      <ion-title text-center>记一笔&nbsp;&nbsp;<ion-icon name="md-create"></ion-icon></ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only>\n          <ion-icon name=""></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n    \n  </ion-header>\n\n\n<ion-content color="lgrey">\n    <ion-item id="money">\n      <ion-label color="blu">花销:</ion-label>\n      <ion-input [(ngModel)]="money"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="blu">类别:</ion-label>\n      <ion-select [(ngModel)]="goodtype" multiple="true">\n        <ion-option>食品</ion-option>\n        <ion-option>交通</ion-option>\n        <ion-option>娱乐</ion-option>\n        <ion-option>购物</ion-option>\n        <ion-option>门票</ion-option>\n        <ion-option>住宿</ion-option>\n        <ion-option>其他</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label color="blu">时间:</ion-label>\n      <ion-input [(ngModel)]="time"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="blu">付款类型:</ion-label>\n      <ion-select [(ngModel)]="typemoney" multiple="true">\n        <ion-option>现金</ion-option>\n        <ion-option>支付宝</ion-option>\n        <ion-option>微信</ion-option>\n        <ion-option>储蓄卡</ion-option>\n        <ion-option>信用卡</ion-option>\n        <ion-option>花呗</ion-option>\n        <ion-option>其他</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="blu">备注:</ion-label>\n      <ion-input [(ngModel)]="more"></ion-input>\n    </ion-item>\n    <br/><br/><br/><br/><br/>\n\n    <button ion-button round type="submit" ion-button (click)="getSubmit()">保存</button>\n</ion-content>\n'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\nullpage\nullpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NullpagePage);
    return NullpagePage;
}());

//# sourceMappingURL=nullpage.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MingxiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        this.userInfo = {
            goodtype: '',
            money: '',
            time: '',
            typemoney: '',
            more: '',
        };
    }
    MingxiPage.prototype.ionViewDidLoad = function () {
        this.i = this.params.data.index;
        this.userInfo = JSON.parse(window.localStorage.getItem('list1'))[this.i];
        console.log(window.localStorage.getItem('list1'));
        //console.log(1)
        console.log(this.userInfo);
    };
    MingxiPage.prototype.deletelist = function () {
        this.navCtrl.pop();
        console.log("删除的序列号:", this.i);
        console.log(window.localStorage.getItem('list1'));
        console.log(JSON.parse(window.localStorage.getItem('list1')));
        var arr = JSON.parse(window.localStorage.getItem('list1'));
        arr.splice(this.i, 1);
        window.localStorage.setItem('list1', JSON.stringify(arr));
    };
    MingxiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mingxi',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\mingxi\mingxi.html"*/'<ion-header>\n\n  <ion-navbar id="a" color="blu">\n    <ion-title text-center>明细&nbsp;&nbsp;<ion-icon name="md-create"></ion-icon></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name=""></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content color="lgrey">\n  <ion-item id="money">\n    <ion-label color="blu">花销:&nbsp;&nbsp;{{userInfo.money}}</ion-label>\n  </ion-item>\n\n  <ion-item id="money">\n    <ion-label color="blu">类别:&nbsp;&nbsp;{{userInfo.goodtype}}</ion-label>\n  </ion-item>\n\n\n  <ion-item id="money">\n    <ion-label color="blu">时间:&nbsp;&nbsp;{{userInfo.time}}</ion-label>\n  </ion-item>\n\n  <ion-item id="money">\n    <ion-label color="blu">付款类型:&nbsp;&nbsp;{{userInfo.typemoney}}</ion-label>\n  </ion-item>\n\n\n  <ion-item id="money">\n    <ion-label color="blu">备注:&nbsp;&nbsp;{{userInfo.more}}</ion-label>\n  </ion-item>\n\n  <br/><br/><br/>\n  <button ion-button round (click)="deletelist()">删除</button>\n</ion-content>'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\mingxi\mingxi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MingxiPage);
    return MingxiPage;
}());

//# sourceMappingURL=mingxi.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriplanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addplan_addplan__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zongji_zongji__ = __webpack_require__(168);
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
    function TriplanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.arr = [];
    }
    TriplanPage.prototype.goaddplan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addplan_addplan__["a" /* AddplanPage */]);
    };
    TriplanPage.prototype.ionViewWillEnter = function () {
        this.arr = [];
        this.arr = JSON.parse(window.localStorage.getItem('list2'));
    };
    TriplanPage.prototype.ionViewDidLoad = function () {
        this.arr = JSON.parse(window.localStorage.getItem('list2'));
    };
    TriplanPage.prototype.gomingxi2 = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__zongji_zongji__["a" /* ZongjiPage */], { index: i, arr: this.arr });
        console.log("chuani", i);
    };
    TriplanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-triplan',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\triplan\triplan.html"*/'<ion-header>\n  <ion-navbar id="a" color="blu">\n    <ion-title text-center>我的计划</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goaddplan()" >\n        <ion-icon name="md-add" id="icony"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content>\n  \n  <div id="listdiv">\n    <ul id="list" text-center>\n      <li  ngDefaultControl *ngFor="let item of arr;let i = index;" (click)="gomingxi2(i)" >\n        第{{item.days}}\n        <br/>\n        上午:{{item.shangwu}} <br/>\n        中午:{{item.zhongwu}}<br/>\n        下午:{{item.xiawu}}<br/>\n        晚上:{{item.wanshang}}\n      </li>  \n      \n    </ul>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\triplan\triplan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TriplanPage);
    return TriplanPage;
}());

//# sourceMappingURL=triplan.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddplanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
    function AddplanPage(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.arr = [];
        this.list = {
            days: "",
            shangwu: "",
            zhongwu: "",
            xiawu: "",
            wanshang: ""
        };
    }
    AddplanPage.prototype.ionViewDidLoad = function () {
    };
    AddplanPage.prototype.saveplan = function () {
        this.navCtrl.pop();
        if (window.localStorage.getItem('list2')) {
            this.arr = JSON.parse(window.localStorage.getItem('list2'));
        }
        this.list.days = this.days;
        this.list.shangwu = this.shangwu;
        this.list.zhongwu = this.zhongwu;
        this.list.xiawu = this.xiawu;
        this.list.wanshang = this.wanshang;
        console.log(this.arr);
        this.arr.push(this.list);
        window.localStorage.setItem('list2', JSON.stringify(this.arr));
    };
    AddplanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addplan',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\addplan\addplan.html"*/'<ion-header>\n  <ion-navbar id="a" color="blu">\n    <ion-title text-center>添加计划</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name=""></ion-icon>\n        <ion-icon name=""></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content>\n  <ion-item id="item1">\n    <ion-label color="blu">第几天：</ion-label>\n    <ion-select [(ngModel)]="days" multiple="true">\n      <ion-option>1天</ion-option>\n      <ion-option>2天</ion-option>\n      <ion-option>3天</ion-option>\n      <ion-option>4天</ion-option>\n      <ion-option>5天</ion-option>\n      <ion-option>6天</ion-option>\n      <ion-option>7天</ion-option>\n      <ion-option>8天</ion-option>\n      <ion-option>9天</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="blu" stacked>上午：</ion-label>\n    <ion-input type="text" [(ngModel)]="shangwu"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="blu" stacked>中午：</ion-label>\n    <ion-input type="text" [(ngModel)]="zhongwu"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="blu" stacked>下午：</ion-label>\n    <ion-input type="text" [(ngModel)]="xiawu"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="blu" stacked>晚上：</ion-label>\n    <ion-input type="text" [(ngModel)]="wanshang"></ion-input>\n  </ion-item>\n\n  <button ion-button round type="submit" ion-button (click)="saveplan()">保存</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\addplan\addplan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddplanPage);
    return AddplanPage;
}());

//# sourceMappingURL=addplan.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZongjiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            shangwu: "",
            zhongwu: "",
            xiawu: "",
            wanshang: ""
        };
        this.arr2 = [];
    }
    ZongjiPage.prototype.ionViewDidLoad = function () {
        this.i = this.params.data.index;
        this.list = JSON.parse(window.localStorage.getItem('list2'))[this.i];
        console.log(window.localStorage.getItem('list1'));
        console.log(this.i);
        console.log(this.list);
    };
    ZongjiPage.prototype.deletelist = function () {
        this.navCtrl.pop();
        var arr2 = JSON.parse(window.localStorage.getItem('list2'));
        arr2.splice(this.i, 1);
        window.localStorage.setItem('list2', JSON.stringify(arr2));
    };
    ZongjiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-zongji',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\zongji\zongji.html"*/'<ion-header>\n    <ion-navbar id="a" color="blu">\n      <ion-title text-center>我的计划</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only>\n          <ion-icon name=""></ion-icon>\n          <ion-icon name=""></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n    \n  </ion-header>\n\n\n<ion-content>\n  <ion-item>\n    <ion-label color="primary">第{{list.days}}</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary">上午:{{list.shangwu}}</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary">中午:{{list.zhongwu}}</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary">下午:{{list.xiawu}}</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary">晚上:{{list.wanshang}}</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <br/><br/><br/>\n  <button ion-button round (click)="deletelist()">删除</button>\n</ion-content>\n'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\zongji\zongji.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ZongjiPage);
    return ZongjiPage;
}());

//# sourceMappingURL=zongji.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GongluePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pinglun_pinglun__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shouyeqq_shouyeqq__ = __webpack_require__(81);
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
            selector: 'page-gonglue',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\gonglue\gonglue.html"*/'\n<ion-header>\n\n  <ion-navbar color="blu">\n    <ion-title (click)="goHomePage()"></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="ioncontent">\n  <div class="fixed1">\n      <p class="title">{{userInfo.title}}</p>\n    <hr>\n    <img src="{{userInfo.touxiang}}" alt="" class="touxiang">\n    <span class="username">{{userInfo.name}}</span>\n    <p class="content">{{userInfo.content}}</p>\n    <img src="{{userInfo.imgUrl}}" alt="" class="articleimg">\n  </div>\n    \n    \n</ion-content>\n<ion-footer>\n    <div  class="fixed">\n        <!-- <p class="time">发布于{{userInfo.time}}--著作权归作者所有</p> -->\n        <!-- <img src="../assets/imgs/3.jpg" alt="" class="mytouxiang">\n        <input type="text" placeholder="添加评论..." class="pinglun"> -->\n        <div class="last">\n         <!-- <button class="agree"> <ion-icon ios="ios-arrow-dropup" md="md-arrow-dropup"></ion-icon>赞同</button>\n         <button class="argue"> <ion-icon ios="ios-arrow-dropdown" md="md-arrow-dropdown"></ion-icon></button> -->\n          <div class="divs">\n            <div class="div1">\n              <ion-icon ios="ios-heart" md="md-heart" class="icon"></ion-icon>\n              <p>感谢</p>\n            </div>\n            <div class="div2">\n              <ion-icon ios="ios-star" md="md-star" class="icon"></ion-icon>\n              <p>收藏</p>\n            </div>\n            <div class="div3" (click)="goPinglunPage()">\n              <ion-icon ios="ios-menu" md="md-menu" class="icon"></ion-icon>\n              <p>评论</p>\n            </div>\n          </div>\n        </div>\n      </div>\n</ion-footer>\n\n'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\gonglue\gonglue.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], GongluePage);
    return GongluePage;
}());

//# sourceMappingURL=gonglue.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinglunPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-pinglun',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\pinglun\pinglun.html"*/'<!--\n  Generated template for the PinglunPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="blu">\n      <ion-title>评论</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n     <p class="allpinglun">全部评论</p>\n    <div *ngFor="let comment of comment[\'comment\'];let idx=index;" class="pingluns">\n        <img src="{{comment.touxiang}}" alt="" class="touxiang">\n        <span class="username">{{comment.name}}</span>\n        <div class="div1">\n            <p>{{comment.content}}</p>\n        </div>\n        <div class="other">\n          <span class="time">{{comment.time}}</span>\n          <span class="huifu">查看回复</span>\n          <div class="zanpinglun">\n              <div class="zan">\n                <span>{{comment.zan}}</span><ion-icon  md="md-hand" (click)="inceresezan(idx)" class="dianzan"></ion-icon>\n              </div>\n              <div class="pinglun">\n                <span>{{comment.pinglun}}</span><ion-icon md="md-chatbubbles" (click)="increasecomment(idx)"></ion-icon>\n              </div>\n          </div>\n        </div>\n    </div>\n  </ion-content>\n  '/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\pinglun\pinglun.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PinglunPage);
    return PinglunPage;
}());

//}
//# sourceMappingURL=pinglun.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
    function AddpagePage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
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
    AddpagePage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad AddpagePage');
    };
    AddpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addpage',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\addpage\addpage.html"*/'<ion-header >\n  <ion-navbar color="blu">\n    <ion-buttons style="position: absolute;left:2%">\n      <button ion-button icon-only (click)="showConfirm()">\n        取消       \n      </button>\n    </ion-buttons>  \n    <ion-title text-center>在路上</ion-title>\n    <ion-buttons style="position: absolute;right:2%;top:25%;">\n      <button ion-button icon-only>\n        发布\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-textarea placeholder="分享你的旅行攻略，你的心情。。。"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>禁止转载</ion-label>\n      <ion-toggle [(ngModel)]="zhuanzai"></ion-toggle>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>匿名身份</ion-label>\n      <ion-toggle [(ngModel)]="niming"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>公开</ion-label>\n      <ion-toggle [(ngModel)]="gongkai"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\addpage\addpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddpagePage);
    return AddpagePage;
}());

//# sourceMappingURL=addpage.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_jizhangben_jizhangben__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mingxi_mingxi__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_addplan_addplan__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_triplan_triplan__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_zongji_zongji__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_nullpage_nullpage__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_gonglue_gonglue__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_pinglun_pinglun__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_shouyeqq_shouyeqq__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_collection_collection__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_strategy_strategy__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_attention_attention__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_register_register__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_enroll_enroll__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_concerning_concerning__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_message_message__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_opinion_opinion__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_fans_fans__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_addpage_addpage__ = __webpack_require__(172);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_jizhangben_jizhangben__["a" /* JizhangbenPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mingxi_mingxi__["a" /* MingxiPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_addplan_addplan__["a" /* AddplanPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_nullpage_nullpage__["a" /* NullpagePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_triplan_triplan__["a" /* TriplanPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_zongji_zongji__["a" /* ZongjiPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_shouyeqq_shouyeqq__["a" /* ShouyeqqPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_gonglue_gonglue__["a" /* GongluePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_pinglun_pinglun__["a" /* PinglunPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_enroll_enroll__["a" /* EnrollPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_concerning_concerning__["a" /* ConcerningPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_opinion_opinion__["a" /* OpinionPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_fans_fans__["a" /* FansPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_attention_attention__["a" /* AttentionPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_strategy_strategy__["a" /* StrategyPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_collection_collection__["a" /* CollectionPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_addpage_addpage__["a" /* AddpagePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    tabsHideOnSubPages: true,
                }, {
                    links: [
                        { loadChildren: '../pages/attention/attention.module#AttentionPageModule', name: 'AttentionPage', segment: 'attention', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/collection/collection.module#CollectionPageModule', name: 'CollectionPage', segment: 'collection', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/concerning/concerning.module#ConcerningPageModule', name: 'ConcerningPage', segment: 'concerning', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enroll/enroll.module#EnrollPageModule', name: 'EnrollPage', segment: 'enroll', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fans/fans.module#FansPageModule', name: 'FansPage', segment: 'fans', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opinion/opinion.module#OpinionPageModule', name: 'OpinionPage', segment: 'opinion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/strategy/strategy.module#StrategyPageModule', name: 'StrategyPage', segment: 'strategy', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_jizhangben_jizhangben__["a" /* JizhangbenPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mingxi_mingxi__["a" /* MingxiPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_nullpage_nullpage__["a" /* NullpagePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_addplan_addplan__["a" /* AddplanPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_triplan_triplan__["a" /* TriplanPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_zongji_zongji__["a" /* ZongjiPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_shouyeqq_shouyeqq__["a" /* ShouyeqqPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_gonglue_gonglue__["a" /* GongluePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_pinglun_pinglun__["a" /* PinglunPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_enroll_enroll__["a" /* EnrollPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_concerning_concerning__["a" /* ConcerningPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_opinion_opinion__["a" /* OpinionPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_fans_fans__["a" /* FansPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_attention_attention__["a" /* AttentionPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_strategy_strategy__["a" /* StrategyPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_collection_collection__["a" /* CollectionPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_addpage_addpage__["a" /* AddpagePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(46);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-about',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shouyeqq_shouyeqq__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addpage_addpage__ = __webpack_require__(172);
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
    TabsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        document.querySelector('.ion-md-add-circle').addEventListener('click', function () {
            var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__addpage_addpage__["a" /* AddpagePage */]);
            profileModal.present();
        }, false);
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="information-circle"></ion-tab>\n  <ion-tab tabIcon="md-add-circle"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="助手" tabIcon="md-build"></ion-tab>\n  \n  <ion-tab [root]="tab3Root" tabTitle="我" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* ModalController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttentionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fans_fans__ = __webpack_require__(52);
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
            signature: "来自 个人主页",
            buttonValue: "互相关注"
        },
        {
            status: 0,
            headerSrc: "assets/imgs/header_7.jpg",
            name: "大头大头",
            signature: "来自 个人主页",
            buttonValue: "√ 已关注"
        },
        {
            status: 0,
            headerSrc: "assets/imgs/header_1.jpg",
            name: "hhh_",
            signature: "来自 推荐",
            buttonValue: "√ 已关注"
        },
        {
            status: 0,
            headerSrc: "assets/imgs/header_6.jpg",
            name: "啊哈哈",
            signature: "来自 推荐",
            buttonValue: "√ 已关注"
        },
        {
            status: 1,
            headerSrc: "assets/imgs/header_2.jpg",
            name: "123",
            signature: "来自 推荐",
            buttonValue: "互相关注"
        },
    ];
    AttentionPage = AttentionPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-attention',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\attention\attention.html"*/'<!-- 关注 -->\n<ion-header text-center no-border>\n  <ion-navbar color="major">\n    <ion-title>{{titleTitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n  \n<ion-content padding>\n  <div class="fans">\n    <ul>\n        <li *ngFor="let item of attention;let i = index">\n        <div class="header">\n          <img src="{{item.headerSrc}}" alt="头像">\n        </div>\n        <div class="center">\n          <div class="name">\n              {{item.name}}\n          </div>\n          <div class="signature">\n              {{item.signature}}\n          </div>\n        </div>\n        <div class="right">\n          <button [ngClass]="{\'only\':item.status == 0,\'each\':item.status == 1}" (click)="show(i);showConfirm()">{{item.buttonValue}}</button>\n        </div>\n      </li>\n    </ul>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\attention\attention.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AttentionPage);
    return AttentionPage;
    var AttentionPage_1;
}());

//# sourceMappingURL=attention.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attention_attention__ = __webpack_require__(51);
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
            signature: "来自 个人主页",
            buttonValue: "互相关注"
        },
        {
            status: 0,
            headerSrc: "assets/imgs/header_5.jpg",
            name: "咿呀呀",
            signature: "来自 推荐",
            buttonValue: "+ 关注"
        },
        {
            status: 1,
            headerSrc: "assets/imgs/header_2.jpg",
            name: "123",
            signature: "来自 推荐",
            buttonValue: "互相关注"
        },
        {
            status: 0,
            headerSrc: "assets/imgs/header_3.jpg",
            name: "lemon",
            signature: "来自 个人主页",
            buttonValue: "+ 关注"
        },
    ];
    FansPage = FansPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fans',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\fans\fans.html"*/'<!-- 粉丝 -->\n<ion-header text-center no-border>\n  <ion-navbar color="major">\n    <ion-title>{{titleTitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="fans">\n    <ul>\n      <li *ngFor="let item of fans;let i = index">\n        <div class="header">\n          <img src="{{item.headerSrc}}" alt="头像">\n        </div>\n        <div class="center">\n          <div class="name">\n            {{item.name}}\n          </div>\n          <div class="signature">\n            {{item.signature}}\n          </div>\n        </div>\n        <div class="right">\n          <button [ngClass]="{\'only\':item.status == 0,\'each\':item.status == 1}" (click)="show(i);showConfirm($event);">{{item.buttonValue}}</button>\n        </div>\n      </li>\n    </ul>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\fans\fans.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FansPage);
    return FansPage;
    var FansPage_1;
}());

//# sourceMappingURL=fans.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enroll_enroll__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(46);
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
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.goEnroll = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enroll_enroll__["a" /* EnrollPage */], {
            title: '注册'
        });
        console.log("EnrollPage");
    };
    RegisterPage.prototype.goTabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\register\register.html"*/'<!-- 登录 -->\n<ion-content padding>\n  <div class="close" (click)="goTabs()">\n      <ion-icon ios="ios-close" md="md-close"></ion-icon>\n  </div>\n  <div class="header">\n    <img src="assets/imgs/蜗牛.png" alt="图标">\n  </div>\n  <div class="box">\n    <div class="pn">\n      <label>\n        <ion-icon name="contact"></ion-icon>\n        <input type="text" placeholder="手机号/邮箱" class="text-input">\n      </label>\n    </div>\n    <div class="pw">\n      <label>\n        <ion-icon name="lock"></ion-icon>\n        <input type="password" placeholder="密码" class="text-input">\n      </label>\n    </div>\n    <button ion-button block>登录</button>\n  </div>\n  <div class="buttom">\n    <span float-left (click)="goEnroll()">没有账号？立即注册</span>\n    <span class="psw">忘记密码</span>\n  </div>\n</ion-content>\n  '/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShouyeqqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gonglue_gonglue__ = __webpack_require__(170);
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
    function ShouyeqqPage(modalCtrl, navCtrl, http, navParams) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.isActive = 0;
        this.data = {
            username: '张三',
            callback: function (data) {
                console.log(data.info);
            }
        };
        this.arr = ["你的攻略", "我的关注"];
        this.users = [
            { name: '仙女不仙',
                touxiang: '../assets/imgs/2.jpg',
                title: '八月去北京，这份攻略你一定要看',
                content: '8月份北京还是很热的，温度几乎在30度以上，而且紫外线很强。阴天的时候也是要做好防晒工作的！！光阴蹉跎，世界喧嚣，我自己要警惕，在人生旅途上保持一份童趣和闲心是不容易的。光阴蹉跎，世界喧嚣，我自己要警惕，在人生旅途上保持一份童趣和闲心是不容易的光阴蹉跎，世界喧嚣，我自己要警惕，在人生旅途上保持一份童趣和闲心是不容易的如果哪一天我只是埋头于人生中的种种事务，不再有兴致扒在车窗旁看沿途的风光，倾听内心的音乐，那时候我就真正老了俗了，那样便辜负了人生这一趟美好的旅行，倾听内心的音乐，那时候我就真正老了俗了，那样便辜负了人生这一趟美好的旅行，倾听内心的音乐，那时候我就真正老了俗了，那样便辜负了人生这一趟美好的旅行!!!',
                imgUrl: '../assets/imgs/4.jpg',
                agree: 455,
                pinglun: 3,
                time: '2018.08.10',
                comment: [
                    {
                        touxiang: '../assets/imgs/2.jpg',
                        name: '大大爱你',
                        content: '小姐姐住什么酒店',
                        time: '2018.08.10',
                        zan: 123,
                        pinglun: 23
                    },
                    {
                        touxiang: '../assets/imgs/4.jpg',
                        name: '总有一个人',
                        content: '需要提前一小时购票吗',
                        time: '2018.08.10',
                        zan: 22,
                        pinglun: 23
                    },
                    {
                        touxiang: '../assets/imgs/4.jpg',
                        name: '嘻嘻哈哈',
                        content: '门票是通票吗',
                        time: '2018.08.10',
                        zan: 22,
                        pinglun: 23
                    }
                ]
            },
            { name: '杏仁',
                touxiang: '../assets/imgs/3.jpg',
                title: '大学生五天穷游北京',
                content: '8月份北京还是很热的，温度几乎在30度以上，而且紫外线很强。阴天的时候也是要做好防晒工作的！！...',
                imgUrl: '../assets/imgs/8.jpg',
                agree: 44,
                pinglun: 23,
                time: '2015.04.10',
                comment: [
                    {
                        touxiang: '../assets/imgs/2.jpg',
                        name: '哈哈哈哈',
                        content: '坐大巴合适吗',
                        time: '2018.08.10',
                        zan: 123,
                        pinglun: 23
                    },
                    {
                        touxiang: '../assets/imgs/4.jpg',
                        name: '美猴王',
                        content: '旋转木马的开放时间固定吗',
                        time: '2018.08.10',
                        zan: 22,
                        pinglun: 23
                    }
                ]
            }
        ];
        this.users2 = [
            {
                name: '王佳佳',
                touxiang: '../assets/imgs/2.jpg',
                title: '八月去北京，这份攻略你一定要看',
                content: '8月份北京还是很热的，温度几乎在30度以上，而且紫外线很强。阴天的时候也是要做好防晒工作的！！...',
                imgUrl: '../assets/imgs/4.jpg',
                agree: 455,
                pinglun: 3,
                time: '2018.08.10',
                comment: [
                    {
                        touxiang: '../assets/imgs/2.jpg',
                        name: '巴拉拉',
                        content: '坐大巴合适吗',
                        time: '2018.08.10',
                        zan: 123,
                        pinglun: 23
                    },
                    {
                        touxiang: '../assets/imgs/4.jpg',
                        name: '小魔仙',
                        content: '旋转木马的开放时间固定吗',
                        time: '2018.08.10',
                        zan: 442,
                        pinglun: 53
                    },
                    {
                        touxiang: '../assets/imgs/6.jpg',
                        name: '看见美好',
                        content: '很棒的分享哦',
                        time: '2018.08.10',
                        zan: 32,
                        pinglun: 23
                    }
                ]
            },
            { name: '沧海一粟',
                touxiang: '../assets/imgs/4.jpg',
                title: '大学生五天穷游北京',
                content: '8月份北京还是很热的，温度几乎在30度以上，而且紫外线很强。阴天的时候也是要做好防晒工作的！！...',
                imgUrl: '../assets/imgs/8.jpg',
                agree: 44,
                pinglun: 23,
                time: '2015.04.10',
                comment: [
                    {
                        touxiang: '../assets/imgs/2.jpg',
                        name: '那些年',
                        content: '坐大巴合适吗',
                        time: '2018.08.10',
                        zan: 123,
                        pinglun: 23
                    },
                    {
                        touxiang: '../assets/imgs/4.jpg',
                        name: '时光匆匆',
                        content: '旋转木马的开放时间固定吗',
                        time: '2018.08.10',
                        zan: 22,
                        pinglun: 23
                    }
                ]
            }
        ];
    }
    ShouyeqqPage.prototype.isClick = function (i) {
        this.isActive = i;
    };
    ShouyeqqPage.prototype.goGongluePage = function (idx) {
        if (this.isActive == 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__gonglue_gonglue__["a" /* GongluePage */], {
                name: this.users[idx].name,
                touxiang: this.users[idx].touxiang,
                title: this.users[idx].title,
                content: this.users[idx].content,
                imgUrl: this.users[idx].imgUrl,
                time: this.users[idx].time,
                comment: this.users[idx].comment,
                data: this.data
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__gonglue_gonglue__["a" /* GongluePage */], {
                name: this.users2[idx].name,
                touxiang: this.users2[idx].touxiang,
                title: this.users2[idx].title,
                content: this.users2[idx].content,
                imgUrl: this.users2[idx].imgUrl,
                time: this.users2[idx].time,
                comment: this.users2[idx].comment,
                data: this.data
            });
        }
    };
    ShouyeqqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shouyeqq',template:/*ion-inline-start:"D:\project\Whatever\Projects\snail\src\pages\shouyeqq\shouyeqq.html"*/'<ion-header>\n  <ion-navbar color="blu">\n      <ion-searchbar class="search1">\n          [(ngModel)]="myInput"\n          [showCancelButton]="shouldShowCancel"\n          (ionInput)="onInput($event)"\n          (ionCancel)="onCancel($event)">\n      </ion-searchbar>\n      <ul class="navList">\n        <li *ngFor="let item of arr;let idx=index;" (click)="isClick(idx)" [class.first]="isActive==idx">{{arr[idx]}}</li>\n      </ul>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div [ngSwitch]="isActive">\n    <div *ngSwitchCase="0">\n     <ion-slides pager="true" autoplay="1000" loop="true" class="sli" style="width:100%;height:10%;">\n            <ion-slide>\n              <img src="assets/imgs/1.jpg" alt="" calss="slide-image" style="width:100%;">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/5.jpg" alt="" calss="slide-image" style="width:100%;">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/6.jpg" alt="" calss="slide-image" style="width:100%;">\n            </ion-slide>\n     </ion-slides>\n     <div class="articles" style="width:90%;margin-left:5%;" *ngFor="let user of users;let idx=index;">\n      <div calss="div1">\n       <img src="{{user.touxiang}}" class="touxiang">\n        <span class="username">{{user.name}}</span>\n       <button calss="guanzhu" style="position:absolute;width:15%;margin-left:70%;margin-top:3%">+关注</button>\n      </div>\n      <div calss="div2">\n        <p class="title" style="position:relative;" (click)="goGongluePage(idx)">{{user.title}}</p>\n        <p class="content" style="width:70%;margin-top:5%;" (click)="goGongluePage(idx)">{{user.content}}</p>\n       <img src="{{user.imgUrl}}" alt="" class="articleimg" style="position:absolute;margin-left:75%;margin-top:-20%;width:25%;height:40%;" (click)="goGongluePage(idx)">\n      </div>\n      <div calss="div3" style="margin-top:3%;">\n         <span>{{user.agree}}赞同</span>\n         <span style="position:relative;">{{user.pinglun}}评论</span>\n         <span class="time" style="position:absolute;margin-left:45%;">{{user.time}}</span>\n      </div>\n      <hr style="margin-top:3%;margin-bottom:3%;">\n     </div>\n    </div>\n    <div *ngSwitchCase="1">\n      <ion-slides pager="true" autoplay="1000" loop="true" class="sli" style="width:100%;height:10%;">\n        <ion-slide>\n          <img src="assets/imgs/1.jpg" alt="" calss="slide-image" style="width:100%;">\n        </ion-slide>\n        <ion-slide>\n          <img src="assets/imgs/5.jpg" alt="" calss="slide-image" style="width:100%;">\n        </ion-slide>\n        <ion-slide>\n          <img src="assets/imgs/6.jpg" alt="" calss="slide-image" style="width:100%;">\n        </ion-slide>\n      </ion-slides>\n      <div class="articles" style="width:90%;margin-left:5%;" *ngFor="let user of users2;let idx=index;">\n      <div calss="div1">\n       <img src="{{user.touxiang}}" class="touxiang">\n        <span class="username">{{user.name}}</span>\n       <button calss="guanzhu" style="position:absolute;width:15%;margin-left:70%;margin-top:3%">+关注</button>\n      </div>\n      <div calss="div2">\n        <p class="title" style="position:relative;" (click)="goGongluePage(idx)">{{user.title}}</p>\n        <p class="content" style="width:70%;margin-top:5%;" (click)="goGongluePage(idx)">{{user.content}}</p>\n       <img src="{{user.imgUrl}}" alt="" class="articleimg" style="position:absolute;margin-left:75%;margin-top:-20%;width:25%;height:40%;" (click)="goGongluePage(idx)">\n      </div>\n      <div calss="div3" style="margin-top:3%;">\n        <span>{{user.agree}}赞同</span>\n        <span style="position:relative;">{{user.pinglun}}评论</span>\n        <span class="time" style="position:absolute;margin-left:45%;">{{user.time}}</span>\n      </div>\n      <hr style="margin-top:3%;margin-bottom:3%;">\n     </div>\n    </div>\n  </div>\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\project\Whatever\Projects\snail\src\pages\shouyeqq\shouyeqq.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ShouyeqqPage);
    return ShouyeqqPage;
}());

//# sourceMappingURL=shouyeqq.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map