(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-osobe-osobe-module"],{

/***/ "./src/app/components/osobe/osobe.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/osobe/osobe.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/osobe/osobe.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/osobe/osobe.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let osoba of osobe; let i = index\">\n  <div>{{osoba.ime}}</div>\n  <div>{{osoba.prezime}}</div>\n  <div>{{osoba.slika1}}</div>\n  <div>{{osoba.slika2}}</div>\n  <div>{{osoba.opis}}</div>\n  <div>{{osoba.prioritet}}</div>\n  <div>{{osoba.brojTelefona}}</div>\n  <div>{{osoba.mejl}}</div>\n</div>\n<!-- export interface Osoba {\n  id?: number;\n  ime: string;\n  prezime: string;\n  slika1: string;\n  slika2: string;\n  opis: string;\n  prioritet: number;\n  brojTelefona: number;\n  mejl: string;\n} -->\n"

/***/ }),

/***/ "./src/app/components/osobe/osobe.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/osobe/osobe.component.ts ***!
  \*****************************************************/
/*! exports provided: OsobeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsobeComponent", function() { return OsobeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_osobe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/osobe.service */ "./src/app/services/osobe.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OsobeComponent = /** @class */ (function () {
    function OsobeComponent(osobaService) {
        this.osobaService = osobaService;
    }
    OsobeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.osobaService.getOsobe().subscribe(function (osobe) {
            _this.osobe = osobe;
        });
        this.osobaService.getOsobe();
        this.osobaService.osobe.subscribe(function (data) { return console.log(data); });
    };
    OsobeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-osobe',
            template: __webpack_require__(/*! ./osobe.component.html */ "./src/app/components/osobe/osobe.component.html"),
            styles: [__webpack_require__(/*! ./osobe.component.css */ "./src/app/components/osobe/osobe.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_osobe_service__WEBPACK_IMPORTED_MODULE_1__["OsobeService"]])
    ], OsobeComponent);
    return OsobeComponent;
}());



/***/ }),

/***/ "./src/app/components/osobe/osobe.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/osobe/osobe.module.ts ***!
  \**************************************************/
/*! exports provided: OsobeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsobeModule", function() { return OsobeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _osobe_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./osobe.routing */ "./src/app/components/osobe/osobe.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_osobe_osobe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/osobe/osobe.component */ "./src/app/components/osobe/osobe.component.ts");
/* harmony import */ var src_app_services_osobe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/osobe.service */ "./src/app/services/osobe.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var OsobeModule = /** @class */ (function () {
    function OsobeModule() {
    }
    OsobeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _osobe_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
            ],
            declarations: [src_app_components_osobe_osobe_component__WEBPACK_IMPORTED_MODULE_4__["OsobeComponent"]],
            providers: [src_app_services_osobe_service__WEBPACK_IMPORTED_MODULE_5__["OsobeService"]]
        })
    ], OsobeModule);
    return OsobeModule;
}());



/***/ }),

/***/ "./src/app/components/osobe/osobe.routing.ts":
/*!***************************************************!*\
  !*** ./src/app/components/osobe/osobe.routing.ts ***!
  \***************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_osobe_osobe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/osobe/osobe.component */ "./src/app/components/osobe/osobe.component.ts");


var routes = [
    { path: '', component: src_app_components_osobe_osobe_component__WEBPACK_IMPORTED_MODULE_1__["OsobeComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/services/osobe.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/osobe.service.ts ***!
  \*******************************************/
/*! exports provided: OsobeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsobeService", function() { return OsobeService; });
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




var OsobeService = /** @class */ (function () {
    function OsobeService(http) {
        this.http = http;
        this.osobe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.path = '/api/osoba';
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    OsobeService.prototype.getOsobe = function () {
        return this.http.get(this.path);
    };
    OsobeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OsobeService);
    return OsobeService;
}());



/***/ })

}]);
//# sourceMappingURL=components-osobe-osobe-module.js.map