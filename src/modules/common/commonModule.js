"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const page_1 = require("./components/page");
const formInput_1 = require("./components/form/formInput");
const horizontalForm_1 = require("./components/form/horizontalForm");
const formButtonPrimary_1 = require("./components/form/formButtonPrimary");
let AppCommonModule = class AppCommonModule {
};
AppCommonModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule],
        declarations: [page_1.Page, formInput_1.FormInput, horizontalForm_1.HorizontalForm, formButtonPrimary_1.FormButtonPrimary],
        exports: [page_1.Page, formInput_1.FormInput, horizontalForm_1.HorizontalForm, formButtonPrimary_1.FormButtonPrimary]
    })
], AppCommonModule);
exports.AppCommonModule = AppCommonModule;
//# sourceMappingURL=commonModule.js.map