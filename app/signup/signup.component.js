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
var signup_service_1 = require("./signup.service");
var router_1 = require('@angular/router');
var common_1 = require("@angular/common");
/**
 * Created by juannoguera on 4/07/16.
 */
var SignUpComponent = (function () {
    function SignUpComponent(signUpService, router) {
        this.signUpService = signUpService;
        this.router = router;
        this.mode = 'Observable';
    }
    // ngOnInit() {
    //     this.getHeroes();
    // }
    SignUpComponent.prototype.signup = function (user_id, name, email, password) {
        var _this = this;
        this.signUpService.signUp(user_id, name, email, password)
            .subscribe(function (response) {
            _this.router.navigate(['/login']);
            _this.login_ = response;
            alert(response.message);
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    SignUpComponent.prototype.signup_app = function (user_id, name, email, password) {
        if (user_id.value.length != 0 && name.value.length != 0 && email.value.length != 0
            && password.value.length != 0) {
            this.signup(user_id.value, name.value, email.value, password.value);
        }
        else {
            alert('Tdodo los campos son necesarios');
        }
    };
    SignUpComponent.prototype.cancel = function () {
        this.router.navigate(['/login']);
    };
    SignUpComponent.prototype.goTo = function (source) {
        var link = ['/' + source];
        this.router.navigate(link);
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: 'hero-list',
            templateUrl: './app/signup/signup.html',
            styleUrls: ['./app/assets/css/bootstrap.css', './app/signup/css/signup.css'],
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            providers: [signup_service_1.SignUpService]
        }), 
        __metadata('design:paramtypes', [signup_service_1.SignUpService, router_1.Router])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=signup.component.js.map