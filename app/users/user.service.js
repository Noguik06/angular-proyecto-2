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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var http_2 = require('@angular/http');
require('rxjs/Rx');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    //Metodo para traer todos los usuarios registrados
    UserService.prototype.getUsers = function () {
        var authHeader = new http_2.Headers();
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:44111/userResource/getRegisteredUsers/' + null, { headers: headers
        }).map(this.extractData)
            .catch(this.handleError);
    };
    //Metodo para traer un usuario especifico por la cedula
    UserService.prototype.getUserByCedula = function (user_id) {
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify({ user_id: user_id });
        return this.http.get('http://localhost:44111/userResource/getRegisteredUsers/' + user_id, { body: body, headers: headers
        }).map(this.extractData)
            .catch(this.handleError);
    };
    //Metodo para actualizar la informacion de un usuario
    UserService.prototype.updateUser = function (idusuario, cedula, name, email, password) {
        var authHeader = new http_2.Headers();
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify({ idusuario: idusuario, cedula: cedula, name: name, email: email, password: password });
        return this.http.put('http://localhost:44111/userResource/updateUser', { body: body, headers: headers
        }).map(this.extractDataOnly)
            .catch(this.handleError);
    };
    //Metodo to manipulate data
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        return body.usuarios || {};
    };
    //Metodo para extraer un solo dato
    UserService.prototype.extractDataOnly = function (res) {
        var body = res.json();
        return body;
    };
    //Metodo para manejar los errores
    UserService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = error.status ? "" + error.status : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map