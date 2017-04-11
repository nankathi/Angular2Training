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
const core_1 = require('@angular/core');
let FormButtonPrimary = class FormButtonPrimary {
    constructor() {
        this.cls = "btn-primary";
        this.onClicked = new core_1.EventEmitter();
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], FormButtonPrimary.prototype, "label", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], FormButtonPrimary.prototype, "onClicked", void 0);
FormButtonPrimary = __decorate([
    core_1.Component({
        selector: 'form-button-primary',
        template: `
                <button class="btn {{cls}}" (click)="onClicked.emit()" >{{label}}</button>  
                `
    }), 
    __metadata('design:paramtypes', [])
], FormButtonPrimary);
exports.FormButtonPrimary = FormButtonPrimary;
//# sourceMappingURL=formButtonPrimary.js.map