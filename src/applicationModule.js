"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const defaultPage_1 = require("../resources/theme/gentella/defaultPage");
//import routeHelper from "../src/modules/common/helpers/routeHelper";
const common_1 = require("@app/common");
// let routes: Routes= [
//     {path:'',redirectTo:'security',pathMatch:'full'},
//     {path:'security',loadChildren:'src/modules/security/securityModule#SecurityModule'}
// ]
const ModuleNames = {
    Security: "security"
};
let modules = [ModuleNames.Security];
let routes = common_1.default.getRootRoutes(modules);
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(routes)],
        exports: [http_1.HttpModule],
        declarations: [defaultPage_1.DefaultPage],
        bootstrap: [defaultPage_1.DefaultPage],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=applicationModule.js.map