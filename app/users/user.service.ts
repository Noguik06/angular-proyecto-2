import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import {User} from "../users/user";
import {ResponseService} from "../common/response";



@Injectable()
export class UserService {
    constructor (private http: Http) {}

    //Metodo para traer todos los usuarios registrados
    getUsers():Observable<User[]>{
        var authHeader = new Headers();
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:44111/userResource/getRegisteredUsers/'+null, {headers
        }).map(this.extractData)
            .catch(this.handleError);
    }

    //Metodo para traer un usuario especifico por la cedula
    getUserByCedula(user_id : String):Observable<User[]>{
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let body = JSON.stringify({ user_id: user_id});
        return this.http.get('http://localhost:44111/userResource/getRegisteredUsers/'+user_id, {body, headers
        }).map(this.extractData)
            .catch(this.handleError);
    }

    //Metodo para actualizar la informacion de un usuario
    updateUser(idusuario, cedula, name, email, password):Observable<ResponseService>{
        var authHeader = new Headers();
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let body = JSON.stringify({ idusuario: idusuario, cedula : cedula, name : name, email : email, password : password});
        return this.http.put('http://localhost:44111/userResource/updateUser', {body, headers
        }).map(this.extractDataOnly)
          .catch(this.handleError);
    }


    //Metodo to manipulate data
    private extractData(res: Response) {
        let body = res.json();
        return body.usuarios || { };
    }


    //Metodo para extraer un solo dato
    private extractDataOnly(res: Response) {
        let body = res.json();
        return body;
    }


    //Metodo para manejar los errores
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg =
            error.status ? `${error.status}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}