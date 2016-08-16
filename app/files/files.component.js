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
/**
 * Created by juannoguera on 24/07/16.
 */
var core_1 = require("@angular/core");
var file_service_1 = require("./file.service");
var router_1 = require("@angular/router");
var user_1 = require("../users/user");
var File_Upload = (function () {
    function File_Upload(fileService, router) {
        this.fileService = fileService;
        this.router = router;
        this.options = {
            url: 'http://ng2-uploader.com:10050/upload'
        };
        this.basicProgress = 0;
        this.multipleProgress = 0;
        this.multipleResp = [];
        this.dropProgress = 0;
        this.dropResp = [];
        this.zone = new core_1.NgZone({ enableLongStackTrace: false });
    }
    File_Upload.prototype.handleBasicUpload = function (data) {
        var _this = this;
        this.basicResp = data;
        this.zone.run(function () {
            _this.basicProgress = data.progress.percent;
        });
    };
    File_Upload.prototype.handleMultipleUpload = function (data) {
        var _this = this;
        var index = this.multipleResp.findIndex(function (x) { return x.id === data.id; });
        if (index === -1) {
            this.multipleResp.push(data);
        }
        else {
            this.zone.run(function () {
                _this.multipleResp[index] = data;
            });
        }
        var total = 0, uploaded = 0;
        this.multipleResp.forEach(function (resp) {
            total += resp.progress.total;
            uploaded += resp.progress.loaded;
        });
        this.multipleProgress = Math.floor(uploaded / (total / 100));
    };
    File_Upload.prototype.handleDropUpload = function (data) {
        var _this = this;
        var index = this.dropResp.findIndex(function (x) { return x.id === data.id; });
        if (index === -1) {
            this.dropResp.push(data);
        }
        else {
            this.zone.run(function () {
                _this.dropResp[index] = data;
            });
        }
        var total = 0, uploaded = 0;
        this.dropResp.forEach(function (resp) {
            total += resp.progress.total;
            uploaded += resp.progress.loaded;
        });
        this.dropProgress = Math.floor(uploaded / (total / 100));
    };
    //Metodo encargado de cuando se carga el archivo lo guarde en la varibale myfile
    File_Upload.prototype.fileChangeEvent = function (fileInput) {
        this.myfile = fileInput.target.files[0];
    };
    //Metodo encargado de subir los archivos
    File_Upload.prototype.upload_file = function () {
        this.fileService.upload_file(this.myfile);
        location.reload();
    };
    //Metodo para traer los usuarios
    File_Upload.prototype.getFiles = function () {
        var _this = this;
        this.fileService.getFiles()
            .subscribe(function (response) {
            _this.files = response;
        }, function (error) {
            alert('hay un error');
            alert(error.text());
            console.log(error.text());
        });
    };
    //En el metodo inicial llamamos al metodo que me trae los usuarios
    File_Upload.prototype.ngOnInit = function () {
        if (localStorage.getItem("id_token") == null) {
            this.router.navigate(['/login']);
        }
        else {
            this.userComponent = new user_1.User();
            this.userComponent.nombre = localStorage.getItem("name");
            this.userComponent.tipo = localStorage.getItem("type_user");
            this.getFiles();
        }
    };
    //Metodo para ir de un link a otro
    File_Upload.prototype.goTo = function (source) {
        var link = ['/' + source];
        this.router.navigate(link);
    };
    File_Upload = __decorate([
        core_1.Component({
            selector: 'demo',
            templateUrl: './app/files/files.html',
            styleUrls: ['./app/common/bootstrap/dist/css/bootstrap.min.css',
                './app/common/metisMenu/dist/metisMenu.min.css',
                './app/home/dist/css/sb-admin-2.css',
                './app/home/bower_components/font-awesome/css/font-awesome.min.css'],
            providers: [file_service_1.FileService],
            pipes: []
        }), 
        __metadata('design:paramtypes', [file_service_1.FileService, router_1.Router])
    ], File_Upload);
    return File_Upload;
}());
exports.File_Upload = File_Upload;
//# sourceMappingURL=files.component.js.map