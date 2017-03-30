import {Http,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private http:Http;
    constructor(http:Http){
        this.http = http;
    }
    public getUsers(){
        let url = 'api/users.json';
        return this.http.get(url).map(
            (response: Response) => {
                return response.json();
            }
        )
        // return  [
        // {firstName:"Raj",lastName:"Ankathi",userName:"Raj Anakthi",avatar:"doraemon.jpg",mode:1},
        // {firstName:"Raj",lastName:"Ankathi",userName:"Raj Anakthi2",avatar:"doraemon.jpg",mode:2},
        // ];
    }
}