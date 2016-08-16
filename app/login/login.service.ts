import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Login }           from '../login';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';



@Injectable()
export class LoginService {
    constructor (private http: Http) {}
    private heroesUrl = 'simon';  // URL to web API
    private baseUrl: string = 'http://localhost:44111/userResource/loginUser';

    //Traer los heroes del server
    getHeroes (cedula, password): Observable<Login> {

        var authHeader = new Headers();

        // alert('olotas'
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let body = JSON.stringify({ user_id: cedula, password: password, imei:'000', clientse: '000' });

        return this.http.post('http://localhost:44111/userResource/loginUser', {
            body, headers
        }).map(this.extractData)
            .catch(this.handleError);
    }

    //Metho to manipulate data
    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    //Metho to hanlde errors
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}