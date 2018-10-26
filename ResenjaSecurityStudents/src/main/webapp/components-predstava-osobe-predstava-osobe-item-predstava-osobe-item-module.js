(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-predstava-osobe-predstava-osobe-item-predstava-osobe-item-module"],{

/***/ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"predstavaOsobeItem\">\n    <h1> zdravo ovo je uloga: {{predstavaOsobeItem.uloga}}</h1>\n    <br/>\n    <h2> zdravo ovo je ime osobe: {{predstavaOsobeItem.osoba.ime}}</h2>\n    <h2> zdravo ovo je prezime osobe: {{predstavaOsobeItem.osoba.prezime}}</h2>\n    <br/>\n    <h5> zdravo ovo je naslov predstave: {{predstavaOsobeItem.predstava.naslov}}</h5>\n    <h5> zdravo ovo je opis predstave: {{predstavaOsobeItem.predstava.opis}}</h5>\n    <h5> zdravo ovo je slika predstave: {{predstavaOsobeItem.predstava.slika}}</h5>\n    <h5> zdravo ovo su slike predstave: {{predstavaOsobeItem.predstava.slike.sadrzaj}}</h5>\n    <h5> zdravo ovo je video predstave: {{predstavaOsobeItem.predstava.video}}</h5>\n    <br/>\n</div>"

/***/ }),

/***/ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PredstavaOsobeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredstavaOsobeItemComponent", function() { return PredstavaOsobeItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_predstava_osobe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/predstava-osobe.service */ "./src/app/services/predstava-osobe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PredstavaOsobeItemComponent = /** @class */ (function () {
    function PredstavaOsobeItemComponent(predstavaOsobeItemService, route) {
        this.predstavaOsobeItemService = predstavaOsobeItemService;
        this.route = route;
    }
    PredstavaOsobeItemComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    PredstavaOsobeItemComponent.prototype.loadData = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.isDataAvailable = false;
            _this.id = +params['id'];
        });
        this.predstavaOsobeItemService.getPredstavaOsobeId(this.id)
            .subscribe(function (data) {
            _this.predstavaOsobeItem = data;
            // tslint:disable-next-line:no-unused-expression
            _this.isDataAvailable;
        });
    };
    PredstavaOsobeItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-predstava-osobe-item',
            template: __webpack_require__(/*! ./predstava-osobe-item.component.html */ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.html"),
            styles: [__webpack_require__(/*! ./predstava-osobe-item.component.css */ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_predstava_osobe_service__WEBPACK_IMPORTED_MODULE_1__["PredstavaOsobeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PredstavaOsobeItemComponent);
    return PredstavaOsobeItemComponent;
}());



/***/ }),

/***/ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.module.ts ***!
  \************************************************************************************************/
/*! exports provided: PredstavaOsobeItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredstavaOsobeItemModule", function() { return PredstavaOsobeItemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _predstava_osobe_item_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./predstava-osobe-item.routing */ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.routing.ts");
/* harmony import */ var src_app_components_predstava_osobe_predstava_osobe_item_predstava_osobe_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component */ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PredstavaOsobeItemModule = /** @class */ (function () {
    function PredstavaOsobeItemModule() {
    }
    PredstavaOsobeItemModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _predstava_osobe_item_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
            ],
            declarations: [src_app_components_predstava_osobe_predstava_osobe_item_predstava_osobe_item_component__WEBPACK_IMPORTED_MODULE_3__["PredstavaOsobeItemComponent"]],
            providers: []
        })
    ], PredstavaOsobeItemModule);
    return PredstavaOsobeItemModule;
}());



/***/ }),

/***/ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.routing.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.routing.ts ***!
  \*************************************************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_predstava_osobe_predstava_osobe_item_predstava_osobe_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component */ "./src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component.ts");


var routes = [
    { path: '', component: src_app_components_predstava_osobe_predstava_osobe_item_predstava_osobe_item_component__WEBPACK_IMPORTED_MODULE_1__["PredstavaOsobeItemComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=components-predstava-osobe-predstava-osobe-item-predstava-osobe-item-module.js.map