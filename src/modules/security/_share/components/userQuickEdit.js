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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let UserQuickEdit = class UserQuickEdit {
    constructor() {
        this.onChanged123 = new core_1.EventEmitter();
        //@Output() onChanged:EventEmitter<string> = new EventEmitter<string>();
        this.firstNameChange = new core_1.EventEmitter();
    }
    //   public onNameChanged(newValue:string){
    //     this.onChanged.emit(this.firstName);
    //   }
    onNameChanged(newValue) {
        this.firstNameChange.emit(this.firstName);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UserQuickEdit.prototype, "firstName", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], UserQuickEdit.prototype, "onChanged123", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], UserQuickEdit.prototype, "firstNameChange", void 0);
UserQuickEdit = __decorate([
    core_1.Component({
        selector: 'user-quick-edit',
        templateUrl: 'src/modules/security/_share/components/UserQuickEdit.html'
    })
], UserQuickEdit);
exports.UserQuickEdit = UserQuickEdit;
//# sourceMappingURL=userQuickEdit.js.map