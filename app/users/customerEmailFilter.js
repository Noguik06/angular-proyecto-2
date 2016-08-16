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
 * Created by juannoguera on 23/07/16.
 */
var core_1 = require('@angular/core');
var CustomerEmailFilter = (function () {
    function CustomerEmailFilter() {
    }
    CustomerEmailFilter.prototype.transform = function (value, teto) {
        if (value != null) {
            return value.filter(function (item) { return item.nombre.toLocaleLowerCase().startsWith(teto.toLowerCase())
                || item.email.toLocaleLowerCase().startsWith(teto.toLowerCase())
                || item.cedula.toLocaleLowerCase().startsWith(teto.toLowerCase()); });
        }
        return value;
    };
    CustomerEmailFilter = __decorate([
        core_1.Pipe({
            name: 'customerEmailFilter'
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CustomerEmailFilter);
    return CustomerEmailFilter;
}());
exports.CustomerEmailFilter = CustomerEmailFilter;
//# sourceMappingURL=customerEmailFilter.js.map