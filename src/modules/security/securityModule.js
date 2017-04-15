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
const http_1 = require("@angular/http");
const commonModule_1 = require("./../../modules/common/commonModule");
//import { DefaultPage } from "./../../defaultPage";
const securityRoutes_1 = require("./securityRoutes");
const users_1 = require("./user/users");
const editUser_1 = require("./user/editUser");
const userQuickEdit_1 = require("./_share/components/userQuickEdit");
// import {Page} from './../../page';
const userService_1 = require("./_share/services/userService");
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, commonModule_1.AppCommonModule, securityRoutes_1.SecurityRoutes],
        declarations: [users_1.Users, userQuickEdit_1.UserQuickEdit, editUser_1.EditUser],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        providers: [userService_1.UserService]
    })
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=securityModule.js.map