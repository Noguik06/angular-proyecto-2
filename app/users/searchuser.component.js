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
var user_service_1 = require("./user.service");
var router_1 = require('@angular/router');
var common_1 = require("@angular/common");
var user_1 = require("../users/user");
var customerEmailFilter_1 = require("./customerEmailFilter");
/**
 * Created by juannoguera on 4/07/16.
 */
var SearchUserComponent = (function () {
    function SearchUserComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.nombre = '';
        this.mode = 'Observable';
    }
    //Metodo para traer los usuarios
    SearchUserComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (response) {
            _this.users = response;
        }, function (error) {
            alert('hay un error');
            alert(error.text());
            console.log(error.text());
        });
    };
    //En el metodo inicial llamamos al metodo que me trae los usuarios
    SearchUserComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("id_token") == null) {
            this.router.navigate(['/login']);
        }
        else {
            this.userSearchUser = new user_1.User();
            this.userSearchUser.nombre = localStorage.getItem("name");
            this.userSearchUser.tipo = localStorage.getItem("type_user");
            this.getUsers();
        }
    };
    //metodo para ir a editar cada usuario
    SearchUserComponent.prototype.goToEditUser = function (user) {
        var link = ['/editUsers', user.idusuario];
        this.router.navigate(link);
    };
    SearchUserComponent.prototype.goTo = function (source) {
        var link = ['/' + source];
        this.router.navigate(link);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchUserComponent.prototype, "term", void 0);
    SearchUserComponent = __decorate([
        core_1.Component({
            selector: 'serchUser-component',
            templateUrl: './app/users/searchuser.html',
            styleUrls: ['./app/common/bootstrap/dist/css/bootstrap.min.css',
                './app/common/metisMenu/dist/metisMenu.min.css',
                './app/theme/dist/css/sb-admin-2.css',
                './app/theme/bower_components/font-awesome/css/font-awesome.min.css'],
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            pipes: [customerEmailFilter_1.CustomerEmailFilter],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], SearchUserComponent);
    return SearchUserComponent;
}());
exports.SearchUserComponent = SearchUserComponent;
//# sourceMappingURL=searchuser.component.js.map