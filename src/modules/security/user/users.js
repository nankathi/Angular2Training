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
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const userService_1 = require('./../../security/_share/services/userService');
var ItemViewMode;
(function (ItemViewMode) {
    ItemViewMode[ItemViewMode["View"] = 1] = "View";
    ItemViewMode[ItemViewMode["Edit"] = 2] = "Edit";
})(ItemViewMode || (ItemViewMode = {}));
let Users = class Users {
    constructor(userService, router) {
        this.ViewMode = ItemViewMode;
        this.users = [];
        this.newItem = true;
        let self = this;
        this.router = router;
        //this.users = userService.getUsers();
        userService.getUsers().subscribe((users) => { self.users = users; });
    }
    // public users:Array<any>= [
    //     {firstName:"Raj",lastName:"Ankathi",userName:"Raj Anakthi",avatar:"doraemon.jpg",mode:ItemViewMode.View},
    //     {firstName:"Raj",lastName:"Ankathi",userName:"Raj Anakthi2",avatar:"doraemon.jpg",mode:ItemViewMode.View},
    //     ];
    onEditClicked(user) {
        this.router.navigate(["users/", user.id]);
    }
    onQuickEditClicked(user) {
        this.selectedUser = user;
    }
    onSaveClicked(user) {
        debugger;
        user.mode = ItemViewMode.View;
        user.firstName = user.currentVersion.firstName;
    }
    cancelClicked(user) {
        debugger;
        if (user == null) {
            this.newItem = false;
        }
        else {
            user.mode = ItemViewMode.View;
            //this.userMode = this.ViewMode.View;  
            user.currentVersion = null;
        }
    }
    clone(user) {
        return JSON.parse(JSON.stringify(user));
    }
};
Users = __decorate([
    core_1.Component({
        templateUrl: "src/modules/security/user/users.html"
    }), 
    __metadata('design:paramtypes', [userService_1.UserService, router_1.Router])
], Users);
exports.Users = Users;
//# sourceMappingURL=users.js.map