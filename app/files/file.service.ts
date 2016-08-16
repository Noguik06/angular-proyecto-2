import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import {User} from "../users/user";
import {ResponseService} from "../common/response";
import {File} from "./files";



@Injectable()
export class FileService {
    constructor (private http: Http) {}

    //Metodo de prueba para subir archivos
    upload_file(file : File){
        let xhr:XMLHttpRequest = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    //
                } else {
                    // reject(xhr.response);
                }
            }
        };
        xhr.open('POST', 'http://localhost:44111/fileResource/uploadFileServlet', true);
        let formData = new FormData();
        formData.append("fileName", file, file.nombre);
        xhr.send(formData);
    }

    //Metodo para traer todos los usuarios registrados
    getFiles():Observable<File[]>{
        var authHeader = new Headers();
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:44111/fileResource/showFiles', {headers
        }).map(this.extractData)
            .catch(this.handleError);
    }

    //Metodo to manipulate data
    private extractData(res: Response) {
        let body = res.json();
        return body.archivos || { };
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