import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {HttpModule} from '@angular/http';
import {CommonModule} from './../../modules/common/commonModule';
import { DefaultPage } from "./../../defaultPage";
import { SecurityRoutes } from "./securityRoutes";
import { Users } from "./user/users";
import { EditUser } from "./user/editUser";
import { UserQuickEdit } from "./_share/components/userQuickEdit";
// import {Page} from './../../page';
import {UserService} from './_share/services/userService';


@NgModule({
    imports: [BrowserModule, FormsModule,HttpModule,SecurityRoutes,CommonModule],
    declarations: [DefaultPage,Users,UserQuickEdit,EditUser],
    bootstrap: [DefaultPage],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    providers:[UserService]
})
export class SecurityModule { }
