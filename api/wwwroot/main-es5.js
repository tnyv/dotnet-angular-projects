function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav><router-outlet></router-outlet></app-nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/code/code.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/code/code.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCodeCodeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p class=\"code\">\n  <span class=\"darkBlue\">def</span><span class=\"brightYellow\"> reverse</span>\n  <span class=\"darkYellow\">(</span><span class=\"brightBlue\">s</span\n  ><span class=\"darkYellow\">)</span><span class=\"grey\">:</span> <br />\n  <span class=\"purple\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if </span>\n  <span class=\"darkBlue\">not </span><span class=\"grey\">s</span\n  ><span class=\"grey\">:</span><br />\n  <span class=\"purple\"\n    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return\n  </span>\n  <span class=\"grey\">s</span><br />\n  <span class=\"purple\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else</span\n  ><span class=\"grey\">:</span> <br />\n  <span class=\"purple\"\n    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return\n  </span>\n  <span class=\"grey\">reverse</span> <span class=\"darkYellow\">(</span\n  ><span class=\"grey\">s</span><span class=\"purple\">[</span\n  ><span class=\"green\">1</span><span class=\"grey\">:</span\n  ><span class=\"purple\">]</span> <span class=\"darkYellow\">) </span\n  ><span class=\"grey\">+ s</span><span class=\"darkYellow\">[</span>\n  <span class=\"green\">0</span><span class=\"darkYellow\">]</span>\n  <br /><br /><span class=\"grey\">about = </span\n  ><span class=\"orange\">\".smelborp ssenisub evlos ot snoitulos TI gnidliub tuoba etanoissap s'ohw repoleved erawtfos a m'I\"</span><br />\n  <span class=\"brightYellow\">print</span><span class=\"darkYellow\">(</span\n  ><span class=\"grey\">reverse</span><span class=\"purple\">(</span\n  ><span class=\"grey\">about</span><span class=\"purple\">)</span\n  ><span class=\"darkYellow\">)</span>\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\n  class=\"jumbotron\"\n  [ngStyle]=\"{\n    width: '93%',\n    margin: 'auto',\n    padding: '5rem',\n    marginTop: '5rem'\n  }\"\n>\n  <h1\n    [ngStyle]=\"{\n      textAlign: 'center'\n    }\"\n  >\n    CONTACT\n  </h1>\n  <hr class=\"my-4\" />\n\n  <ng-template [ngIf]=\"messageSent\" [ngIfElse]=\"contact\">\n    <div class=\"sent-container\">\n      <h1 class=\"vertical-center\">Thanks for your message!</h1>\n    </div>\n  </ng-template>\n\n  <ng-template #contact>\n    <div class=\"row justify-content-center contact-form\">\n      <mat-form-field appearance=\"legacy\" class=\"col-md-5\">\n        <mat-label>Name</mat-label>\n        <input matInput [(ngModel)]=\"name\" />\n      </mat-form-field>\n    </div>\n    <div class=\"row justify-content-center contact-form\">\n      <mat-form-field appearance=\"legacy\" class=\"col-md-5\">\n        <mat-label>Email</mat-label>\n        <input matInput [(ngModel)]=\"email\" />\n      </mat-form-field>\n    </div>\n    <div class=\"row justify-content-center contact-form\">\n      <mat-form-field appearance=\"legacy\" class=\"col-md-5\">\n        <mat-label>Subject</mat-label>\n        <input matInput [(ngModel)]=\"subject\" />\n      </mat-form-field>\n    </div>\n    <div class=\"row justify-content-center contact-form\">\n      <mat-form-field appearance=\"legacy\" class=\"col-md-5\">\n        <mat-label>Message</mat-label>\n        <textarea\n          matInput\n          class=\"contact-form-text\"\n          [(ngModel)]=\"messageBody\"\n        ></textarea>\n      </mat-form-field>\n    </div>\n    <div class=\"row justify-content-center contact-form\">\n      <button\n        mat-raised-button\n        color=\"primary\"\n        class=\"col-md-2\"\n        (click)=\"sendEmail()\"\n      >\n        SEND\n      </button>\n    </div>\n\n    <ng-template [ngIf]=\"!formValid\" [ngIfElse]=\"default\">\n      <div class=\"row justify-content-center contact-form\">\n        <br />\n        <p class=\"warning\">Error: inputs cannot be blank</p>\n      </div>\n    </ng-template>\n\n    <ng-template [ngIf]=\"!emailValid\" [ngIfElse]=\"default\">\n      <div class=\"row justify-content-center contact-form\">\n        <br />\n        <p class=\"warning\">Error: email is invalid</p>\n      </div>\n    </ng-template>\n  </ng-template>\n</div>\n\n<ng-template #default></ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"home-container\" id=\"top\">\n  <div\n    *ngIf=\"slideIn\"\n    [@slideSide]\n    class=\"jumbotron\"\n    [ngStyle]=\"{\n      width: '93%',\n      margin: 'auto',\n      padding: '5rem'\n    }\"\n  >\n    <h1 class=\"mainHeader\">TONY VU</h1>\n    <h2 class=\"mainHeader\">software developer</h2>\n    <h3></h3>\n    <hr class=\"my-4\" />\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <app-code></app-code>\n\n        <ng-template [ngIf]=\"running === true\" [ngIfElse]=\"off\">\n          <button\n            mat-raised-button\n            color=\"accent\"\n            [ngStyle]=\"{ width: '100%' }\"\n            (click)=\"runCode()\"\n          >\n            <i\n              class=\"fas fa-arrow-alt-circle-left\"\n              [ngStyle]=\"{\n                fontSize: '2rem',\n                marginRight: '.5rem',\n                paddingBottom: 'rem'\n              }\"\n            ></i>\n            RESET\n          </button>\n          <mat-progress-bar\n            mode=\"indeterminate\"\n            [ngStyle]=\"{ width: '100%', marginBottom: '3rem' }\"\n            [ngClass]=\"runStyle()\"\n          >\n          </mat-progress-bar>\n        </ng-template>\n\n        <ng-template #off>\n          <button\n            mat-raised-button\n            color=\"accent\"\n            [ngStyle]=\"{ width: '100%', backgroundColor: 'green' }\"\n            (click)=\"runCode()\"\n          >\n            <i\n              class=\"far fa-arrow-alt-circle-right\"\n              [ngStyle]=\"{\n                fontSize: '2rem',\n                marginRight: '.5rem',\n                paddingBottom: 'rem'\n              }\"\n            ></i>\n            RUN\n          </button>\n          <mat-progress-bar\n            mode=\"indeterminate\"\n            [ngStyle]=\"{ width: '100%', marginBottom: '3rem' }\"\n            [ngClass]=\"runStyle()\"\n          >\n          </mat-progress-bar>\n        </ng-template>\n      </div>\n\n      <div class=\"col-md-6 console\">\n        <div *ngIf=\"visible\" [@slideInOut]>\n          <span class=\"blink\">HELLO</span><br /><br /><span\n            class=\"str\"\n            [ngClass]=\"runStyle()\"\n          >\n            I'm a software developer who's passionate about building IT\n            solutions to solve business problems.\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"projects\"></div>\n  <app-projects></app-projects>\n\n  <div id=\"resume\"></div>\n  <app-resume></app-resume>\n\n  <div id=\"contact\"></div>\n  <app-contact></app-contact>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"false\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"(isHandset$ | async) === false\"\n  >\n    <mat-nav-list class=\"nav-list\">\n      <a href=\"\">\n        <mat-toolbar\n          [ngStyle]=\"{\n            justifyContent: 'center',\n            height: '10rem',\n            marginTop: '1rem'\n          }\"\n          ><img class=\"header-image\"\n        /></mat-toolbar>\n\n\n      </a>\n      <a\n        mat-list-item\n        href=\"#\"\n        (click)=\"scroll('top')\"\n        (click)=\"handSetState && drawer.close()\"\n        class=\"nav-text\"\n      >\n        Home</a\n      >\n      <a\n        mat-list-item\n        href=\"#\"\n        (click)=\"scroll('projects')\"\n        (click)=\"handSetState && drawer.close()\"\n        class=\"nav-text\"\n      >\n        Projects</a\n      >\n      <a\n        mat-list-item\n        href=\"#\"\n        (click)=\"scroll('resume')\"\n        (click)=\"handSetState && drawer.close()\"\n        class=\"nav-text\"\n      >\n        R&eacute;sum&eacute;</a\n      >\n      <a\n        mat-list-item\n        href=\"#\"\n        (click)=\"scroll('contact')\"\n        (click)=\"handSetState && drawer.close()\"\n        class=\"nav-text\"\n      >\n        Contact</a\n      >\n\n      <a\n        mat-list-item\n        href=\"#\"\n        onClick=\"window.open('//github.com/tonyvu1')\"\n        (click)=\"handSetState && drawer.close()\"\n        class=\"nav-text\"\n      >\n        Github</a\n      >\n      <a\n        mat-list-item\n        href=\"#\"\n        onClick=\"window.open('//linkedin.com/in/tonyvu1/')\"\n        (click)=\"handSetState && drawer.close()\"\n        class=\"nav-text\"\n      >\n        LinkedIn\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <mat-toolbar class=\"toolBar1\">\n      <button\n        class=\"burger\"\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\"\n      >\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <mat-toolbar class=\"toolBar1\"> </mat-toolbar>\n    </mat-toolbar>\n\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron container\">\n  <h1\n    [ngStyle]=\"{\n      textAlign: 'center'\n    }\"\n  >\n    PROJECTS\n  </h1>\n  <hr class=\"my-4\" />\n\n  <div class=\"row projects-row\">\n    <div class=\"jumbotron\">\n      <h1 class=\"display-4\">Learning Management System</h1>\n      <p class=\"lead\">\n        Technologies: C# (.NET Core 3.1) &#8226; JavaScript (React + Redux)\n        &#8226; SQL Server &#8226; Bootstrap\n      </p>\n      <hr class=\"my-4\" />\n      <p>\n        This is my most current programming project and it is also the most\n        complex project I have created. It is a light-weight learning management\n        system. Users will be able to create an account, login, register to\n        courses, view lectures, take tests, and earn points with a certificate\n        each time they complete a course. In addition, role based JWT\n        authorization will be utilized so that Admin roles can delete/edit users\n        and add/edit courses on the system. User roles will only be able to\n        perform bare minimum actions on the system.\n      </p>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        onClick=\"window.open('//github.com/tonyvu1/LMS')\"\n      >\n        CODE\n      </button>\n    </div>\n\n    <div class=\"jumbotron\">\n      <h1 class=\"display-4\">POS System</h1>\n      <p class=\"lead\">\n        Technologies: C# (.NET Core 3.1) &#8226; TypeScript (Angular) &#8226;\n        SQL Server\n      </p>\n      <hr class=\"my-4\" />\n      <p>\n        This is a full stack online POS system for a fictional icecream shop.\n        The backend is built on .NET Core 3.1 and deployed with Microsoft Azure.\n        Sales records are posted and retrieved from a SQL Server database, which\n        was maintained utilizing SQL Server Management Studio. The front end is\n        built with Angular 8 and Bootstrap.\n      </p>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        onClick=\"window.open('//github.com/tonyvu1/pos')\"\n        [ngStyle]=\"{\n          marginRight: '10px'\n        }\"\n      >\n        CODE\n      </button>\n      <button\n        mat-raised-button\n        color=\"accent\"\n        onClick=\"window.open('//icecreampos.azurewebsites.net/')\"\n      >\n        DEMO\n      </button>\n    </div>\n\n    <div class=\"jumbotron\">\n      <h1 class=\"display-4\">First Portfolio Website</h1>\n      <p class=\"lead\">\n        Technologies: JavaScript &#8226; HTML &#8226; SASS &#8226; PHP\n      </p>\n      <hr class=\"my-4\" />\n      <p>\n        This was my first portfolio website that I developed with vanilla\n        JavaScript, HTML, SASS, and a hint of PHP. I included it in my list of\n        projects because it taught me a lot of fundamental lessons about web\n        development, such as why it's a good idea to use styling frameworks such\n        as Bootstrap to save time on responsive UI implementations, basic JS DOM\n        element manipulation for UX, and handling form submissions with PHP.\n      </p>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        onClick=\"window.open('//github.com/tonyvu1/old-portfolio')\"\n        [ngStyle]=\"{\n          marginRight: '10px'\n        }\"\n      >\n        CODE\n      </button>\n      <button\n        mat-raised-button\n        color=\"accent\"\n        onClick=\"window.open('//old-portfolio.000webhostapp.com')\"\n      >\n        DEMO\n      </button>\n    </div>\n\n    <div class=\"jumbotron\">\n      <h1 class=\"display-4\">Video Chat Website</h1>\n      <p class=\"lead\">\n        Technologies: JavaScript &#8226; Express.js &#8226; MongoDB &#8226;\n        Bootstrap &#8226; EJS Templating\n      </p>\n      <hr class=\"my-4\" />\n      <p>\n        This is an online video/chat website I made with ExpressJS, EJS\n        templating system, and Bootstrap 4. I used MongoDB for my backend\n        database to store user account information, PassportJS middleware for\n        login authentication and protected routes, and Heruoku CLI for\n        deployment. Due to the cost of utilizing web socket services, this\n        project is not deployed for public testing.\n      </p>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        onClick=\"window.open('//github.com/tonyvu1/meetingspace')\"\n        [ngStyle]=\"{\n          marginRight: '10px'\n        }\"\n      >\n        CODE\n      </button>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResumeResumeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\n  class=\"jumbotron wrapper\"\n  [ngStyle]=\"{\n    width: '93%',\n    margin: 'auto',\n    padding: '5rem',\n    marginTop: '5rem'\n  }\"\n>\n  <h1\n    [ngStyle]=\"{\n      textAlign: 'center'\n    }\"\n  >\n    R&Eacute;SUM&Eacute;\n  </h1>\n\n  <hr class=\"my-4\" />\n\n    <embed\n      src=\"/assets/resume.pdf\"\n      class=\"resume-container col-md-12\"\n      type=\"application/pdf\"\n    />\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: false
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'client';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _code_code_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./code/code.component */
    "./src/app/code/code.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./globals */
    "./src/app/globals.ts");
    /* harmony import */


    var _resume_resume_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./resume/resume.component */
    "./src/app/resume/resume.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_20__["NavComponent"], _code_code_component__WEBPACK_IMPORTED_MODULE_25__["CodeComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_26__["ProjectsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_27__["ContactComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_29__["ResumeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      providers: [_globals__WEBPACK_IMPORTED_MODULE_28__["Globals"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/code/code.component.scss":
  /*!******************************************!*\
    !*** ./src/app/code/code.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCodeCodeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".code {\n  font-size: 20px;\n  font-weight: 400;\n  height: 37rem;\n  background-color: #1e1e1e;\n  padding-top: 20px;\n  padding-left: 20px;\n  padding-bottom: 0;\n  margin-bottom: 0;\n  overflow: auto;\n}\n\n.brightBlue {\n  color: #9ddef0;\n}\n\n.darkBlue {\n  color: #5495cd;\n}\n\n.brightYellow {\n  color: #dddda7;\n}\n\n.darkYellow {\n  color: #f6ce2e;\n}\n\n.purple {\n  color: #d592c8;\n}\n\n.teal {\n  color: #41c9a5;\n}\n\n.orange {\n  color: #d49782;\n}\n\n.grey {\n  color: #d2d2d2;\n}\n\n.green {\n  color: #5ed56c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29kZS9DOlxcVXNlcnNcXEJPU1NcXERlc2t0b3BcXERFVlxcaG9tZVxcY2xpZW50L3NyY1xcYXBwXFxjb2RlXFxjb2RlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb2RlL2NvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvZGUvY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2RlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBoZWlnaHQ6IDM3cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmJyaWdodEJsdWUge1xuICBjb2xvcjogcmdiKDE1NywgMjIyLCAyNDApO1xufVxuXG4uZGFya0JsdWUge1xuICBjb2xvcjogcmdiKDg0LCAxNDksIDIwNSk7XG59XG5cbi5icmlnaHRZZWxsb3cge1xuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAxNjcpO1xufVxuXG4uZGFya1llbGxvdyB7XG4gIGNvbG9yOiByZ2IoMjQ2LCAyMDYsIDQ2KTtcbn1cblxuLnB1cnBsZSB7XG4gIGNvbG9yOiByZ2IoMjEzLCAxNDYsIDIwMCk7XG59XG5cbi50ZWFsIHtcbiAgY29sb3I6IHJnYig2NSwgMjAxLCAxNjUpO1xufVxuXG4ub3JhbmdlIHtcbiAgY29sb3I6IHJnYigyMTIsIDE1MSwgMTMwKTtcbn1cblxuLmdyZXkge1xuICBjb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xufVxuXG4uZ3JlZW4ge1xuICBjb2xvcjogcmdiKDk0LCAyMTMsIDEwOCk7XG59IiwiLmNvZGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGhlaWdodDogMzdyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmJyaWdodEJsdWUge1xuICBjb2xvcjogIzlkZGVmMDtcbn1cblxuLmRhcmtCbHVlIHtcbiAgY29sb3I6ICM1NDk1Y2Q7XG59XG5cbi5icmlnaHRZZWxsb3cge1xuICBjb2xvcjogI2RkZGRhNztcbn1cblxuLmRhcmtZZWxsb3cge1xuICBjb2xvcjogI2Y2Y2UyZTtcbn1cblxuLnB1cnBsZSB7XG4gIGNvbG9yOiAjZDU5MmM4O1xufVxuXG4udGVhbCB7XG4gIGNvbG9yOiAjNDFjOWE1O1xufVxuXG4ub3JhbmdlIHtcbiAgY29sb3I6ICNkNDk3ODI7XG59XG5cbi5ncmV5IHtcbiAgY29sb3I6ICNkMmQyZDI7XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiAjNWVkNTZjO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/code/code.component.ts":
  /*!****************************************!*\
    !*** ./src/app/code/code.component.ts ***!
    \****************************************/

  /*! exports provided: CodeComponent */

  /***/
  function srcAppCodeCodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodeComponent", function () {
      return CodeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CodeComponent = /*#__PURE__*/function () {
      function CodeComponent() {
        _classCallCheck(this, CodeComponent);
      }

      _createClass(CodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CodeComponent;
    }();

    CodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-code',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./code.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/code/code.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./code.component.scss */
      "./src/app/code/code.component.scss"))["default"]]
    })], CodeComponent);
    /***/
  },

  /***/
  "./src/app/contact/contact.component.scss":
  /*!************************************************!*\
    !*** ./src/app/contact/contact.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".contact-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.contact-container > * {\n  width: 100%;\n}\n\n.jumbotron {\n  box-shadow: rgba(156, 172, 172, 0.2) 0px 2px 2px, rgba(156, 172, 172, 0.2) 0px 4px 4px, rgba(156, 172, 172, 0.2) 0px 8px 8px, rgba(156, 172, 172, 0.2) 0px 16px 16px, rgba(156, 172, 172, 0.2) 0px 32px 32px, rgba(156, 172, 172, 0.2) 0px 64px 64px;\n}\n\n.email {\n  margin-bottom: 10px;\n}\n\n.email:hover {\n  cursor: pointer;\n}\n\n.contact-form {\n  font-size: 20px;\n}\n\n.contact-form-text {\n  height: 200px;\n}\n\n.warning {\n  color: red;\n  margin-top: 10px;\n}\n\n.sent-container {\n  height: 500px;\n  position: relative;\n  justify-content: center;\n}\n\n.vertical-center {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXEJPU1NcXERlc2t0b3BcXERFVlxcaG9tZVxcY2xpZW50L3NyY1xcYXBwXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLG9QQUFBO0FDQ0Y7O0FETUE7RUFDRSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtBQ0hGOztBRE1BO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0hGOztBRE1BO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxnQ0FBQTtFQUNBLGVBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb250YWN0LWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMnB4IDJweCxcbiAgICByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDRweCA0cHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggOHB4IDhweCxcbiAgICByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDE2cHggMTZweCxcbiAgICByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDMycHggMzJweCxcbiAgICByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDY0cHggNjRweDtcbn1cblxuLmVtYWlsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmVtYWlsOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGFjdC1mb3JtIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY29udGFjdC1mb3JtLXRleHQge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4ud2FybmluZyB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zZW50LWNvbnRhaW5lciB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi52ZXJ0aWNhbC1jZW50ZXIge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZm9udC1zaXplOiA1MHB4O1xufSIsIi5jb250YWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb250YWN0LWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMnB4IDJweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA0cHggNHB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDhweCA4cHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMTZweCAxNnB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDMycHggMzJweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA2NHB4IDY0cHg7XG59XG5cbi5lbWFpbCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5lbWFpbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRhY3QtZm9ybSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNvbnRhY3QtZm9ybS10ZXh0IHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLndhcm5pbmcge1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2VudC1jb250YWluZXIge1xuICBoZWlnaHQ6IDUwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udmVydGljYWwtY2VudGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../email.service */
    "./src/app/email.service.ts");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(emailService) {
        _classCallCheck(this, ContactComponent);

        this.emailService = emailService;
        this.name = "";
        this.email = "";
        this.subject = "";
        this.messageBody = "";
        this.formValid = true;
        this.emailValid = true;
        this.messageSent = false;
      }

      _createClass(ContactComponent, [{
        key: "isValid",
        value: function isValid() {
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

          var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

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
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendEmail",
        value: function sendEmail() {
          var _this = this;

          if (this.isValid()) {
            this.emailService.sendEmail(this.name, this.email, this.subject, this.messageBody).then(function () {
              return _this.respond();
            }, function (reject) {
              console.log("Something went wrong");
            });
          }
        }
      }, {
        key: "respond",
        value: function respond() {
          this.messageSent = true;
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: _email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"]
      }];
    };

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-contact",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/contact/contact.component.scss"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/email.service.ts":
  /*!**********************************!*\
    !*** ./src/app/email.service.ts ***!
    \**********************************/

  /*! exports provided: EmailService */

  /***/
  function srcAppEmailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailService", function () {
      return EmailService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var EmailService = /*#__PURE__*/function () {
      function EmailService(http) {
        _classCallCheck(this, EmailService);

        this.http = http; // PRODUCTION LINK: private baseUrl = 'https://tonyvu.dev';
        // DEBUG LINK: private baseUrl = "http://localhost:4200";
        // private baseUrl = "https://tonyvu.dev/message";

        this.baseUrl = "http://localhost:5001/message";
      }

      _createClass(EmailService, [{
        key: "sendEmail",
        value: function sendEmail(name, email, subject, messageBody) {
          var _this2 = this;

          var headers = {
            "Content-Type": "application/json"
          };
          var body = {
            name: name,
            email: email,
            subject: subject,
            messageBody: messageBody
          };
          return new Promise(function (resolve, reject) {
            _this2.http.post(_this2.baseUrl, body, {
              headers: headers
            }).subscribe(function (res) {
              resolve();
            }, function (error) {
              reject();
            });
          });
        }
      }]);

      return EmailService;
    }();

    EmailService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], EmailService);
    /***/
  },

  /***/
  "./src/app/globals.ts":
  /*!****************************!*\
    !*** ./src/app/globals.ts ***!
    \****************************/

  /*! exports provided: Globals */

  /***/
  function srcAppGlobalsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Globals", function () {
      return Globals;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Globals = function Globals() {
      _classCallCheck(this, Globals);

      this.title = 'test';
    };

    Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Globals);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".console {\n  background-color: #1e1e1e;\n  height: 37rem;\n  padding: 2rem 3rem 0.5rem 3rem;\n  margin-bottom: 1rem;\n}\n\n.on {\n  visibility: visible;\n}\n\n.off {\n  visibility: hidden;\n}\n\n@keyframes blink {\n  50% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes blink {\n  50% {\n    opacity: 0;\n  }\n}\n\n.blink {\n  color: white;\n  font-size: 20px;\n  animation: blink 1.5s step-start 0s infinite;\n  -webkit-animation: blink 1.5s step-start 0s infinite;\n}\n\n.str {\n  color: white;\n  font-size: 20px;\n  margin-top: 1rem;\n}\n\n.console-label {\n  color: white;\n  font-size: 2rem;\n}\n\n.jumbotron {\n  box-shadow: rgba(156, 172, 172, 0.2) 0px 2px 2px, rgba(156, 172, 172, 0.2) 0px 4px 4px, rgba(156, 172, 172, 0.2) 0px 8px 8px, rgba(156, 172, 172, 0.2) 0px 16px 16px, rgba(156, 172, 172, 0.2) 0px 32px 32px, rgba(156, 172, 172, 0.2) 0px 64px 64px;\n}\n\n.mainHeader {\n  margin: auto;\n  text-align: center;\n}\n\n.home-container {\n  padding-bottom: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEJPU1NcXERlc2t0b3BcXERFVlxcaG9tZVxcY2xpZW50L3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsVUFBQTtFQ0NGO0FBQ0Y7O0FEQ0E7RUFDRTtJQUNFLFVBQUE7RUNDRjtBQUNGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLG9EQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usb1BBQUE7QUNDRjs7QURNQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25zb2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAzMCwgMzApO1xuICBoZWlnaHQ6IDM3cmVtO1xuICBwYWRkaW5nOiAycmVtIDNyZW0gMC41cmVtIDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5vbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5vZmYge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBibGluayB7XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmJsaW5rIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGFuaW1hdGlvbjogYmxpbmsgMS41cyBzdGVwLXN0YXJ0IDBzIGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMS41cyBzdGVwLXN0YXJ0IDBzIGluZmluaXRlO1xufVxuXG4uc3RyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5jb25zb2xlLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5qdW1ib3Ryb24ge1xuICBib3gtc2hhZG93OiByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDJweCAycHgsXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA0cHggNHB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDhweCA4cHgsXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAxNnB4IDE2cHgsXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAzMnB4IDMycHgsXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA2NHB4IDY0cHg7XG59XG5cbi5tYWluSGVhZGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ob21lLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAxNTBweDtcbn0iLCIuY29uc29sZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XG4gIGhlaWdodDogMzdyZW07XG4gIHBhZGRpbmc6IDJyZW0gM3JlbSAwLjVyZW0gM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLm9uIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLm9mZiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uYmxpbmsge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYW5pbWF0aW9uOiBibGluayAxLjVzIHN0ZXAtc3RhcnQgMHMgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAxLjVzIHN0ZXAtc3RhcnQgMHMgaW5maW5pdGU7XG59XG5cbi5zdHIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmNvbnNvbGUtbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMnB4IDJweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA0cHggNHB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDhweCA4cHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMTZweCAxNnB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDMycHggMzJweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA2NHB4IDY0cHg7XG59XG5cbi5tYWluSGVhZGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ob21lLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAxNTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../globals */
    "./src/app/globals.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router, globals) {
        var _this3 = this;

        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.running = false;
        this.userInput = "";
        this.visible = false;
        this.slideIn = false;
        this.router.events.subscribe(function (ev) {
          if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            _this3.slideInHome();
          }
        });
        globals.title = "Home";
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "runStyle",
        value: function runStyle() {
          var runStyle = {
            on: this.running === true,
            off: this.running === false
          };
          return runStyle;
        }
      }, {
        key: "runCode",
        value: function runCode() {
          this.running = !this.running;
          this.visible = !this.visible;
        }
      }, {
        key: "slideInHome",
        value: function slideInHome() {
          this.slideIn = !this.slideIn;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("slideInOut", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateY(-100%)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateY(0%)"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateY(-100%)"
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("slideSide", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateX(-120%)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateX(0%)"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateX(-100%)"
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/nav/nav.component.scss":
  /*!****************************************!*\
    !*** ./src/app/nav/nav.component.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavNavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n  background: #1e1e1e;\n}\n\n.sidenav .mat-toolbar {\n  background: #1e1e1e;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.hidden {\n  display: none;\n}\n\n.fill-remaining-space {\n  flex: 1 1 auto;\n}\n\n.toolbar-flex {\n  flex: 1 0.5 auto;\n}\n\n.nav-list {\n  background: #1e1e1e;\n}\n\n.header-image {\n  background-image: url('mypic.jpg');\n  background-size: cover;\n  padding: 5rem;\n  border-radius: 50%;\n  justify-content: center;\n}\n\n.header {\n  text-align: center;\n  margin: 1rem;\n}\n\n.sub-header {\n  font-size: 1.5rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.link-icon {\n  font-size: 2rem;\n  margin-right: 1rem;\n  padding-bottom: 0.3rem;\n}\n\n.toolBar1 {\n  background-color: transparent;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  z-index: 1000;\n}\n\n.burger {\n  background-color: #fdfdfd;\n}\n\n.nav-text {\n  color: white;\n  text-align: center;\n  margin: auto;\n}\n\n.nav-text:hover {\n  background: #cc5200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcQk9TU1xcRGVza3RvcFxcREVWXFxob21lXFxjbGllbnQvc3JjXFxhcHBcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQ6ICMxZTFlMWU7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICMxZTFlMWU7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4udG9vbGJhci1mbGV4IHtcbiAgZmxleDogMSAwLjUgYXV0bztcbn1cblxuLm5hdi1saXN0IHtcbiAgYmFja2dyb3VuZDogIzFlMWUxZTtcbn1cblxuLmhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbXlwaWMuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwYWRkaW5nOiA1cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDFyZW07XG59XG5cbi5zdWItaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubGluay1pY29uIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG59XG5cbi50b29sQmFyMSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmJ1cmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XG59XG5cbi5uYXYtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5uYXYtdGV4dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjYzUyMDA7XG59XG4iLCIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiAjMWUxZTFlO1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjMWUxZTFlO1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnRvb2xiYXItZmxleCB7XG4gIGZsZXg6IDEgMC41IGF1dG87XG59XG5cbi5uYXYtbGlzdCB7XG4gIGJhY2tncm91bmQ6ICMxZTFlMWU7XG59XG5cbi5oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL215cGljLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZzogNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxcmVtO1xufVxuXG4uc3ViLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLmxpbmstaWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xufVxuXG4udG9vbEJhcjEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5idXJnZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xufVxuXG4ubmF2LXRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubmF2LXRleHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjY2M1MjAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../globals */
    "./src/app/globals.ts");

    var NavComponent = /*#__PURE__*/function () {
      function NavComponent(breakpointObserver, globals) {
        _classCallCheck(this, NavComponent);

        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
          return result.matches;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
        this.globals = globals;
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.breakpointObserver.observe(["(min-width: 600px)"]).subscribe(function (state) {
            if (state.matches) {
              _this4.handSetState = false;
            } else {
              _this4.handSetState = true;
            }
          });
        }
      }, {
        key: "scroll",
        value: function scroll(id) {
          var el = document.getElementById(id);
          el.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
      }, {
        type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]
      }];
    };

    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-nav",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav.component.scss */
      "./src/app/nav/nav.component.scss"))["default"]]
    })], NavComponent);
    /***/
  },

  /***/
  "./src/app/projects/projects.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/projects/projects.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  width: 93%;\n  padding: 5rem;\n  background: #eceeef;\n  margin-top: 5rem;\n  border-radius: 5px;\n  box-shadow: rgba(156, 172, 172, 0.2) 0px 2px 2px, rgba(156, 172, 172, 0.2) 0px 4px 4px, rgba(156, 172, 172, 0.2) 0px 8px 8px, rgba(156, 172, 172, 0.2) 0px 16px 16px, rgba(156, 172, 172, 0.2) 0px 32px 32px, rgba(156, 172, 172, 0.2) 0px 64px 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvQzpcXFVzZXJzXFxCT1NTXFxEZXNrdG9wXFxERVZcXGhvbWVcXGNsaWVudC9zcmNcXGFwcFxccHJvamVjdHNcXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsb1BBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDkzJTtcbiAgcGFkZGluZzogNXJlbTtcblxuICBiYWNrZ3JvdW5kOiAjZWNlZWVmO1xuXG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICBib3gtc2hhZG93OiByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDJweCAycHgsXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA0cHggNHB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDhweCA4cHgsXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAxNnB4IDE2cHgsXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAzMnB4IDMycHgsXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA2NHB4IDY0cHg7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDkzJTtcbiAgcGFkZGluZzogNXJlbTtcbiAgYmFja2dyb3VuZDogI2VjZWVlZjtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDJweCAycHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggNHB4IDRweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA4cHggOHB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDE2cHggMTZweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAzMnB4IDMycHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggNjRweCA2NHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../globals */
    "./src/app/globals.ts");

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent(router, globals) {
        var _this5 = this;

        _classCallCheck(this, ProjectsComponent);

        this.router = router;
        this.slideIn = false;
        this.router.events.subscribe(function (ev) {
          if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            _this5.slideInProjects();
          }
        });
        globals.title = "Projects";
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "slideInProjects",
        value: function slideInProjects() {
          this.slideIn = !this.slideIn;
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]
      }];
    };

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-projects",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("project1", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: "0"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: "1"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateY(-100%)"
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("project2", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: "0"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms 100ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: "1"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateY(-100%)"
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("project3", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: "0"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms 200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: "1"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateY(-100%)"
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.scss */
      "./src/app/projects/projects.component.scss"))["default"]]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/resume/resume.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/resume/resume.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppResumeResumeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  box-shadow: rgba(156, 172, 172, 0.2) 0px 2px 2px, rgba(156, 172, 172, 0.2) 0px 4px 4px, rgba(156, 172, 172, 0.2) 0px 8px 8px, rgba(156, 172, 172, 0.2) 0px 16px 16px, rgba(156, 172, 172, 0.2) 0px 32px 32px, rgba(156, 172, 172, 0.2) 0px 64px 64px;\n  height: 900px;\n}\n\n.resume-container {\n  margin: auto;\n  height: 725px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL0M6XFxVc2Vyc1xcQk9TU1xcRGVza3RvcFxcREVWXFxob21lXFxjbGllbnQvc3JjXFxhcHBcXHJlc3VtZVxccmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb1BBQUE7RUFNQSxhQUFBO0FDSko7O0FET0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgICBib3gtc2hhZG93OiByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDJweCAycHgsXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA0cHggNHB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDhweCA4cHgsXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAxNnB4IDE2cHgsXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAzMnB4IDMycHgsXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA2NHB4IDY0cHg7XG5cbiAgICBoZWlnaHQ6IDkwMHB4O1xufVxuXG4ucmVzdW1lLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogNzI1cHg7XG59IiwiLndyYXBwZXIge1xuICBib3gtc2hhZG93OiByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDJweCAycHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggNHB4IDRweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA4cHggOHB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDE2cHggMTZweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAzMnB4IDMycHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggNjRweCA2NHB4O1xuICBoZWlnaHQ6IDkwMHB4O1xufVxuXG4ucmVzdW1lLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiA3MjVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/resume/resume.component.ts":
  /*!********************************************!*\
    !*** ./src/app/resume/resume.component.ts ***!
    \********************************************/

  /*! exports provided: ResumeComponent */

  /***/
  function srcAppResumeResumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeComponent", function () {
      return ResumeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../globals */
    "./src/app/globals.ts");

    var ResumeComponent = /*#__PURE__*/function () {
      function ResumeComponent(router, globals) {
        var _this6 = this;

        _classCallCheck(this, ResumeComponent);

        this.router = router;
        this.slideIn = false;
        this.router.events.subscribe(function (ev) {
          if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            _this6.slideInHome();
          }
        });
        globals.title = "Resume";
      }

      _createClass(ResumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "slideInHome",
        value: function slideInHome() {
          this.slideIn = !this.slideIn;
        }
      }]);

      return ResumeComponent;
    }();

    ResumeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]
      }];
    };

    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resume',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resume.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("slideSide", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateX(-120%)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateX(0%)"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateX(-100%)"
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resume.component.scss */
      "./src/app/resume/resume.component.scss"))["default"]]
    })], ResumeComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\BOSS\Desktop\DEV\home\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map