import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {HttpModule} from '@angular/http';
import {AppCommonModule} from './../../modules/common/commonModule';
//import { DefaultPage } from "./../../defaultPage";
import { SecurityRoutes } from "./securityRoutes";
import { Users } from "./user/users";
import { EditUser } from "./user/editUser";
import { UserQuickEdit } from "./_share/components/userQuickEdit";
// import {Page} from './../../page';
import {UserService} from './_share/services/userService';


@NgModule({
    imports: [CommonModule, FormsModule,HttpModule,AppCommonModule,SecurityRoutes],
    declarations: [Users,UserQuickEdit,EditUser],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    providers:[UserService]
})
export class SecurityModule { }
