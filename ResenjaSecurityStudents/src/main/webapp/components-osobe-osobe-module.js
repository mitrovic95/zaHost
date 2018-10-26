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

module.exports = "<div class=\"container-body\">\r\n  <div class=\"container-ensemble\">\r\n    <div class=\"title\">Ansambl</div>\r\n    <div class=\"content\">\r\n      <div class=\"left\" (mouseover)=\"imgVersion = 2\" (mouseout)=\"imgVersion = 1\">\r\n        <div class=\"basic\">\r\n          <div class=\"center\">\r\n            <img class=\"img\" src=\"/assets/images/Ensemble/img_1_{{imgVersion}}.png\">\r\n            <div class=\"name-s\">Mladen Potrebic</div>\r\n            <div class=\"information\">\r\n              <div class=\"line\">\r\n                <div></div>\r\n              </div>\r\n              <div class=\"name-full\">Mladen Potrebic</div>\r\n              <div class=\"line-v\"></div>\r\n              <div class=\"position\">Glumac</div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"mail-address\">\r\n          <div class=\"text\">Kontakt</div>\r\n          <div class=\"small-line\"></div>\r\n          <div class=\"text\">mladen.potrebic@gmail.com</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"right\">\r\n        <div class=\"container-list\">\r\n          <div class=\"title\">GLUMCI</div>\r\n          <div class=\"title\">/</div>\r\n          <div class=\"title\">Dramaturzi</div>\r\n          <div class=\"list\">\r\n            <div class=\"person\">\r\n              <img class=\"img\" src=\"/assets/images/Ensemble/img_1_a.png\">\r\n              <div class=\"full-name\">\r\n                <h1>Nikoleta Stamenkovic</h1>\r\n              </div>\r\n            </div>\r\n            <div class=\"person\">\r\n              <img class=\"img\" src=\"/assets/images/Ensemble/img_1_a.png\">\r\n              <div class=\"full-name\">\r\n                <h1>Nikoleta Stamenkovic</h1>\r\n              </div>\r\n            </div>\r\n            <div class=\"person\">\r\n              <img class=\"img\" src=\"/assets/images/Ensemble/img_1_a.png\">\r\n              <div class=\"full-name\">\r\n                <h1>Nikoleta Stamenkovic</h1>\r\n              </div>\r\n            </div>\r\n            <div class=\"person\">\r\n              <img class=\"img\" src=\"/assets/images/Ensemble/img_1_a.png\">\r\n              <div class=\"full-name\">\r\n                <h1>Nikoleta Stamenkovic</h1>\r\n              </div>\r\n            </div>\r\n            <div class=\"person\">\r\n              <img class=\"img\" src=\"/assets/images/Ensemble/img_1_a.png\">\r\n              <div class=\"full-name\">\r\n                <h1>Nikoleta Stamenkovic</h1>\r\n              </div>\r\n            </div>\r\n            <div class=\"person\">\r\n              <img class=\"img\" src=\"/assets/images/Ensemble/img_1_a.png\">\r\n              <div class=\"full-name\">\r\n                <h1>Nikoleta Stamenkovic</h1>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"pagination\">\r\n              <div class=\"left-a\" (click)=\"ocitajStranu(0)\" style=\"margin-left: 1px\"></div>\r\n              <div class=\"page-a\">\r\n                <span>\r\n                  <span *ngIf=\"currentPageNumber<10\">0</span>{{currentPageNumber+1}}</span>\r\n              </div>\r\n              <div class=\"line-a\">\r\n                <!-- *ngFor=\"let number of ukupnoStranaNiz; let i=index\"\r\n                <a [ngStyle]=\"{'border': currentPageNumber == i ? '2px solid #337ab7' : '#ddd'}\"\r\n                     (click)=\"ocitajStranu(i)\" class=\"page-link\" style=\"margin-left: 1px\">{{i+1}}</a> -->\r\n              </div>\r\n              <div class=\"pages-a\">\r\n                <span>\r\n                  <span *ngIf=\"ukupnoStrana<10\">0</span>{{ukupnoStrana}}</span>\r\n              </div>\r\n              <div class=\"right-a\" (click)=\"ocitajSledecuStranu()\" style=\"margin-left: 1px\"></div>\r\n            </div>\r\n            \r\n          <!-- <div class=\"pagination\">\r\n            <div class=\"left-a\"></div>\r\n            <div class=\"page-a\">\r\n              <span>01</span>\r\n            </div>\r\n            <div class=\"line-a\"></div>\r\n            <div class=\"pages-a\">\r\n              <span>05</span>\r\n            </div>\r\n            <div class=\"right-a\"></div>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--\r\n\r\n<div *ngFor=\"let osoba of osobe; let i = index\">\r\n  <div>{{osoba.ime}}</div>\r\n  <div>{{osoba.prezime}}</div>\r\n  <div>{{osoba.slika1}}</div>\r\n  <div>{{osoba.slika2}}</div>\r\n  <div>{{osoba.opis}}</div>\r\n  <div>{{osoba.prioritet}}</div>\r\n  <div>{{osoba.brojTelefona}}</div>\r\n  <div>{{osoba.mejl}}</div>\r\n</div>\r\n-->\r\n<!-- export interface Osoba {\r\n  id?: number;\r\n  ime: string;\r\n  prezime: string;\r\n  slika1: string;\r\n  slika2: string;\r\n  opis: string;\r\n  prioritet: number;\r\n  brojTelefona: number;\r\n  mejl: string;\r\n} -->"

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
    // public repertoar: Repertoar;
    // public id?: number;
    function OsobeComponent(osobeService) {
        this.osobeService = osobeService;
        // tslint:disable-next-line:no-inferrable-types
        this.sizePage = 6;
        this.imgVersion = 1;
    }
    OsobeComponent.prototype.ngOnInit = function () {
        this.currentPageNumber = 0;
        this.loadDate();
    };
    OsobeComponent.prototype.loadDate = function () {
        var _this = this;
        this.osobeService.getOsoba(this.currentPageNumber, this.sizePage)
            .subscribe(function (data) {
            _this.osobe = data.body;
            _this.ukupnoRepertoara = +data.headers.get('X-Total-Count');
            _this.ukupnoStrana = Math.ceil(_this.ukupnoRepertoara / _this.sizePage);
            _this.ukupnoStranaNiz = Array(_this.ukupnoStrana).fill(4);
            console.log(_this.ukupnoStranaNiz);
        });
    };
    OsobeComponent.prototype.delete = function (index) {
        console.log(this.osobe[index]);
    };
    OsobeComponent.prototype.ocitajStranu = function (i) {
        this.currentPageNumber = i;
        this.loadDate();
    };
    OsobeComponent.prototype.ocitajSledecuStranu = function () {
        if (this.currentPageNumber == this.ukupnoStrana - 1) {
            return;
        }
        this.currentPageNumber = this.currentPageNumber + 1;
        this.loadDate();
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
    OsobeService.prototype.getOsoba = function (page, size) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('page', page.toString());
        params = params.append('size', size.toString());
        return this.http.get(this.path, { params: params, observe: 'response' });
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