"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var login_service_1 = require("./login.service");
var router_1 = require('@angular/router');
var common_1 = require("@angular/common");
/**
 * Created by juannoguera on 4/07/16.
 */
var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.mode = 'Observable';
    }
    // ngOnInit() {
    //     this.getHeroes();
    // }
    LoginComponent.prototype.getHeroes = function (cedula, password) {
        var _this = this;
        this.loginService.getHeroes(cedula, password)
            .debounceTime(300)
            .subscribe(function (response) {
            localStorage.setItem('id_token', response.token);
            localStorage.setItem('name', response.usuario.nombre);
            localStorage.setItem('type_user', response.usuario.tipo);
            _this.login_ = response;
            _this.router.navigate(['/home']);
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    LoginComponent.prototype.login_app = function (cedula, password) {
        this.getHeroes(cedula.value, password.value);
    };
    LoginComponent.prototype.signup_app = function () {
        this.router.navigate(['/signup']);
    };
    LoginComponent.prototype.goTo = function (source) {
        var link = ['/' + source];
        this.router.navigate(link);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'hero-list',
            templateUrl: './app/login/login.html',
            styleUrls: ['./app/assets/css/bootstrap.css', './app/login/css/login.css'],
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map