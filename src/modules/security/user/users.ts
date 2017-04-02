import {Component}  from "@angular/core";
import { Router } from "@angular/router";
import {UserService} from './../../security/_share/services/userService';

enum ItemViewMode {
    View=1,
    Edit =2,
}
@Component({
templateUrl: "src/modules/security/user/users.html"
})

export class Users{
    public selectedUser: any;
    public ViewMode:any = ItemViewMode;
    public users:Array<any>=[];
    public newItem:boolean = true;
    public router:Router; 
    constructor(userService: UserService,router:Router){
        let self= this;
        this.router = router;
        //this.users = userService.getUsers();
        userService.getUsers().subscribe(
            (users:any) => {self.users = users;}
        )
    }

    // public users:Array<any>= [
    //     {firstName:"Raj",lastName:"Ankathi",userName:"Raj Anakthi",avatar:"doraemon.jpg",mode:ItemViewMode.View},
    //     {firstName:"Raj",lastName:"Ankathi",userName:"Raj Anakthi2",avatar:"doraemon.jpg",mode:ItemViewMode.View},
    //     ];

    public onEditClicked(user:any){
        this.router.navigate(["users/",user.id])
    }
    public onQuickEditClicked(user:any){
        this.selectedUser = user;
    }

    public onSaveClicked(user:any){
        debugger;
        user.mode = ItemViewMode.View;
        user.firstName = user.currentVersion.firstName;
    }

    public cancelClicked(user:any){
        debugger;
        if(user == null){
            this.newItem = false;
        }
        else{
             user.mode = ItemViewMode.View;
            //this.userMode = this.ViewMode.View;  
            user.currentVersion = null;
        }
       
    }

    private clone(user:any){
        return JSON.parse(JSON.stringify(user));
    }
}
