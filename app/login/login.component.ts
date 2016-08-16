import {OnInit, Component} from "@angular/core";
import {LoginService} from "./login.service";
import {Login} from "../login";
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Jsonp, URLSearchParams } from '@angular/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";

/**
 * Created by juannoguera on 4/07/16.
 */

@Component({
    selector: 'hero-list',
    templateUrl: './app/login/login.html',
    styleUrls: ['./app/assets/css/bootstrap.css', './app/login/css/login.css'],
    directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
    providers: [ LoginService ]
})

export class LoginComponent {
    errorMessage: string;
    login_: Login;
    mode = 'Observable';

    constructor (private loginService: LoginService, public router: Router) {}

    // ngOnInit() {
    //     this.getHeroes();
    // }

    getHeroes(cedula, password) {
        this.loginService.getHeroes(cedula, password)
            .debounceTime(300)
            .subscribe(
                response => {
                    localStorage.setItem('id_token', response.token);
                    localStorage.setItem('name', response.usuario.nombre);
                    localStorage.setItem('type_user', response.usuario.tipo);
                    this.login_ = response;
                    this.router.navigate(['/home']);
                },
                error => {
                    alert(error.text());
                    console.log(error.text());
                }
                /*login => this.login_ = login,
                error =>  this.errorMessage = <any>error*/
            );
    }

    login_app(cedula, password){
        this.getHeroes(cedula.value, password.value);
    }

    signup_app(){
        this.router.navigate(['/signup']);
    }

    goTo(source){
        let link = ['/' + source];
        this.router.navigate(link);

    }
}