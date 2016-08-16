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
 * Created by juannoguera on 26/07/16.
 */
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
/**
 * Created by juannoguera on 4/07/16.
 */
var Navigate = (function () {
    function Navigate() {
    }
    Navigate = __decorate([
        core_1.Component({
            selector: 'navigate-list',
            template: "<nav>\n      <a [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">Dashboard</a>\n      <a [routerLink]=\"['/heroes']\" routerLinkActive=\"active\">Heroes</a>\n      <a *ngIf=\"tokenJWT == null\" [routerLink]=\"['/login']\" routerLinkActive=\"active\">Login</a>\n      <a [routerLink]=\"['/home']\" routerLinkActive=\"active\">Home</a>\n      <a [routerLink]=\"['/signup']\" routerLinkActive=\"active\">Registro</a>\n      <a [routerLink]=\"['/searchUsers']\" routerLinkActive=\"active\">Buscar Usuarios</a>\n      <a [routerLink]=\"['/upload']\" routerLinkActive=\"active\">Subir Archivos</a>\n    </nav>",
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Navigate);
    return Navigate;
}());
exports.Navigate = Navigate;
//# sourceMappingURL=navigate.js.map