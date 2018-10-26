(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pronadjena-strana-pronadjena-strana-module"],{

/***/ "./src/app/components/pronadjena-strana/pronadjena-strana.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/pronadjena-strana/pronadjena-strana.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pronadjena-strana/pronadjena-strana.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pronadjena-strana/pronadjena-strana.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<a routerLink=\"/login\">LOGIN</a>\r\n"

/***/ }),

/***/ "./src/app/components/pronadjena-strana/pronadjena-strana.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pronadjena-strana/pronadjena-strana.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PronadjenaStranaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PronadjenaStranaComponent", function() { return PronadjenaStranaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PronadjenaStranaComponent = /** @class */ (function () {
    function PronadjenaStranaComponent() {
    }
    PronadjenaStranaComponent.prototype.ngOnInit = function () {
    };
    PronadjenaStranaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pronadjena-strana',
            template: __webpack_require__(/*! ./pronadjena-strana.component.html */ "./src/app/components/pronadjena-strana/pronadjena-strana.component.html"),
            styles: [__webpack_require__(/*! ./pronadjena-strana.component.css */ "./src/app/components/pronadjena-strana/pronadjena-strana.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PronadjenaStranaComponent);
    return PronadjenaStranaComponent;
}());



/***/ }),

/***/ "./src/app/components/pronadjena-strana/pronadjena-strana.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/pronadjena-strana/pronadjena-strana.module.ts ***!
  \**************************************************************************/
/*! exports provided: PronadjenaStranaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PronadjenaStranaModule", function() { return PronadjenaStranaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pronadjena_strana_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pronadjena-strana.routing */ "./src/app/components/pronadjena-strana/pronadjena-strana.routing.ts");
/* harmony import */ var src_app_components_pronadjena_strana_pronadjena_strana_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/pronadjena-strana/pronadjena-strana.component */ "./src/app/components/pronadjena-strana/pronadjena-strana.component.ts");
/* harmony import */ var src_app_components_vesti_vesti_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/vesti/vesti.module */ "./src/app/components/vesti/vesti.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PronadjenaStranaModule = /** @class */ (function () {
    function PronadjenaStranaModule() {
    }
    PronadjenaStranaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_components_vesti_vesti_module__WEBPACK_IMPORTED_MODULE_4__["VestiModule"],
                _pronadjena_strana_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
            ],
            declarations: [src_app_components_pronadjena_strana_pronadjena_strana_component__WEBPACK_IMPORTED_MODULE_3__["PronadjenaStranaComponent"]],
            providers: []
        })
    ], PronadjenaStranaModule);
    return PronadjenaStranaModule;
}());



/***/ }),

/***/ "./src/app/components/pronadjena-strana/pronadjena-strana.routing.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/pronadjena-strana/pronadjena-strana.routing.ts ***!
  \***************************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_pronadjena_strana_pronadjena_strana_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/pronadjena-strana/pronadjena-strana.component */ "./src/app/components/pronadjena-strana/pronadjena-strana.component.ts");


var routes = [
    { path: '', component: src_app_components_pronadjena_strana_pronadjena_strana_component__WEBPACK_IMPORTED_MODULE_1__["PronadjenaStranaComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/components/vesti/vesti.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/vesti/vesti.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: 30%;\r\n        height: 270px;\r\n}"

/***/ }),

/***/ "./src/app/components/vesti/vesti.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/vesti/vesti.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let vest of vesti; let i = index\">\r\n  <div>Naslov: {{vest.naslov}}</div>\r\n  <div>Opis: {{vest.opis}}</div>\r\n  <img class=\"car--image\" src=\"{{vest.slike.sadrzaj}}\">\r\n</div>\r\n\r\n<a routerLink=\"/login\">LOGIN</a>\r\n"

/***/ }),

/***/ "./src/app/components/vesti/vesti.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/vesti/vesti.component.ts ***!
  \*****************************************************/
/*! exports provided: VestiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VestiComponent", function() { return VestiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_vesti_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vesti.service */ "./src/app/services/vesti.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VestiComponent = /** @class */ (function () {
    function VestiComponent(vestiService) {
        this.vestiService = vestiService;
    }
    VestiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vestiService.getVesti().subscribe(function (vesti) {
            _this.vesti = vesti;
        });
        this.vestiService.getVesti();
        // this.vestiService.vesti.subscribe(data => console.log(data));
    };
    VestiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vesti',
            template: __webpack_require__(/*! ./vesti.component.html */ "./src/app/components/vesti/vesti.component.html"),
            styles: [__webpack_require__(/*! ./vesti.component.css */ "./src/app/components/vesti/vesti.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_vesti_service__WEBPACK_IMPORTED_MODULE_1__["VestiService"]])
    ], VestiComponent);
    return VestiComponent;
}());



/***/ }),

/***/ "./src/app/components/vesti/vesti.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/vesti/vesti.module.ts ***!
  \**************************************************/
/*! exports provided: VestiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VestiModule", function() { return VestiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _vesti_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vesti.routing */ "./src/app/components/vesti/vesti.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_vesti_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/vesti.service */ "./src/app/services/vesti.service.ts");
/* harmony import */ var src_app_components_vesti_vesti_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/vesti/vesti.component */ "./src/app/components/vesti/vesti.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var VestiModule = /** @class */ (function () {
    function VestiModule() {
    }
    VestiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _vesti_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
            ],
            declarations: [src_app_components_vesti_vesti_component__WEBPACK_IMPORTED_MODULE_5__["VestiComponent"]],
            providers: [src_app_services_vesti_service__WEBPACK_IMPORTED_MODULE_4__["VestiService"]]
        })
    ], VestiModule);
    return VestiModule;
}());



/***/ }),

/***/ "./src/app/components/vesti/vesti.routing.ts":
/*!***************************************************!*\
  !*** ./src/app/components/vesti/vesti.routing.ts ***!
  \***************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_vesti_vesti_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/vesti/vesti.component */ "./src/app/components/vesti/vesti.component.ts");


var routes = [
    { path: '', component: src_app_components_vesti_vesti_component__WEBPACK_IMPORTED_MODULE_1__["VestiComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/services/vesti.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/vesti.service.ts ***!
  \*******************************************/
/*! exports provided: VestiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VestiService", function() { return VestiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VestiService = /** @class */ (function () {
    function VestiService(http) {
        this.http = http;
        this.slike = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.path = '/api/vesti';
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    VestiService.prototype.getVesti = function () {
        return this.http.get(this.path);
    };
    VestiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VestiService);
    return VestiService;
}());



/***/ })

}]);
//# sourceMappingURL=components-pronadjena-strana-pronadjena-strana-module.js.map