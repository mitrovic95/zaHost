(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-nova-radi-nova-radi-module"],{

/***/ "./src/app/components/nova-radi/nova-radi.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/nova-radi/nova-radi.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nova-radi/nova-radi.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/nova-radi/nova-radi.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>O \"Promeni\"</h1>\n\nАкадемско позориште Промена основано је у Новом Саду 1978. године од стране студената режије и глуме а уз велику подршку тадашњих професора – Бранка Плеше, Бора Драшковића, Михаља Вирага и других. Званичан почетак рада позоришта је 18. март 1979. Позориште је тада бројало укупно 45 чланова – тринаест редитеља и тридесет два глумца. Иако је основано као професионално позориште оно је покренуто без неопходних материјалних средстава. Тако је позориште Промена је тада била отворена за све који желе да се баве театром, без обзира на то да ли су студенти Академије уметности. Запаженије представе тадашње Промене су: Марио и мађионичар Томаса Мана у режији Милана Белегишанина, Јелка код Иванових Александра Введенског у режији Хариса Пашовића, Столице Ежена Јонеска у режији Слободана Мојака. Представе су бележиле велике успехе на позоришним фестивалима широм Југославије. Позориште Промена било је активно до средине осамдесетих година када престаје са радом због смене генерација студената који нису имали иницијативу да позориште настави са радом.\n\nАкадемско позориште Промена је поново почело са радом 20. фебруара 2015. године на иницијативу студената драматургије и глуме (Стефана Исаковића, Димитрија Аранђеловића и Душана Вукашиновића). По свом статуту позориште носи назив Уметничко друштво студената драмског департмана Академије уметности. Промена је поново покренута у жељи да студенти драматургије, режије и глуме своје радове ван испита показују и живој публици која је навикнута на садржај помало успаване позоришне сцене у Новом Саду. Циљ садашње Промене је и остваривање сарадње студената свих класа и година студија драмског департмана а у циљу стварања представа које нису предвиђене наставним планом Академије уметности. Стога, досадашња Промена бележи велики број пројеката и копродукција које излазе из оквира студијских програма.\nПромена тренутно броји око седамдесет активних чланова, садашњих и свршених студената Академије уметности.\n\n"

/***/ }),

/***/ "./src/app/components/nova-radi/nova-radi.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/nova-radi/nova-radi.component.ts ***!
  \*************************************************************/
/*! exports provided: NovaRadiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaRadiComponent", function() { return NovaRadiComponent; });
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

var NovaRadiComponent = /** @class */ (function () {
    function NovaRadiComponent() {
    }
    NovaRadiComponent.prototype.ngOnInit = function () {
    };
    NovaRadiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nova-radi',
            template: __webpack_require__(/*! ./nova-radi.component.html */ "./src/app/components/nova-radi/nova-radi.component.html"),
            styles: [__webpack_require__(/*! ./nova-radi.component.css */ "./src/app/components/nova-radi/nova-radi.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NovaRadiComponent);
    return NovaRadiComponent;
}());



/***/ }),

/***/ "./src/app/components/nova-radi/nova-radi.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/nova-radi/nova-radi.module.ts ***!
  \**********************************************************/
/*! exports provided: NovaRadiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaRadiModule", function() { return NovaRadiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nova_radi_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nova-radi.routing */ "./src/app/components/nova-radi/nova-radi.routing.ts");
/* harmony import */ var src_app_components_nova_radi_nova_radi_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/nova-radi/nova-radi.component */ "./src/app/components/nova-radi/nova-radi.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NovaRadiModule = /** @class */ (function () {
    function NovaRadiModule() {
    }
    NovaRadiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _nova_radi_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
            ],
            declarations: [src_app_components_nova_radi_nova_radi_component__WEBPACK_IMPORTED_MODULE_3__["NovaRadiComponent"]],
            providers: []
        })
    ], NovaRadiModule);
    return NovaRadiModule;
}());



/***/ }),

/***/ "./src/app/components/nova-radi/nova-radi.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/nova-radi/nova-radi.routing.ts ***!
  \***********************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_nova_radi_nova_radi_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/nova-radi/nova-radi.component */ "./src/app/components/nova-radi/nova-radi.component.ts");


var routes = [
    { path: '', component: src_app_components_nova_radi_nova_radi_component__WEBPACK_IMPORTED_MODULE_1__["NovaRadiComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=components-nova-radi-nova-radi-module.js.map