import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {HttpModule} from '@angular/http';
import { DefaultPage } from "./defaultPage";
import { SecurityRoutes } from "./securityRoutes";
import { Users } from "./users";
import { UserQuickEdit } from "./userQuickEdit";
import {Page} from './page';
import {UserService} from './userService';


@NgModule({
    imports: [BrowserModule, FormsModule,HttpModule,SecurityRoutes],
    declarations: [DefaultPage,Users,UserQuickEdit,Page],
    bootstrap: [DefaultPage],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    providers:[UserService]
})
export class SecurityModule { }
