(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-slike-slike-module"],{

/***/ "./src/app/components/slike/slike.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/slike/slike.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: 30%;\r\n        height: 270px;\r\n}"

/***/ }),

/***/ "./src/app/components/slike/slike.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/slike/slike.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let slika of slike; let i = index\">\n  <div>{{slika.namena}}</div>\n  <div>{{slika.datum}}</div>\n  <img src=\"{{slika.sadrzaj}}\">\n</div>"

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
    }
    SlikeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slikeService.getSlike().subscribe(function (slike) {
            _this.slike = slike;
        });
        this.slikeService.getSlike();
        this.slikeService.slike.subscribe(function (data) { return console.log(data); });
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
    SlikeService.prototype.getSlike = function () {
        return this.http.get(this.path);
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