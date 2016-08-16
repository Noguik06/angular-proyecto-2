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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_1 = require("../users/user");
/**
 * Created by juannoguera on 4/07/16.
 */
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("id_token") == null) {
            this.router.navigate(['/login']);
        }
        else {
            this.userHome = new user_1.User();
            this.userHome.nombre = localStorage.getItem("name");
            this.userHome.tipo = localStorage.getItem("type_user");
        }
    };
    HomeComponent.prototype.goTo = function (source) {
        var link = ['/' + source];
        this.router.navigate(link);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            styleUrls: ['./app/common/bootstrap/dist/css/bootstrap.min.css',
                './app/common/metisMenu/dist/metisMenu.min.css',
                './app/home/dist/css/sb-admin-2.css',
                './app/home/bower_components/font-awesome/css/font-awesome.min.css'],
            templateUrl: './app/home/home.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map