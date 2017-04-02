import {Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {UserService} from './../_share/services/userService';
@Component({
    templateUrl:'src/modules/security/user/editUser.html',
    //providers:[UserService]
})

export class EditUser{
    public user:any= {};

    constructor(userService: UserService,activatedRoute:ActivatedRoute){
        let userId = activatedRoute.params["value"].userId;
        let self = this;
        userService.getUser(userId).subscribe(
            (user:any)=>{
                self.user = user;
            });
    }
}