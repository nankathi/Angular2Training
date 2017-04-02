import {Http,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private http:Http;
    constructor(http:Http){
        this.http = http;
    }
    public getUser(userId:any){
        let url = 'api/user_1.json';
        return this.http.get(url).map(
            (response:Response) =>{
                return response.json();
            }
        );
    }
    public getUsers(){
        let url = 'api/users.json';
        return this.http.get(url).map(
            (response: Response) => {
                return response.json();
            }
        )
    }
}