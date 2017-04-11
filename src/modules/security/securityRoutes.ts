import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { Users } from "./user/users";
import { EditUser } from "./user/editUser";

let routes:Routes = [
    {path:"",redirectTo:"users",pathMatch:"full"},
    {path: "users",component: Users },
    {path:'users/:userId',component:EditUser},
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class SecurityRoutes{

}