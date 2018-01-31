webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigator></app-navigator>\n<router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_admins_service__ = __webpack_require__("../../../../../src/app/services/admins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_Forms__ = __webpack_require__("../../../Forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/components/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_get_all_companies_get_all_companies_component__ = __webpack_require__("../../../../../src/app/components/get-all-companies/get-all-companies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_getcompany_getcompany_component__ = __webpack_require__("../../../../../src/app/components/getcompany/getcompany.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_getcustomer_getcustomer_component__ = __webpack_require__("../../../../../src/app/components/getcustomer/getcustomer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_getallcustomers_getallcustomers_component__ = __webpack_require__("../../../../../src/app/components/getallcustomers/getallcustomers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_createcompany_createcompany_component__ = __webpack_require__("../../../../../src/app/components/createcompany/createcompany.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_createcustomer_createcustomer_component__ = __webpack_require__("../../../../../src/app/components/createcustomer/createcustomer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_edit_companies_edit_companies_component__ = __webpack_require__("../../../../../src/app/components/edit-companies/edit-companies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_edit_customers_edit_customers_component__ = __webpack_require__("../../../../../src/app/components/edit-customers/edit-customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_navigator_navigator_component__ = __webpack_require__("../../../../../src/app/components/navigator/navigator.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: '', redirectTo: "/welcome", pathMatch: "full" },
    { path: 'create-company', component: __WEBPACK_IMPORTED_MODULE_12__components_createcompany_createcompany_component__["a" /* CreatecompanyComponent */] },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_7__components_welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'edit-companies', component: __WEBPACK_IMPORTED_MODULE_14__components_edit_companies_edit_companies_component__["a" /* EditCompaniesComponent */] },
    { path: 'create-customer', component: __WEBPACK_IMPORTED_MODULE_13__components_createcustomer_createcustomer_component__["a" /* CreatecustomerComponent */] },
    { path: 'edit-customers', component: __WEBPACK_IMPORTED_MODULE_15__components_edit_customers_edit_customers_component__["a" /* EditCustomersComponent */] },
    { path: 'get-company', component: __WEBPACK_IMPORTED_MODULE_9__components_getcompany_getcompany_component__["a" /* GetcompanyComponent */] },
    { path: 'get-customer', component: __WEBPACK_IMPORTED_MODULE_10__components_getcustomer_getcustomer_component__["a" /* GetcustomerComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_get_all_companies_get_all_companies_component__["a" /* GetAllCompaniesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_getcompany_getcompany_component__["a" /* GetcompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_getcustomer_getcustomer_component__["a" /* GetcustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_getallcustomers_getallcustomers_component__["a" /* GetallcustomersComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_createcompany_createcompany_component__["a" /* CreatecompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_createcustomer_createcustomer_component__["a" /* CreatecustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_edit_companies_edit_companies_component__["a" /* EditCompaniesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_edit_customers_edit_customers_component__["a" /* EditCustomersComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_navigator_navigator_component__["a" /* NavigatorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_Forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_admins_service__["a" /* AdminsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/classes/company.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = /** @class */ (function () {
    function Company(id, name, password, email) {
        this.id = id;
        this.compName = name;
        this.password = password;
        this.email = email;
    }
    Object.defineProperty(Company.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "setId", {
        set: function (id) {
            this.id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "getName", {
        get: function () {
            return this.compName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "setName", {
        set: function (name) {
            this.compName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "getEmail", {
        get: function () {
            return this.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "setEmail", {
        set: function (email) {
            this.email = email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "getPassword", {
        get: function () {
            return this.password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "setPassword", {
        set: function (password) {
            this.password = password;
        },
        enumerable: true,
        configurable: true
    });
    return Company;
}());



/***/ }),

/***/ "../../../../../src/app/classes/customer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(id, name, password) {
        this.id = id;
        this.custName = name;
        this.password = password;
    }
    Customer.prototype.getId = function () {
        return this.id;
    };
    Customer.prototype.setId = function (id) {
        this.id = id;
    };
    Customer.prototype.getName = function () {
        return this.custName;
    };
    Customer.prototype.setName = function (name) {
        this.custName = name;
    };
    Customer.prototype.getPassword = function () {
        return this.password;
    };
    Customer.prototype.setPassword = function (password) {
        this.password = password;
    };
    return Customer;
}());



/***/ }),

/***/ "../../../../../src/app/components/createcompany/createcompany.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n    margin-left:10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/createcompany/createcompany.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"https://unpkg.com/sweetalert/dist/sweetalert.min.js\"></script>\n\n<div class=\"conatiner\">\n    <h2>Create new Company</h2>\n    <form (ngSubmit)=\"createCompany()\">\n        <div class=\"row\">\n            <div class=\"form-group col-xs-4 col-lg-4\">\n                <label for=\"email\">Company Name:</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"company.compName\" [ngModelOptions]=\"{standalone: true}\" required>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-xs-4 col-lg-4\">\n                <label for=\"email\">Comapny Email:</label>\n                <input type=\"email\"  class=\"form-control\" id=\"email\" [(ngModel)]=\"company.email\" [ngModelOptions]=\"{standalone: true}\" required>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-xs-4 col-lg-4\">\n                <label for=\"pwd\">Company Password:</label>\n                <input type=\"password\" class=\"form-control\" id=\"pwd\" [(ngModel)]=\"company.password\" [ngModelOptions]=\"{standalone: true}\" required>\n            </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Add new Company!</button>\n    </form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/createcompany/createcompany.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatecompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admins_service__ = __webpack_require__("../../../../../src/app/services/admins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_company__ = __webpack_require__("../../../../../src/app/classes/company.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreatecompanyComponent = /** @class */ (function () {
    function CreatecompanyComponent(service) {
        this.service = service;
        this.company = new __WEBPACK_IMPORTED_MODULE_2__classes_company__["a" /* Company */]();
    }
    CreatecompanyComponent.prototype.ngOnInit = function () {
    };
    CreatecompanyComponent.prototype.createCompany = function () {
        var self = this;
        self.service.createCompany(self.company).subscribe(function (sucess) {
            alert('company created!');
        }, function (error) {
            alert('error occured while trying to create a new company! that user name is probably already taken');
        });
    };
    CreatecompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-createcompany',
            template: __webpack_require__("../../../../../src/app/components/createcompany/createcompany.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/createcompany/createcompany.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admins_service__["a" /* AdminsService */]])
    ], CreatecompanyComponent);
    return CreatecompanyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/createcustomer/createcustomer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n    margin-left:10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/createcustomer/createcustomer.component.html":
/***/ (function(module, exports) {

module.exports = "\n      <!-- <h2 >Create New Customr</h2>  \n      \n           \n    \n      \n      Name:<input type=\"text\" id=\"customerName\" [(ngModel)]=\"customer.custName\" />\n      Company Password:<input type=\"password\"  [(ngModel)]=\"customer.password\"  />\n\n      \n\n  <button type=\"submit\"   (click)=\"createCustomer()\">Create New Customr</button> -->\n\n  <script src=\"https://unpkg.com/sweetalert/dist/sweetalert.min.js\"></script>\n\n<div class=\"conatiner\">\n    <h2>Create new Customer</h2>\n    <form (ngSubmit)=\"createCustomer()\">\n        <div class=\"row\">\n            <div class=\"form-group col-xs-4 col-lg-4\">\n                <label for=\"email\">Customer Name:</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"customer.custName\" [ngModelOptions]=\"{standalone: true}\" required>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-xs-4 col-lg-4\">\n                <label for=\"pwd\">Customer Password:</label>\n                <input type=\"password\" class=\"form-control\" id=\"pwd\" [(ngModel)]=\"customer.password\" [ngModelOptions]=\"{standalone: true}\" required>\n            </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Add new Customer</button>\n    </form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/createcustomer/createcustomer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatecustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_customer__ = __webpack_require__("../../../../../src/app/classes/customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_admins_service__ = __webpack_require__("../../../../../src/app/services/admins.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreatecustomerComponent = /** @class */ (function () {
    function CreatecustomerComponent(service) {
        this.service = service;
        this.customer = new __WEBPACK_IMPORTED_MODULE_0__classes_customer__["a" /* Customer */];
    }
    CreatecustomerComponent.prototype.ngOnInit = function () {
    };
    CreatecustomerComponent.prototype.createCustomer = function () {
        var self = this;
        self.service.createCustomer(self.customer).subscribe(function (sucess) {
            alert('customer created!');
        }, function (error) {
            alert('error occured while trying to create a new customer! that user name is probably already taken');
        });
    };
    CreatecustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-createcustomer',
            template: __webpack_require__("../../../../../src/app/components/createcustomer/createcustomer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/createcustomer/createcustomer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_admins_service__["a" /* AdminsService */]])
    ], CreatecustomerComponent);
    return CreatecustomerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/edit-companies/edit-companies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-companies/edit-companies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <table class=\"table table-stripped table-hover\">\r\n        <thead>\r\n            <tr>\r\n                <th>ID</th>\r\n                <th>Company name</th>\r\n                <th>company email</th>\r\n                <th>company password</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr class=\"clickable-row\" data-toggle=\"modal\" data-target=\"#editCompany\" *ngFor=\"let company of companies\" (click)=\"setCompany(company)\">\r\n                <td>{{ company.id }}</td>\r\n                <td>{{ company.compName }}</td>\r\n                <td>{{ company.email }}</td>\r\n                <td>{{ company.password }}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<div id=\"editCompany\" class=\"modal fade\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h3>{{ company.compName }}</h3>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n                <form (ngSubmit)=\"updateCompany()\">\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-lg-4\">\r\n                            <label for=\"email\">Comapny Email:</label>\r\n                            <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"company.email\" [ngModelOptions]=\"{standalone: true}\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-lg-4\">\r\n                            <label for=\"pwd\">Company Password:</label>\r\n                            <input type=\"password\" class=\"form-control\" id=\"pwd\" [(ngModel)]=\"company.password\" [ngModelOptions]=\"{standalone: true}\"\r\n                                required>\r\n                        </div>\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-default\">Update Company</button>\r\n                </form>\r\n                <hr>\r\n                <button class=\"btn btn-danger btn-lg\" (click)=\"deleteCompany()\">Delete Company!?!?</button>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <form (ngSubmit)= \"updateCompany()\">\r\n\r\n    Name:<input type=\"text\"  id=\"companyName\" [(ngModel)]=\"company.compName\" [ngModelOptions]=\"{standalone: true}\" />\r\n    Company Email: <input type=\"email\"  id=\"email\" [(ngModel)]=\"company.email\" [ngModelOptions]=\"{standalone: true}\" />\r\n    Company Password:<input type=\"password\"  [(ngModel)]=\"company.password\" [ngModelOptions]=\"{standalone: true}\" />\r\n\r\n    <button type=\"submit\"   (click)=\"updateCompany()\">update Company</button>\r\n\r\n    \r\n</form> -->\r\n\r\n<!-- <form (ngSubmit)= \"deleteCompany()\">\r\n\r\n    Name:<input type=\"text\"   [(ngModel)]=\"company2.compName\" [ngModelOptions]=\"{standalone: true}\" />\r\n    Company Email: <input type=\"email\"  [(ngModel)]=\"company2.email\" [ngModelOptions]=\"{standalone: true}\" />\r\n    Company Password:<input type=\"password\"  [(ngModel)]=\"company2.password\" [ngModelOptions]=\"{standalone: true}\" />\r\n\r\n    <button type=\"submit\"   (click)=\"deleteCompany()\">delete Company</button>\r\n\r\n    \r\n</form> -->"

/***/ }),

/***/ "../../../../../src/app/components/edit-companies/edit-companies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCompaniesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admins_service__ = __webpack_require__("../../../../../src/app/services/admins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_company__ = __webpack_require__("../../../../../src/app/classes/company.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditCompaniesComponent = /** @class */ (function () {
    function EditCompaniesComponent(service) {
        this.service = service;
        this.companies = [];
        this.company = new __WEBPACK_IMPORTED_MODULE_2__classes_company__["a" /* Company */]();
        this.company2 = new __WEBPACK_IMPORTED_MODULE_2__classes_company__["a" /* Company */]();
    }
    EditCompaniesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllCompanies().subscribe(function (companies) {
            // this.companies = [];
            // for(let company of companies){
            //   this.company = new Company(company);
            //   this.companies.push(this.company);
            // }
            _this.companies = companies;
        }, function (error) {
            alert('error getting companies...');
        });
    };
    EditCompaniesComponent.prototype.updateCompany = function () {
        var _this = this;
        var self = this;
        self.service.updateCompany(self.company).subscribe(function (success) {
            _this.service.getAllCompanies().subscribe(function (companies) { _this.companies = companies; }, function (error) { return console.log('error..'); });
        }, function (error) { return alert('error updating company!'); });
    };
    EditCompaniesComponent.prototype.deleteCompany = function () {
        var _this = this;
        var self = this;
        self.service.deleteCompany(self.company).subscribe(function (success) {
            _this.service.getAllCompanies().subscribe(function (companies) { _this.companies = companies; }, function (error) { return console.log('error..'); });
        }, function (error) { return alert('error deleting company!'); });
    };
    EditCompaniesComponent.prototype.setCompany = function (company) {
        this.company = company;
    };
    EditCompaniesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-companies',
            template: __webpack_require__("../../../../../src/app/components/edit-companies/edit-companies.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edit-companies/edit-companies.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admins_service__["a" /* AdminsService */]])
    ], EditCompaniesComponent);
    return EditCompaniesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/edit-customers/edit-customers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-customers/edit-customers.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\">\r\n        <table class=\"table table-stripped table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <th>ID</th>\r\n                    <th>customer name</th>\r\n                    <th>customer password</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr class=\"clickable-row\" data-toggle=\"modal\" data-target=\"#editCustomer\" *ngFor=\"let customer of customers\" (click)=\"setCustomer(customer)\">\r\n                    <td>{{ customer.id }}</td>\r\n                    <td>{{ customer.custName }}</td>\r\n                    <td>{{ customer.password }}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    \r\n    <div id=\"editCustomer\" class=\"modal fade\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h3>{{ customer.custName }}</h3>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n    \r\n                    <form (ngSubmit)=\"updateCustomer()\">\r\n                        \r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-lg-4\">\r\n                                <label for=\"pwd\">customer Password:</label>\r\n                                <input type=\"password\" class=\"form-control\" id=\"pwd\" [(ngModel)]=\"customer.password\" [ngModelOptions]=\"{standalone: true}\"\r\n                                    required>\r\n                            </div>\r\n                        </div>\r\n                        <button type=\"submit\" class=\"btn btn-default\">Update customer</button>\r\n                    </form>\r\n                    <hr>\r\n                    <button class=\"btn btn-danger btn-lg\" (click)=\"deleteCustomer()\">Delete customer!?!?</button>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n    \r\n    </div>\r\n    "

/***/ }),

/***/ "../../../../../src/app/components/edit-customers/edit-customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCustomersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_customer__ = __webpack_require__("../../../../../src/app/classes/customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_admins_service__ = __webpack_require__("../../../../../src/app/services/admins.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditCustomersComponent = /** @class */ (function () {
    function EditCustomersComponent(service) {
        this.service = service;
        this.customer = new __WEBPACK_IMPORTED_MODULE_0__classes_customer__["a" /* Customer */]();
        this.customer2 = new __WEBPACK_IMPORTED_MODULE_0__classes_customer__["a" /* Customer */]();
        this.customers = [];
    }
    EditCustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllCustomers().subscribe(function (customers) {
            _this.customers = customers;
        }, function (error) {
            alert('error getting customers...');
        });
    };
    EditCustomersComponent.prototype.updateCustomer = function () {
        var _this = this;
        var self = this;
        self.service.updateCustomer(self.customer).subscribe(function (success) {
            _this.service.getAllCustomers().subscribe(function (customers) { _this.customers = customers; }, function (error) { return console.log('error..'); });
        }, function (error) { return alert('error updating customer!'); });
    };
    EditCustomersComponent.prototype.deleteCustomer = function () {
        var _this = this;
        var self = this;
        self.service.deleteCustomer(self.customer).subscribe(function (success) {
            _this.service.getAllCustomers().subscribe(function (customers) { _this.customers = customers; }, function (error) { return console.log('error..'); });
        }, function (error) { return alert('error deleting customer!'); });
    };
    EditCustomersComponent.prototype.setCustomer = function (customer) {
        this.customer = customer;
    };
    EditCustomersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-edit-customers',
            template: __webpack_require__("../../../../../src/app/components/edit-customers/edit-customers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edit-customers/edit-customers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_admins_service__["a" /* AdminsService */]])
    ], EditCustomersComponent);
    return EditCustomersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/get-all-companies/get-all-companies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/get-all-companies/get-all-companies.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<button type=\"submit\"  (click)=\"getAllCompanies()\">Get all companies</button>  \n\n  <table border=\"1\">\n<tr>\n  <th>ID</th>\n  <th>company name</th>\n  <th>password</th>\n  <th>email</th>\n</tr>\n<tr *ngFor =\"let c of companies\">\n  <td>{{c.id}}</td>\n  <td>{{c.companyName}}</td>\n  <td>{{c.password}}</td>\n  <td>{{c.email}}</td>\n</tr>\n  </table>\n"

/***/ }),

/***/ "../../../../../src/app/components/get-all-companies/get-all-companies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAllCompaniesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_admins_service__ = __webpack_require__("../../../../../src/app/services/admins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetAllCompaniesComponent = /** @class */ (function () {
    function GetAllCompaniesComponent(service) {
        this.service = service;
        this.companies = new Array;
    }
    GetAllCompaniesComponent.prototype.ngOnInit = function () {
    };
    GetAllCompaniesComponent.prototype.getAllCompanies = function () {
        var self = this;
        self.service.getAllCompanies().subscribe(function (data) { return self.companies = data; });
    };
    GetAllCompaniesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-get-all-companies',
            template: __webpack_require__("../../../../../src/app/components/get-all-companies/get-all-companies.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/get-all-companies/get-all-companies.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_admins_service__["a" /* AdminsService */]])
    ], GetAllCompaniesComponent);
    return GetAllCompaniesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/getallcustomers/getallcustomers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/getallcustomers/getallcustomers.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<button type=\"submit\"  (click)=\"getAllCustomers()\">Get all customers</button>  \n\n  <table border=\"1\">\n<tr>\n  <th>ID</th>\n  <th>Customer name</th>\n  <th>password</th>\n</tr>\n<tr *ngFor =\"let c of customers\">\n  <td>{{c.id}}</td>\n  <td>{{c.custName}}</td>\n  <td>{{c.password}}</td>\n</tr>\n  </table>\n"

/***/ }),

/***/ "../../../../../src/app/components/getallcustomers/getallcustomers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetallcustomersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admins_service__ = __webpack_require__("../../../../../src/app/services/admins.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetallcustomersComponent = /** @class */ (function () {
    function GetallcustomersComponent(service) {
        this.service = service;
        this.customers = new Array;
    }
    GetallcustomersComponent.prototype.ngOnInit = function () {
    };
    GetallcustomersComponent.prototype.getAllCustomers = function () {
        var self = this;
        self.service.getAllCustomers().subscribe(function (data) { return self.customers = data; });
    };
    GetallcustomersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-getallcustomers',
            template: __webpack_require__("../../../../../src/app/components/getallcustomers/getallcustomers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/getallcustomers/getallcustomers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admins_service__["a" /* AdminsService */]])
    ], GetallcustomersComponent);
    return GetallcustomersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/getcompany/getcompany.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/getcompany/getcompany.component.html":
/***/ (function(module, exports) {

module.exports = "\n  \n\nID: <input name=\"numberTxt\" type=\"number\" [(ngModel)]= \"id\"/>\n  <button type=\"submit\"  (click)=\"getCompany()\">Get Company</button>  \n\n  <table >\n    <thead>\n      <tr>\n        <th>Company ID</th>\n        <th>Company Name</th>\n        <th>Company Password</th>\n        <th>Company Email</th>\n    </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>{{company.id}}</td>\n        <td>{{company.compName}}</td>\n        <td>{{company.password}}</td>\n        <td>{{company.email}}</td>\n    </tbody>\n  </table>\n  \n\n"

/***/ }),

/***/ "../../../../../src/app/components/getcompany/getcompany.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetcompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_company__ = __webpack_require__("../../../../../src/app/classes/company.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_admins_service__ = __webpack_require__("../../../../../src/app/services/admins.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetcompanyComponent = /** @class */ (function () {
    function GetcompanyComponent(service) {
        this.service = service;
        this.company = new __WEBPACK_IMPORTED_MODULE_1__classes_company__["a" /* Company */]();
        this.company2 = new __WEBPACK_IMPORTED_MODULE_1__classes_company__["a" /* Company */]();
        this.id = 0;
    }
    GetcompanyComponent.prototype.ngOnInit = function () {
    };
    GetcompanyComponent.prototype.getCompany = function () {
        var self = this;
        self.service.getCompany(self.id).subscribe(function (data) { return self.company = data; });
    };
    GetcompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-getcompany',
            template: __webpack_require__("../../../../../src/app/components/getcompany/getcompany.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/getcompany/getcompany.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_admins_service__["a" /* AdminsService */]])
    ], GetcompanyComponent);
    return GetcompanyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/getcustomer/getcustomer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/getcustomer/getcustomer.component.html":
/***/ (function(module, exports) {

module.exports = "ID: <input name=\"numberTxt\" type=\"number\" [(ngModel)]= \"id\"/>\n  <button type=\"submit\"  (click)=\"getCustomer()\">Get customer</button>  \n\n  <table >\n    <thead>\n      <tr>\n        <th>customer ID</th>\n        <th>customer Name</th>\n        <th>customer Password</th>\n        \n    </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>{{customer.id}}</td>\n        <td>{{customer.custName}}</td>\n        <td>{{customer.password}}</td>\n        \n    </tbody>\n  </table>\n  \n\n"

/***/ }),

/***/ "../../../../../src/app/components/getcustomer/getcustomer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetcustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_admins_service__ = __webpack_require__("../../../../../src/app/services/admins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_customer__ = __webpack_require__("../../../../../src/app/classes/customer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetcustomerComponent = /** @class */ (function () {
    function GetcustomerComponent(service) {
        this.service = service;
        this.customer = new __WEBPACK_IMPORTED_MODULE_2__classes_customer__["a" /* Customer */]();
        this.id = 0;
    }
    GetcustomerComponent.prototype.getCustomer = function () {
        var self = this;
        self.service.getCustomer(self.id).subscribe(function (data) { return self.customer = data; });
    };
    GetcustomerComponent.prototype.ngOnInit = function () {
    };
    GetcustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-getcustomer',
            template: __webpack_require__("../../../../../src/app/components/getcustomer/getcustomer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/getcustomer/getcustomer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_admins_service__["a" /* AdminsService */]])
    ], GetcustomerComponent);
    return GetcustomerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navigator/navigator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigator/navigator.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n        aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\" routerLink=\"/welcome\">Admin</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Companies Actions\n            <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a href=\"#\" routerLink=\"/create-company\">Create Company</a>\n            </li>\n            <li>\n              <a href=\"#\" routerLink= \"/edit-companies\">Edit Companies</a>\n            </li>\n            <!--  -->\n          </ul>\n        </li>\n        <!-- another dropdown -->\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Customers Actions\n            <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a href=\"#\" routerLink=\"/create-customer\">Create Customer</a>\n            </li>\n            <li>\n              <a href=\"#\" routerLink= \"/edit-customers\">Edit Customers</a>\n            </li>\n          </ul>\n        </li>\n        <li><a href=\"#\" routerLink=\"/get-company\">Get Company</a></li>\n        <li><a href=\"#\" routerLink=\"/get-customer\">Get Customer</a></li>\n      </ul>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n            <button id=\"logout\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n                Logout\n                <span class=\"glyphicon glyphicon-off\"></span>\n            </button>\n        </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navigator/navigator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admins_service__ = __webpack_require__("../../../../../src/app/services/admins.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigatorComponent = /** @class */ (function () {
    function NavigatorComponent(service) {
        this.service = service;
    }
    NavigatorComponent.prototype.ngOnInit = function () {
    };
    NavigatorComponent.prototype.logout = function () {
        this.service.logout().subscribe(function (res) {
            console.log('bye bye .. :)');
        }, function (error) { console.log('something went wrong...'); });
        window.location.href = '/couponsSystemWeb/index.html';
    };
    NavigatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigator',
            template: __webpack_require__("../../../../../src/app/components/navigator/navigator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navigator/navigator.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admins_service__["a" /* AdminsService */]])
    ], NavigatorComponent);
    return NavigatorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.jumbotron {\r\n    \r\n    background-image: -webkit-gradient(linear,left top, left bottom,from(rgba(0, 0, 0, 0)),to(rgba(0, 0, 0, 0.3))),url('http://xinfoz.com/images/home/Welcomeadmin.png');\r\n    \r\n    background-image: linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.3)),url('http://xinfoz.com/images/home/Welcomeadmin.png');\r\n    background-size: cover;\r\n    background: contain;\r\n    width: 100%; \r\n    height: 100%; \r\n    max-width:900px;  \r\n    \r\n}\r\n\r\n.container{ \r\n    height: 81.8vh;\r\n}\r\n\r\n.jumbotron h1 {\r\n    color: rgb(65, 85, 87);\r\n}\r\n\r\n@media only screen and (max-width: 370px) and (max-height: 640px) {\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.container {\r\n   width: 100%;\r\n   height: 79vh;\r\n   \r\n}\r\n\r\n.jumbotron {\r\n    width: 100%;\r\n    \r\n    height: 100vh;\r\n    border-radius: 0px;\r\n   margin-top: 0;\r\n    \r\n}\r\n.jumbotron h1 {\r\n    padding: 100px 0px 30px 0px;\r\n}\r\n\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div class=\"jumbotron\">\n        </div>\n      </div>\n \n\n"

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/app/components/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/admins.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminsService = /** @class */ (function () {
    function AdminsService(http) {
        this.http = http;
    }
    AdminsService.prototype.errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    AdminsService.prototype.getCompany = function (compId) {
        var self = this;
        return this.http.get('./getcompany/' + compId)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    AdminsService.prototype.getAllCompanies = function () {
        var self = this;
        return this.http.get('./getallcompanies')
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    AdminsService.prototype.createCompany = function (company) {
        var self = this;
        return self.http.post("./createcompany", company)
            .catch(this.errorHandler);
    };
    AdminsService.prototype.updateCompany = function (company) {
        var self = this;
        return self.http.put("./updatecompany", company)
            .catch(this.errorHandler);
    };
    AdminsService.prototype.deleteCompany = function (company) {
        var self = this;
        return self.http.delete("./deletecompany", { body: company })
            .catch(this.errorHandler);
    };
    AdminsService.prototype.getCustomer = function (id) {
        var self = this;
        return this.http.get("./getcustomer/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    AdminsService.prototype.getAllCustomers = function () {
        var self = this;
        return this.http.get('./getallcustomer')
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    AdminsService.prototype.createCustomer = function (customer) {
        var self = this;
        return self.http.post("./createcustomer", customer)
            .catch(this.errorHandler);
    };
    AdminsService.prototype.updateCustomer = function (customer) {
        var self = this;
        return self.http.put("./updatecustomer", customer)
            .catch(this.errorHandler);
    };
    AdminsService.prototype.deleteCustomer = function (customer) {
        var self = this;
        return self.http.delete("./deletecustomer", { body: customer })
            .catch(this.errorHandler);
    };
    AdminsService.prototype.logout = function () {
        var self = this;
        return self.http.get('./adminlogout')
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    AdminsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AdminsService);
    return AdminsService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map