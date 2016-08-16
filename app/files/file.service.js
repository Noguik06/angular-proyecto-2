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
var FileService = (function () {
    function FileService(http) {
        this.http = http;
    }
    //Metodo de prueba para subir archivos
    FileService.prototype.upload_file = function (file) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                }
                else {
                }
            }
        };
        xhr.open('POST', 'http://localhost:44111/fileResource/uploadFileServlet', true);
        var formData = new FormData();
        formData.append("fileName", file, file.nombre);
        xhr.send(formData);
    };
    //Metodo para traer todos los usuarios registrados
    FileService.prototype.getFiles = function () {
        var authHeader = new http_2.Headers();
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:44111/fileResource/showFiles', { headers: headers
        }).map(this.extractData)
            .catch(this.handleError);
    };
    //Metodo to manipulate data
    FileService.prototype.extractData = function (res) {
        var body = res.json();
        return body.archivos || {};
    };
    //Metodo para extraer un solo dato
    FileService.prototype.extractDataOnly = function (res) {
        var body = res.json();
        return body;
    };
    //Metodo para manejar los errores
    FileService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = error.status ? "" + error.status : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    FileService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FileService);
    return FileService;
}());
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map