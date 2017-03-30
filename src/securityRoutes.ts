import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { Users } from "./users";

let routes:Routes = [
    {
        path: "users",component: Users
    },
    {
        path:"",redirectTo:"users",pathMatch:"full"
    }
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class SecurityRoutes{

}