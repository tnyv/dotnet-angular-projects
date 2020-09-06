(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav><router-outlet></router-outlet></app-nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/code/code.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/code/code.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"code\">\r\n  <span class=\"darkBlue\">def</span><span class=\"brightYellow\"> reverse</span>\r\n  <span class=\"darkYellow\">(</span><span class=\"brightBlue\">s</span\r\n  ><span class=\"darkYellow\">)</span><span class=\"grey\">:</span> <br />\r\n  <span class=\"purple\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if </span>\r\n  <span class=\"darkBlue\">not </span><span class=\"grey\">s</span\r\n  ><span class=\"grey\">:</span><br />\r\n  <span class=\"purple\"\r\n    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return\r\n  </span>\r\n  <span class=\"grey\">s</span><br />\r\n  <span class=\"purple\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else</span\r\n  ><span class=\"grey\">:</span> <br />\r\n  <span class=\"purple\"\r\n    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return\r\n  </span>\r\n  <span class=\"grey\">reverse</span> <span class=\"darkYellow\">(</span\r\n  ><span class=\"grey\">s</span><span class=\"purple\">[</span\r\n  ><span class=\"green\">1</span><span class=\"grey\">:</span\r\n  ><span class=\"purple\">]</span> <span class=\"darkYellow\">) </span\r\n  ><span class=\"grey\">+ s</span><span class=\"darkYellow\">[</span>\r\n  <span class=\"green\">0</span><span class=\"darkYellow\">]</span>\r\n  <br /><br /><span class=\"grey\">about = </span\r\n  ><span class=\"orange\">\".smelborp ssenisub evlos ot snoitulos TI gnidliub tuoba etanoissap s'ohw repoleved erawtfos a m'I\"</span><br />\r\n  <span class=\"brightYellow\">print</span><span class=\"darkYellow\">(</span\r\n  ><span class=\"grey\">reverse</span><span class=\"purple\">(</span\r\n  ><span class=\"grey\">about</span><span class=\"purple\">)</span\r\n  ><span class=\"darkYellow\">)</span>\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"jumbotron\"\r\n  [ngStyle]=\"{\r\n    width: '93%',\r\n    margin: 'auto',\r\n    padding: '5rem',\r\n    marginTop: '5rem'\r\n  }\"\r\n>\r\n  <h1\r\n    [ngStyle]=\"{\r\n      textAlign: 'center'\r\n    }\"\r\n  >\r\n    CONTACT\r\n  </h1>\r\n  <hr class=\"my-4\" />\r\n\r\n  <ng-template [ngIf]=\"messageSent\" [ngIfElse]=\"contact\">\r\n    <div class=\"sent-container\">\r\n      <h1 class=\"vertical-center\">Thanks for your message!</h1>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #contact>\r\n    <div class=\"row justify-content-center contact-form\">\r\n      <mat-form-field appearance=\"legacy\" class=\"col-md-5\">\r\n        <mat-label>Name</mat-label>\r\n        <input matInput [(ngModel)]=\"name\" />\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"row justify-content-center contact-form\">\r\n      <mat-form-field appearance=\"legacy\" class=\"col-md-5\">\r\n        <mat-label>Email</mat-label>\r\n        <input matInput [(ngModel)]=\"email\" />\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"row justify-content-center contact-form\">\r\n      <mat-form-field appearance=\"legacy\" class=\"col-md-5\">\r\n        <mat-label>Subject</mat-label>\r\n        <input matInput [(ngModel)]=\"subject\" />\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"row justify-content-center contact-form\">\r\n      <mat-form-field appearance=\"legacy\" class=\"col-md-5\">\r\n        <mat-label>Message</mat-label>\r\n        <textarea\r\n          matInput\r\n          class=\"contact-form-text\"\r\n          [(ngModel)]=\"messageBody\"\r\n        ></textarea>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"row justify-content-center contact-form\">\r\n      <button\r\n        mat-raised-button\r\n        color=\"primary\"\r\n        class=\"col-md-2\"\r\n        (click)=\"sendEmail()\"\r\n      >\r\n        SEND\r\n      </button>\r\n    </div>\r\n\r\n    <ng-template [ngIf]=\"!formValid\" [ngIfElse]=\"default\">\r\n      <div class=\"row justify-content-center contact-form\">\r\n        <br />\r\n        <p class=\"warning\">Error: inputs cannot be blank</p>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template [ngIf]=\"!emailValid\" [ngIfElse]=\"default\">\r\n      <div class=\"row justify-content-center contact-form\">\r\n        <br />\r\n        <p class=\"warning\">Error: email is invalid</p>\r\n      </div>\r\n    </ng-template>\r\n  </ng-template>\r\n</div>\r\n\r\n<ng-template #default></ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-container\" id=\"top\">\r\n  <div\r\n    *ngIf=\"slideIn\"\r\n    [@slideSide]\r\n    class=\"jumbotron\"\r\n    [ngStyle]=\"{\r\n      width: '93%',\r\n      margin: 'auto',\r\n      padding: '5rem'\r\n    }\"\r\n  >\r\n    <h1 class=\"mainHeader\">TONY VU</h1>\r\n    <h2 class=\"mainHeader\">software developer</h2>\r\n    <h3></h3>\r\n    <hr class=\"my-4\" />\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <app-code></app-code>\r\n\r\n        <ng-template [ngIf]=\"running === true\" [ngIfElse]=\"off\">\r\n          <button\r\n            mat-raised-button\r\n            color=\"accent\"\r\n            [ngStyle]=\"{ width: '100%' }\"\r\n            (click)=\"runCode()\"\r\n          >\r\n            <i\r\n              class=\"fas fa-arrow-alt-circle-left\"\r\n              [ngStyle]=\"{\r\n                fontSize: '2rem',\r\n                marginRight: '.5rem',\r\n                paddingBottom: 'rem'\r\n              }\"\r\n            ></i>\r\n            RESET\r\n          </button>\r\n          <mat-progress-bar\r\n            mode=\"indeterminate\"\r\n            [ngStyle]=\"{ width: '100%', marginBottom: '3rem' }\"\r\n            [ngClass]=\"runStyle()\"\r\n          >\r\n          </mat-progress-bar>\r\n        </ng-template>\r\n\r\n        <ng-template #off>\r\n          <button\r\n            mat-raised-button\r\n            color=\"accent\"\r\n            [ngStyle]=\"{ width: '100%', backgroundColor: 'green' }\"\r\n            (click)=\"runCode()\"\r\n          >\r\n            <i\r\n              class=\"far fa-arrow-alt-circle-right\"\r\n              [ngStyle]=\"{\r\n                fontSize: '2rem',\r\n                marginRight: '.5rem',\r\n                paddingBottom: 'rem'\r\n              }\"\r\n            ></i>\r\n            RUN\r\n          </button>\r\n          <mat-progress-bar\r\n            mode=\"indeterminate\"\r\n            [ngStyle]=\"{ width: '100%', marginBottom: '3rem' }\"\r\n            [ngClass]=\"runStyle()\"\r\n          >\r\n          </mat-progress-bar>\r\n        </ng-template>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 console\">\r\n        <div *ngIf=\"visible\" [@slideInOut]>\r\n          <span class=\"blink\">HELLO</span><br /><br /><span\r\n            class=\"str\"\r\n            [ngClass]=\"runStyle()\"\r\n          >\r\n            I'm a software developer who's passionate about building IT\r\n            solutions to solve business problems.\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"projects\"></div>\r\n  <app-projects></app-projects>\r\n\r\n  <div id=\"resume\"></div>\r\n  <app-resume></app-resume>\r\n\r\n  <div id=\"contact\"></div>\r\n  <app-contact></app-contact>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav\r\n    #drawer\r\n    class=\"sidenav\"\r\n    fixedInViewport=\"false\"\r\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n    [opened]=\"(isHandset$ | async) === false\"\r\n  >\r\n    <mat-nav-list class=\"nav-list\">\r\n      <a href=\"\">\r\n        <mat-toolbar\r\n          [ngStyle]=\"{\r\n            justifyContent: 'center',\r\n            height: '10rem',\r\n            marginTop: '1rem'\r\n          }\"\r\n          ><img class=\"header-image\"\r\n        /></mat-toolbar>\r\n\r\n\r\n      </a>\r\n      <a\r\n        mat-list-item\r\n        href=\"#\"\r\n        (click)=\"scroll('top')\"\r\n        (click)=\"handSetState && drawer.close()\"\r\n        class=\"nav-text\"\r\n      >\r\n        Home</a\r\n      >\r\n      <a\r\n        mat-list-item\r\n        href=\"#\"\r\n        (click)=\"scroll('projects')\"\r\n        (click)=\"handSetState && drawer.close()\"\r\n        class=\"nav-text\"\r\n      >\r\n        Projects</a\r\n      >\r\n      <a\r\n        mat-list-item\r\n        href=\"#\"\r\n        (click)=\"scroll('resume')\"\r\n        (click)=\"handSetState && drawer.close()\"\r\n        class=\"nav-text\"\r\n      >\r\n        R&eacute;sum&eacute;</a\r\n      >\r\n      <a\r\n        mat-list-item\r\n        href=\"#\"\r\n        (click)=\"scroll('contact')\"\r\n        (click)=\"handSetState && drawer.close()\"\r\n        class=\"nav-text\"\r\n      >\r\n        Contact</a\r\n      >\r\n\r\n      <a\r\n        mat-list-item\r\n        href=\"#\"\r\n        onClick=\"window.open('//github.com/tonyvu1')\"\r\n        (click)=\"handSetState && drawer.close()\"\r\n        class=\"nav-text\"\r\n      >\r\n        Github</a\r\n      >\r\n      <a\r\n        mat-list-item\r\n        href=\"#\"\r\n        onClick=\"window.open('//linkedin.com/in/tonyvu1/')\"\r\n        (click)=\"handSetState && drawer.close()\"\r\n        class=\"nav-text\"\r\n      >\r\n        LinkedIn\r\n      </a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n    <mat-toolbar class=\"toolBar1\">\r\n      <button\r\n        class=\"burger\"\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\"\r\n      >\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <mat-toolbar class=\"toolBar1\"> </mat-toolbar>\r\n    </mat-toolbar>\r\n\r\n    <ng-content></ng-content>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron container\">\n  <h1\n    [ngStyle]=\"{\n      textAlign: 'center'\n    }\"\n  >\n    PROJECTS\n  </h1>\n  <hr class=\"my-4\" />\n\n  <div class=\"row projects-row\">\n    <div class=\"jumbotron\">\n      <h1 class=\"display-4\">Learning Management System</h1>\n      <p class=\"lead\">\n        Technologies: C# (.NET Core 3.1) &#8226; JavaScript (React + Redux)\n        &#8226; SQL Server &#8226; Bootstrap\n      </p>\n      <hr class=\"my-4\" />\n      <p>\n        This is my most current programming project and it is also the most\n        complex project I have created. It is a light-weight learning management\n        system. Users will be able to create an account, login, register to\n        courses, view lectures, take tests, and earn points with a certificate\n        each time they complete a course. In addition, role based JWT\n        authorization will be utilized so that Admin roles can delete/edit users\n        and add/edit courses on the system. User roles will only be able to\n        perform bare minimum actions on the system.\n      </p>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        onClick=\"window.open('//github.com/tonyvu1/LMS')\"\n      >\n        CODE\n      </button>\n    </div>\n\n    <div class=\"jumbotron\">\n      <h1 class=\"display-4\">POS System</h1>\n      <p class=\"lead\">\n        Technologies: C# (.NET Core 3.1) &#8226; TypeScript (Angular) &#8226;\n        SQL Server\n      </p>\n      <hr class=\"my-4\" />\n      <p>\n        This is a full stack online POS system for a fictional icecream shop.\n        The backend is built on .NET Core 3.1 and deployed with Microsoft Azure.\n        Sales records are posted and retrieved from a SQL Server database, which\n        was maintained utilizing SQL Server Management Studio. The front end is\n        built with Angular 8 and Bootstrap.\n      </p>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        onClick=\"window.open('//github.com/tonyvu1/pos')\"\n        [ngStyle]=\"{\n          marginRight: '10px'\n        }\"\n      >\n        CODE\n      </button>\n      <button\n        mat-raised-button\n        color=\"accent\"\n        onClick=\"window.open('//icecreampos.azurewebsites.net/')\"\n      >\n        DEMO\n      </button>\n    </div>\n\n    <div class=\"jumbotron\">\n      <h1 class=\"display-4\">First Portfolio Website</h1>\n      <p class=\"lead\">\n        Technologies: JavaScript &#8226; HTML &#8226; SASS &#8226; PHP\n      </p>\n      <hr class=\"my-4\" />\n      <p>\n        This was my first portfolio website that I developed with vanilla\n        JavaScript, HTML, SASS, and a hint of PHP. I included it in my list of\n        projects because it taught me a lot of fundamental lessons about web\n        development, such as why it's a good idea to use styling frameworks such\n        as Bootstrap to save time on responsive UI implementations, basic JS DOM\n        element manipulation for UX, and handling form submissions with PHP.\n      </p>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        onClick=\"window.open('//github.com/tonyvu1/old-portfolio')\"\n        [ngStyle]=\"{\n          marginRight: '10px'\n        }\"\n      >\n        CODE\n      </button>\n      <button\n        mat-raised-button\n        color=\"accent\"\n        onClick=\"window.open('//old-portfolio.000webhostapp.com')\"\n      >\n        DEMO\n      </button>\n    </div>\n\n    <div class=\"jumbotron\">\n      <h1 class=\"display-4\">Video Chat Website</h1>\n      <p class=\"lead\">\n        Technologies: JavaScript &#8226; Express.js &#8226; MongoDB &#8226;\n        Bootstrap &#8226; EJS Templating\n      </p>\n      <hr class=\"my-4\" />\n      <p>\n        This is an online video/chat website I made with ExpressJS, EJS\n        templating system, and Bootstrap 4. I used MongoDB for my backend\n        database to store user account information, PassportJS middleware for\n        login authentication and protected routes, and Heruoku CLI for\n        deployment. Due to the cost of utilizing web socket services, this\n        project is not deployed for public testing.\n      </p>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        onClick=\"window.open('//github.com/tonyvu1/meetingspace')\"\n        [ngStyle]=\"{\n          marginRight: '10px'\n        }\"\n      >\n        CODE\n      </button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"jumbotron wrapper\"\r\n  [ngStyle]=\"{\r\n    width: '93%',\r\n    margin: 'auto',\r\n    padding: '5rem',\r\n    marginTop: '5rem'\r\n  }\"\r\n>\r\n  <h1\r\n    [ngStyle]=\"{\r\n      textAlign: 'center'\r\n    }\"\r\n  >\r\n    R&Eacute;SUM&Eacute;\r\n  </h1>\r\n\r\n  <hr class=\"my-4\" />\r\n\r\n    <embed\r\n      src=\"/assets/resume.pdf\"\r\n      class=\"resume-container col-md-12\"\r\n      type=\"application/pdf\"\r\n    />\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");





const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "contact", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: false })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _code_code_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./code/code.component */ "./src/app/code/code.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_20__["NavComponent"],
            _code_code_component__WEBPACK_IMPORTED_MODULE_25__["CodeComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_26__["ProjectsComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_27__["ContactComponent"],
            _resume_resume_component__WEBPACK_IMPORTED_MODULE_29__["ResumeComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ],
        providers: [_globals__WEBPACK_IMPORTED_MODULE_28__["Globals"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/code/code.component.scss":
/*!******************************************!*\
  !*** ./src/app/code/code.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".code {\n  font-size: 20px;\n  font-weight: 400;\n  height: 37rem;\n  background-color: #1e1e1e;\n  padding-top: 20px;\n  padding-left: 20px;\n  padding-bottom: 0;\n  margin-bottom: 0;\n  overflow: auto;\n}\n\n.brightBlue {\n  color: #9ddef0;\n}\n\n.darkBlue {\n  color: #5495cd;\n}\n\n.brightYellow {\n  color: #dddda7;\n}\n\n.darkYellow {\n  color: #f6ce2e;\n}\n\n.purple {\n  color: #d592c8;\n}\n\n.teal {\n  color: #41c9a5;\n}\n\n.orange {\n  color: #d49782;\n}\n\n.grey {\n  color: #d2d2d2;\n}\n\n.green {\n  color: #5ed56c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29kZS9DOlxcVXNlcnNcXEJPU1NcXERlc2t0b3BcXERFVlxccG9ydGZvbGlvXFxjbGllbnQvc3JjXFxhcHBcXGNvZGVcXGNvZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvZGUvY29kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29kZS9jb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvZGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGhlaWdodDogMzdyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAzMCwgMzApO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uYnJpZ2h0Qmx1ZSB7XHJcbiAgY29sb3I6IHJnYigxNTcsIDIyMiwgMjQwKTtcclxufVxyXG5cclxuLmRhcmtCbHVlIHtcclxuICBjb2xvcjogcmdiKDg0LCAxNDksIDIwNSk7XHJcbn1cclxuXHJcbi5icmlnaHRZZWxsb3cge1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDE2Nyk7XHJcbn1cclxuXHJcbi5kYXJrWWVsbG93IHtcclxuICBjb2xvcjogcmdiKDI0NiwgMjA2LCA0Nik7XHJcbn1cclxuXHJcbi5wdXJwbGUge1xyXG4gIGNvbG9yOiByZ2IoMjEzLCAxNDYsIDIwMCk7XHJcbn1cclxuXHJcbi50ZWFsIHtcclxuICBjb2xvcjogcmdiKDY1LCAyMDEsIDE2NSk7XHJcbn1cclxuXHJcbi5vcmFuZ2Uge1xyXG4gIGNvbG9yOiByZ2IoMjEyLCAxNTEsIDEzMCk7XHJcbn1cclxuXHJcbi5ncmV5IHtcclxuICBjb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gIGNvbG9yOiByZ2IoOTQsIDIxMywgMTA4KTtcclxufSIsIi5jb2RlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBoZWlnaHQ6IDM3cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5icmlnaHRCbHVlIHtcbiAgY29sb3I6ICM5ZGRlZjA7XG59XG5cbi5kYXJrQmx1ZSB7XG4gIGNvbG9yOiAjNTQ5NWNkO1xufVxuXG4uYnJpZ2h0WWVsbG93IHtcbiAgY29sb3I6ICNkZGRkYTc7XG59XG5cbi5kYXJrWWVsbG93IHtcbiAgY29sb3I6ICNmNmNlMmU7XG59XG5cbi5wdXJwbGUge1xuICBjb2xvcjogI2Q1OTJjODtcbn1cblxuLnRlYWwge1xuICBjb2xvcjogIzQxYzlhNTtcbn1cblxuLm9yYW5nZSB7XG4gIGNvbG9yOiAjZDQ5NzgyO1xufVxuXG4uZ3JleSB7XG4gIGNvbG9yOiAjZDJkMmQyO1xufVxuXG4uZ3JlZW4ge1xuICBjb2xvcjogIzVlZDU2Yztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/code/code.component.ts":
/*!****************************************!*\
  !*** ./src/app/code/code.component.ts ***!
  \****************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CodeComponent = class CodeComponent {
    constructor() { }
    ngOnInit() {
    }
};
CodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-code',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./code.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/code/code.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./code.component.scss */ "./src/app/code/code.component.scss")).default]
    })
], CodeComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contact-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.contact-container > * {\n  width: 100%;\n}\n\n.jumbotron {\n  box-shadow: rgba(156, 172, 172, 0.2) 0px 2px 2px, rgba(156, 172, 172, 0.2) 0px 4px 4px, rgba(156, 172, 172, 0.2) 0px 8px 8px, rgba(156, 172, 172, 0.2) 0px 16px 16px, rgba(156, 172, 172, 0.2) 0px 32px 32px, rgba(156, 172, 172, 0.2) 0px 64px 64px;\n}\n\n.email {\n  margin-bottom: 10px;\n}\n\n.email:hover {\n  cursor: pointer;\n}\n\n.contact-form {\n  font-size: 20px;\n}\n\n.contact-form-text {\n  height: 200px;\n}\n\n.warning {\n  color: red;\n  margin-top: 10px;\n}\n\n.sent-container {\n  height: 500px;\n  position: relative;\n  justify-content: center;\n}\n\n.vertical-center {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXEJPU1NcXERlc2t0b3BcXERFVlxccG9ydGZvbGlvXFxjbGllbnQvc3JjXFxhcHBcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0Usb1BBQUE7QUNDRjs7QURNQTtFQUNFLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0FDSEY7O0FETUE7RUFDRSxhQUFBO0FDSEY7O0FETUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDSEY7O0FETUE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGdDQUFBO0VBQ0EsZUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jb250YWN0LWNvbnRhaW5lciA+ICoge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uanVtYm90cm9uIHtcclxuICBib3gtc2hhZG93OiByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDJweCAycHgsXHJcbiAgICByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDRweCA0cHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggOHB4IDhweCxcclxuICAgIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMTZweCAxNnB4LFxyXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAzMnB4IDMycHgsXHJcbiAgICByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDY0cHggNjRweDtcclxufVxyXG5cclxuLmVtYWlsIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZW1haWw6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtLXRleHQge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi53YXJuaW5nIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zZW50LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1jZW50ZXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn0iLCIuY29udGFjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGFjdC1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5qdW1ib3Ryb24ge1xuICBib3gtc2hhZG93OiByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDJweCAycHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggNHB4IDRweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA4cHggOHB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDE2cHggMTZweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAzMnB4IDMycHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggNjRweCA2NHB4O1xufVxuXG4uZW1haWwge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZW1haWw6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250YWN0LWZvcm0ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jb250YWN0LWZvcm0tdGV4dCB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi53YXJuaW5nIHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNlbnQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnZlcnRpY2FsLWNlbnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../email.service */ "./src/app/email.service.ts");



let ContactComponent = class ContactComponent {
    constructor(emailService) {
        this.emailService = emailService;
        this.name = "";
        this.email = "";
        this.subject = "";
        this.messageBody = "";
        this.formValid = true;
        this.emailValid = true;
        this.messageSent = false;
    }
    isValid() {
        this.formValid = true;
        this.emailValid = true;
        var isValid = true;
        if (this.name == "") {
            this.formValid = false;
            isValid = false;
        }
        if (this.subject == "") {
            this.formValid = false;
            isValid = false;
        }
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (!EMAIL_REGEXP.test(this.email)) {
            this.emailValid = false;
            isValid = false;
        }
        if (this.messageBody == "") {
            this.formValid = false;
            isValid = false;
        }
        return isValid;
    }
    ngOnInit() { }
    sendEmail() {
        if (this.isValid()) {
            this.emailService
                .sendEmail(this.name, this.email, this.subject, this.messageBody)
                .then(() => {
                return this.respond();
            }, (reject) => {
                console.log("Something went wrong");
            });
        }
    }
    respond() {
        this.messageSent = true;
    }
};
ContactComponent.ctorParameters = () => [
    { type: _email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-contact",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/email.service.ts":
/*!**********************************!*\
  !*** ./src/app/email.service.ts ***!
  \**********************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EmailService = class EmailService {
    constructor(http) {
        this.http = http;
        // PRODUCTION LINK: private baseUrl = 'https://tonyvu.dev';
        // DEBUG LINK: private baseUrl = "http://localhost:4200";
        this.baseUrl = "https://tonyvu.dev/message";
    }
    sendEmail(name, email, subject, messageBody) {
        const headers = { "Content-Type": "application/json" };
        const body = {
            name: name,
            email: email,
            subject: subject,
            messageBody: messageBody
        };
        return new Promise((resolve, reject) => {
            this.http
                .post(this.baseUrl, body, { headers })
                .subscribe((res) => {
                resolve();
            }, (error) => {
                reject();
            });
        });
    }
};
EmailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], EmailService);



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Globals = class Globals {
    constructor() {
        this.title = 'test';
    }
};
Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Globals);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".console {\n  background-color: #1e1e1e;\n  height: 37rem;\n  padding: 2rem 3rem 0.5rem 3rem;\n  margin-bottom: 1rem;\n}\n\n.on {\n  visibility: visible;\n}\n\n.off {\n  visibility: hidden;\n}\n\n@keyframes blink {\n  50% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes blink {\n  50% {\n    opacity: 0;\n  }\n}\n\n.blink {\n  color: white;\n  font-size: 20px;\n  animation: blink 1.5s step-start 0s infinite;\n  -webkit-animation: blink 1.5s step-start 0s infinite;\n}\n\n.str {\n  color: white;\n  font-size: 20px;\n  margin-top: 1rem;\n}\n\n.console-label {\n  color: white;\n  font-size: 2rem;\n}\n\n.jumbotron {\n  box-shadow: rgba(156, 172, 172, 0.2) 0px 2px 2px, rgba(156, 172, 172, 0.2) 0px 4px 4px, rgba(156, 172, 172, 0.2) 0px 8px 8px, rgba(156, 172, 172, 0.2) 0px 16px 16px, rgba(156, 172, 172, 0.2) 0px 32px 32px, rgba(156, 172, 172, 0.2) 0px 64px 64px;\n}\n\n.mainHeader {\n  margin: auto;\n  text-align: center;\n}\n\n.home-container {\n  padding-bottom: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEJPU1NcXERlc2t0b3BcXERFVlxccG9ydGZvbGlvXFxjbGllbnQvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxVQUFBO0VDQ0Y7QUFDRjs7QURDQTtFQUNFO0lBQ0UsVUFBQTtFQ0NGO0FBQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0VBQ0Esb0RBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxvUEFBQTtBQ0NGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnNvbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMzAsIDMwKTtcclxuICBoZWlnaHQ6IDM3cmVtO1xyXG4gIHBhZGRpbmc6IDJyZW0gM3JlbSAwLjVyZW0gM3JlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ub24ge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5vZmYge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGluayB7XHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBibGluayB7XHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbi5ibGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBhbmltYXRpb246IGJsaW5rIDEuNXMgc3RlcC1zdGFydCAwcyBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMS41cyBzdGVwLXN0YXJ0IDBzIGluZmluaXRlO1xyXG59XHJcblxyXG4uc3RyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5jb25zb2xlLWxhYmVsIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uanVtYm90cm9uIHtcclxuICBib3gtc2hhZG93OiByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDJweCAycHgsXHJcbiAgICByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDRweCA0cHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggOHB4IDhweCxcclxuICAgIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMTZweCAxNnB4LFxyXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAzMnB4IDMycHgsXHJcbiAgICByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDY0cHggNjRweDtcclxufVxyXG5cclxuLm1haW5IZWFkZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ob21lLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xyXG59IiwiLmNvbnNvbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xuICBoZWlnaHQ6IDM3cmVtO1xuICBwYWRkaW5nOiAycmVtIDNyZW0gMC41cmVtIDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5vbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5vZmYge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBibGluayB7XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmJsaW5rIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGFuaW1hdGlvbjogYmxpbmsgMS41cyBzdGVwLXN0YXJ0IDBzIGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMS41cyBzdGVwLXN0YXJ0IDBzIGluZmluaXRlO1xufVxuXG4uc3RyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5jb25zb2xlLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5qdW1ib3Ryb24ge1xuICBib3gtc2hhZG93OiByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDJweCAycHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggNHB4IDRweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA4cHggOHB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDE2cHggMTZweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAzMnB4IDMycHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggNjRweCA2NHB4O1xufVxuXG4ubWFpbkhlYWRlciB7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaG9tZS1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");





let HomeComponent = class HomeComponent {
    constructor(router, globals) {
        this.router = router;
        this.running = false;
        this.userInput = "";
        this.visible = false;
        this.slideIn = false;
        this.router.events.subscribe(ev => {
            if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                this.slideInHome();
            }
        });
        globals.title = "Home";
    }
    ngOnInit() { }
    runStyle() {
        let runStyle = {
            on: this.running === true,
            off: this.running === false
        };
        return runStyle;
    }
    runCode() {
        this.running = !this.running;
        this.visible = !this.visible;
    }
    slideInHome() {
        this.slideIn = !this.slideIn;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("slideInOut", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateY(-100%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateY(0%)" }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateY(-100%)" }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("slideSide", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(-120%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(0%)" }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(-100%)" }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n  background: #1e1e1e;\n}\n\n.sidenav .mat-toolbar {\n  background: #1e1e1e;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.hidden {\n  display: none;\n}\n\n.fill-remaining-space {\n  flex: 1 1 auto;\n}\n\n.toolbar-flex {\n  flex: 1 0.5 auto;\n}\n\n.nav-list {\n  background: #1e1e1e;\n}\n\n.header-image {\n  background-image: url('mypic.jpg');\n  background-size: cover;\n  padding: 5rem;\n  border-radius: 50%;\n  justify-content: center;\n}\n\n.header {\n  text-align: center;\n  margin: 1rem;\n}\n\n.sub-header {\n  font-size: 1.5rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.link-icon {\n  font-size: 2rem;\n  margin-right: 1rem;\n  padding-bottom: 0.3rem;\n}\n\n.toolBar1 {\n  background-color: transparent;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  z-index: 1000;\n}\n\n.burger {\n  background-color: #fdfdfd;\n}\n\n.nav-text {\n  color: white;\n  text-align: center;\n  margin: auto;\n}\n\n.nav-text:hover {\n  background: #cc5200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcQk9TU1xcRGVza3RvcFxcREVWXFxwb3J0Zm9saW9cXGNsaWVudC9zcmNcXGFwcFxcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZDogIzFlMWUxZTtcclxufVxyXG5cclxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiAjMWUxZTFlO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi50b29sYmFyLWZsZXgge1xyXG4gIGZsZXg6IDEgMC41IGF1dG87XHJcbn1cclxuXHJcbi5uYXYtbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogIzFlMWUxZTtcclxufVxyXG5cclxuLmhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9teXBpYy5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwYWRkaW5nOiA1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuLnN1Yi1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG59XHJcblxyXG4ubGluay1pY29uIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XHJcbn1cclxuXHJcbi50b29sQmFyMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5idXJnZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XHJcbn1cclxuXHJcbi5uYXYtdGV4dCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5uYXYtdGV4dDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2NjNTIwMDtcclxufVxyXG4iLCIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiAjMWUxZTFlO1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjMWUxZTFlO1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnRvb2xiYXItZmxleCB7XG4gIGZsZXg6IDEgMC41IGF1dG87XG59XG5cbi5uYXYtbGlzdCB7XG4gIGJhY2tncm91bmQ6ICMxZTFlMWU7XG59XG5cbi5oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL215cGljLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZzogNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxcmVtO1xufVxuXG4uc3ViLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLmxpbmstaWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xufVxuXG4udG9vbEJhcjEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5idXJnZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xufVxuXG4ubmF2LXRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubmF2LXRleHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjY2M1MjAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");





let NavComponent = class NavComponent {
    constructor(breakpointObserver, globals) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
        this.globals = globals;
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(["(min-width: 600px)"])
            .subscribe((state) => {
            if (state.matches) {
                this.handSetState = false;
            }
            else {
                this.handSetState = true;
            }
        });
    }
    scroll(id) {
        let el = document.getElementById(id);
        el.scrollIntoView({ behavior: 'smooth' });
    }
};
NavComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-nav",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 93%;\n  padding: 5rem;\n  background: #eceeef;\n  margin-top: 5rem;\n  border-radius: 5px;\n  box-shadow: rgba(156, 172, 172, 0.2) 0px 2px 2px, rgba(156, 172, 172, 0.2) 0px 4px 4px, rgba(156, 172, 172, 0.2) 0px 8px 8px, rgba(156, 172, 172, 0.2) 0px 16px 16px, rgba(156, 172, 172, 0.2) 0px 32px 32px, rgba(156, 172, 172, 0.2) 0px 64px 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvQzpcXFVzZXJzXFxCT1NTXFxEZXNrdG9wXFxERVZcXHBvcnRmb2xpb1xcY2xpZW50L3NyY1xcYXBwXFxwcm9qZWN0c1xccHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxvUEFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDkzJTtcclxuICBwYWRkaW5nOiA1cmVtO1xyXG5cclxuICBiYWNrZ3JvdW5kOiAjZWNlZWVmO1xyXG5cclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgYm94LXNoYWRvdzogcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAycHggMnB4LFxyXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA0cHggNHB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDhweCA4cHgsXHJcbiAgICByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDE2cHggMTZweCxcclxuICAgIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMzJweCAzMnB4LFxyXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA2NHB4IDY0cHg7XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MyU7XG4gIHBhZGRpbmc6IDVyZW07XG4gIGJhY2tncm91bmQ6ICNlY2VlZWY7XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAycHggMnB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDRweCA0cHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggOHB4IDhweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAxNnB4IDE2cHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMzJweCAzMnB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDY0cHggNjRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");





let ProjectsComponent = class ProjectsComponent {
    constructor(router, globals) {
        this.router = router;
        this.slideIn = false;
        this.router.events.subscribe(ev => {
            if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                this.slideInProjects();
            }
        });
        globals.title = "Projects";
    }
    ngOnInit() { }
    slideInProjects() {
        this.slideIn = !this.slideIn;
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"] }
];
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-projects",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("project1", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: "0" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: "1" }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateY(-100%)" }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("project2", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: "0" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms 100ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: "1" }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateY(-100%)" }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("project3", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: "0" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms 200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: "1" }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateY(-100%)" }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/resume/resume.component.scss":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  box-shadow: rgba(156, 172, 172, 0.2) 0px 2px 2px, rgba(156, 172, 172, 0.2) 0px 4px 4px, rgba(156, 172, 172, 0.2) 0px 8px 8px, rgba(156, 172, 172, 0.2) 0px 16px 16px, rgba(156, 172, 172, 0.2) 0px 32px 32px, rgba(156, 172, 172, 0.2) 0px 64px 64px;\n  height: 900px;\n}\n\n.resume-container {\n  margin: auto;\n  height: 725px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL0M6XFxVc2Vyc1xcQk9TU1xcRGVza3RvcFxcREVWXFxwb3J0Zm9saW9cXGNsaWVudC9zcmNcXGFwcFxccmVzdW1lXFxyZXN1bWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvUEFBQTtFQU1BLGFBQUE7QUNKSjs7QURPQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAycHggMnB4LFxyXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA0cHggNHB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDhweCA4cHgsXHJcbiAgICByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDE2cHggMTZweCxcclxuICAgIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMzJweCAzMnB4LFxyXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA2NHB4IDY0cHg7XHJcblxyXG4gICAgaGVpZ2h0OiA5MDBweDtcclxufVxyXG5cclxuLnJlc3VtZS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA3MjVweDtcclxufSIsIi53cmFwcGVyIHtcbiAgYm94LXNoYWRvdzogcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAycHggMnB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDRweCA0cHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggOHB4IDhweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAxNnB4IDE2cHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMzJweCAzMnB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDY0cHggNjRweDtcbiAgaGVpZ2h0OiA5MDBweDtcbn1cblxuLnJlc3VtZS1jb250YWluZXIge1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogNzI1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");





let ResumeComponent = class ResumeComponent {
    constructor(router, globals) {
        this.router = router;
        this.slideIn = false;
        this.router.events.subscribe(ev => {
            if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                this.slideInHome();
            }
        });
        globals.title = "Resume";
    }
    ngOnInit() { }
    slideInHome() {
        this.slideIn = !this.slideIn;
    }
};
ResumeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"] }
];
ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resume',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resume.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("slideSide", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(-120%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(0%)" })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(-100%)" }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resume.component.scss */ "./src/app/resume/resume.component.scss")).default]
    })
], ResumeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\BOSS\Desktop\DEV\portfolio\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map