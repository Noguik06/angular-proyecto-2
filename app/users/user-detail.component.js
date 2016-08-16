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
var EditUserComponent = (function () {
    function EditUserComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.nombre = '';
        this.mode = 'Observable';
    }
    EditUserComponent.prototype.getUsers = function () {
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
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("id_token") == null) {
            this.router.navigate(['/login']);
        }
        else {
            this.userComponent = new user_1.User();
            this.userComponent.nombre = localStorage.getItem("name");
            this.userComponent.tipo = localStorage.getItem("type_user");
            this.sub = this.route.params.subscribe(function (params) {
                if (params['cedula'] !== undefined) {
                    var cedula = params['cedula'];
                    _this.userService.getUserByCedula(cedula)
                        .subscribe(function (response) {
                        _this.users = response;
                        _this.user = _this.users[0];
                    }, function (error) {
                        alert('hay un error');
                        alert(error.text());
                        console.log(error.text());
                    });
                }
                else {
                }
            });
        }
    };
    //Metodo para actualizar un usuario
    EditUserComponent.prototype.update_user = function (password) {
        var _this = this;
        this.userService.updateUser(this.user.idusuario, this.user.cedula, this.user.nombre, this.user.email, password)
            .subscribe(function (response) {
            _this.responseService = response;
            alert(_this.responseService.message);
            _this.router.navigate(['/searchUsers']);
        }, function (error) {
            if (error == '401') {
                alert("No se ha podido realizar la actualización. Ya existe otro usuario con esa cedula");
            }
            else {
                alert("Ha ocurrido un error actualizando el usuario");
            }
            console.log(error.text());
        });
    };
    EditUserComponent.prototype.goTo = function (source) {
        var link = ['/' + source];
        this.router.navigate(link);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditUserComponent.prototype, "term", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], EditUserComponent.prototype, "user", void 0);
    EditUserComponent = __decorate([
        core_1.Component({
            selector: 'user-detail-component',
            templateUrl: './app/users/userEdit.html',
            styleUrls: ['./app/common/bootstrap/dist/css/bootstrap.min.css',
                './app/common/metisMenu/dist/metisMenu.min.css',
                './app/theme/dist/css/sb-admin-2.css',
                './app/theme/bower_components/font-awesome/css/font-awesome.min.css'],
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            pipes: [customerEmailFilter_1.CustomerEmailFilter],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, router_1.Router])
    ], EditUserComponent);
    return EditUserComponent;
}());
exports.EditUserComponent = EditUserComponent;
//# sourceMappingURL=user-detail.component.js.map