(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-predstava-osobe-predstava-osobe-module"],{

/***/ "./src/app/components/predstava-osobe/predstava-osobe.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/predstava-osobe/predstava-osobe.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/predstava-osobe/predstava-osobe.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/predstava-osobe/predstava-osobe.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let predstavaOsoba of predstavaOsobe; let i = index\">  \n  <h1> zdravo ovo je uloga: {{predstavaOsoba.uloga}}</h1>\n  <br/>\n  <h2> zdravo ovo je ime osobe: {{predstavaOsoba.osoba.ime}}</h2>\n  <h2> zdravo ovo je prezime osobe: {{predstavaOsoba.osoba.prezime}}</h2>\n  <br/>\n  <h5> zdravo ovo je naslov predstave: {{predstavaOsoba.predstava.naslov}}</h5>\n  <h5> zdravo ovo je opis predstave: {{predstavaOsoba.predstava.opis}}</h5>\n  <h5> zdravo ovo je slika predstave: {{predstavaOsoba.predstava.slika}}</h5>\n  <h5> zdravo ovo su slike predstave: {{predstavaOsoba.predstava.slike.sadrzaj}}</h5>\n  <h5> zdravo ovo je video predstave: {{predstavaOsoba.predstava.video}}</h5>\n  <br/>\n</div>"

/***/ }),

/***/ "./src/app/components/predstava-osobe/predstava-osobe.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/predstava-osobe/predstava-osobe.component.ts ***!
  \*************************************************************************/
/*! exports provided: PredstavaOsobeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredstavaOsobeComponent", function() { return PredstavaOsobeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_predstava_osobe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/predstava-osobe.service */ "./src/app/services/predstava-osobe.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PredstavaOsobeComponent = /** @class */ (function () {
    function PredstavaOsobeComponent(predstavaOsobeService) {
        this.predstavaOsobeService = predstavaOsobeService;
    }
    PredstavaOsobeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.predstavaOsobeService.getPredstavaOsobe().subscribe(function (predstavaOsobe) {
            _this.predstavaOsobe = predstavaOsobe;
        });
        this.predstavaOsobeService.getPredstavaOsobe();
        // this.istorijatService.istorijats.subscribe(data => console.log(data));
    };
    PredstavaOsobeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-predstava-osobe',
            template: __webpack_require__(/*! ./predstava-osobe.component.html */ "./src/app/components/predstava-osobe/predstava-osobe.component.html"),
            styles: [__webpack_require__(/*! ./predstava-osobe.component.css */ "./src/app/components/predstava-osobe/predstava-osobe.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_predstava_osobe_service__WEBPACK_IMPORTED_MODULE_1__["PredstavaOsobeService"]])
    ], PredstavaOsobeComponent);
    return PredstavaOsobeComponent;
}());



/***/ }),

/***/ "./src/app/components/predstava-osobe/predstava-osobe.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/predstava-osobe/predstava-osobe.module.ts ***!
  \**********************************************************************/
/*! exports provided: PredstavaOsobeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredstavaOsobeModule", function() { return PredstavaOsobeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _predstava_osobe_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./predstava-osobe.routing */ "./src/app/components/predstava-osobe/predstava-osobe.routing.ts");
/* harmony import */ var src_app_components_predstava_osobe_predstava_osobe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/predstava-osobe/predstava-osobe.component */ "./src/app/components/predstava-osobe/predstava-osobe.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PredstavaOsobeModule = /** @class */ (function () {
    function PredstavaOsobeModule() {
    }
    PredstavaOsobeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _predstava_osobe_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
            ],
            declarations: [src_app_components_predstava_osobe_predstava_osobe_component__WEBPACK_IMPORTED_MODULE_3__["PredstavaOsobeComponent"]],
            providers: []
        })
    ], PredstavaOsobeModule);
    return PredstavaOsobeModule;
}());



/***/ }),

/***/ "./src/app/components/predstava-osobe/predstava-osobe.routing.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/predstava-osobe/predstava-osobe.routing.ts ***!
  \***********************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_predstava_osobe_predstava_osobe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/predstava-osobe/predstava-osobe.component */ "./src/app/components/predstava-osobe/predstava-osobe.component.ts");


var routes = [
    { path: '', component: src_app_components_predstava_osobe_predstava_osobe_component__WEBPACK_IMPORTED_MODULE_1__["PredstavaOsobeComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=components-predstava-osobe-predstava-osobe-module.js.map