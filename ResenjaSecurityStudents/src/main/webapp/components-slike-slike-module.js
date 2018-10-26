(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-slike-slike-module"],{

/***/ "./src/app/components/slike/slike.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/slike/slike.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/slike/slike.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/slike/slike.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-body\">\r\n    <div class=\"container-repertoire\">\r\n      <div *ngFor=\"let slika of slike; let i = index\">\r\n        <div>{{slika.namena}}</div>\r\n        <div>{{slika.datum | date:'shortDate'}}</div>\r\n        <img src=\"{{slika.sadrzaj}}\">\r\n      </div>\r\n      <div class=\"pagination\">\r\n        <div class=\"left\" (click)=\"ocitajStranu(0)\" style=\"margin-left: 1px\"></div>\r\n        <div class=\"page\" >\r\n          <span><span *ngIf= \"currentPageNumber<10\">0</span>{{currentPageNumber+1}}</span>\r\n        </div>\r\n        <div class=\"line\" >\r\n            <!-- *ngFor=\"let number of ukupnoStranaNiz; let i=index\"\r\n          <a [ngStyle]=\"{'border': currentPageNumber == i ? '2px solid #337ab7' : '#ddd'}\"\r\n              (click)=\"ocitajStranu(i)\" class=\"page-link\" style=\"margin-left: 1px\">{{i+1}}</a> -->\r\n        </div>\r\n        <div class=\"pages\">\r\n            <span><span *ngIf= \"ukupnoStrana<10\">0</span>{{ukupnoStrana}}</span>\r\n        </div>\r\n        <div class=\"right\"  (click)=\"ocitajSledecuStranu()\" style=\"margin-left: 1px\"></div>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/slike/slike.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/slike/slike.component.ts ***!
  \*****************************************************/
/*! exports provided: SlikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlikeComponent", function() { return SlikeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_slike_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/slike.service */ "./src/app/services/slike.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlikeComponent = /** @class */ (function () {
    function SlikeComponent(slikeService) {
        this.slikeService = slikeService;
        // tslint:disable-next-line:no-inferrable-types
        this.sizePage = 6;
    }
    SlikeComponent.prototype.ngOnInit = function () {
        this.currentPageNumber = 0;
        this.loadDate();
    };
    SlikeComponent.prototype.loadDate = function () {
        var _this = this;
        this.slikeService.getSlika(this.currentPageNumber, this.sizePage)
            .subscribe(function (data) {
            _this.slike = data.body;
            _this.ukupnoRepertoara = +data.headers.get('X-Total-Count');
            _this.ukupnoStrana = Math.ceil(_this.ukupnoRepertoara / _this.sizePage);
            _this.ukupnoStranaNiz = Array(_this.ukupnoStrana).fill(4);
            console.log(_this.ukupnoStranaNiz);
        });
    };
    SlikeComponent.prototype.delete = function (index) {
        console.log(this.slike[index]);
    };
    SlikeComponent.prototype.ocitajStranu = function (i) {
        this.currentPageNumber = i;
        this.loadDate();
    };
    SlikeComponent.prototype.ocitajSledecuStranu = function () {
        if (this.currentPageNumber == this.ukupnoStrana - 1) {
            return;
        }
        this.currentPageNumber = this.currentPageNumber + 1;
        this.loadDate();
    };
    SlikeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slike',
            template: __webpack_require__(/*! ./slike.component.html */ "./src/app/components/slike/slike.component.html"),
            styles: [__webpack_require__(/*! ./slike.component.css */ "./src/app/components/slike/slike.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_slike_service__WEBPACK_IMPORTED_MODULE_1__["SlikeService"]])
    ], SlikeComponent);
    return SlikeComponent;
}());



/***/ }),

/***/ "./src/app/components/slike/slike.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/slike/slike.module.ts ***!
  \**************************************************/
/*! exports provided: SlikeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlikeModule", function() { return SlikeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _slike_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slike.routing */ "./src/app/components/slike/slike.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_slike_slike_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/slike/slike.component */ "./src/app/components/slike/slike.component.ts");
/* harmony import */ var src_app_services_slike_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/slike.service */ "./src/app/services/slike.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SlikeModule = /** @class */ (function () {
    function SlikeModule() {
    }
    SlikeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _slike_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
            ],
            declarations: [src_app_components_slike_slike_component__WEBPACK_IMPORTED_MODULE_4__["SlikeComponent"]],
            providers: [src_app_services_slike_service__WEBPACK_IMPORTED_MODULE_5__["SlikeService"]]
        })
    ], SlikeModule);
    return SlikeModule;
}());



/***/ }),

/***/ "./src/app/components/slike/slike.routing.ts":
/*!***************************************************!*\
  !*** ./src/app/components/slike/slike.routing.ts ***!
  \***************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_slike_slike_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/slike/slike.component */ "./src/app/components/slike/slike.component.ts");


var routes = [
    { path: '', component: src_app_components_slike_slike_component__WEBPACK_IMPORTED_MODULE_1__["SlikeComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/services/slike.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/slike.service.ts ***!
  \*******************************************/
/*! exports provided: SlikeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlikeService", function() { return SlikeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SlikeService = /** @class */ (function () {
    function SlikeService(http) {
        this.http = http;
        this.slike = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.path = '/api/slike';
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    SlikeService.prototype.getSlika = function (page, size) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('page', page.toString());
        params = params.append('size', size.toString());
        return this.http.get(this.path, { params: params, observe: 'response' });
    };
    SlikeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SlikeService);
    return SlikeService;
}());



/***/ })

}]);
//# sourceMappingURL=components-slike-slike-module.js.map