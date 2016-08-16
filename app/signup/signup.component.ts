import {OnInit, Component} from "@angular/core";
import {SignUpService} from "./signup.service";
import {Login} from "../login";
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Jsonp, URLSearchParams } from '@angular/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import { FormBuilder, Validators, Control, ControlGroup} from '@angular/common';


/**
 * Created by juannoguera on 4/07/16.
 */

@Component({
    selector: 'hero-list',
    templateUrl: './app/signup/signup.html',
    styleUrls: ['./app/assets/css/bootstrap.css', './app/signup/css/signup.css'],
    directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
    providers: [ SignUpService ]
})

export class SignUpComponent {
    
    errorMessage: string;
    login_: Login;
    log : Login;
    mode = 'Observable';

    constructor (private signUpService: SignUpService, public router: Router) {}

    // ngOnInit() {
    //     this.getHeroes();
    // }

    signup(user_id, name, email, password) {
        this.signUpService.signUp(user_id, name, email, password)
            .subscribe(
                response => {
                    this.router.navigate(['/login']);
                    this.login_ = response;
                    alert(response.message);
                },
                error => {
                    alert(error.text());
                    console.log(error.text());
                }
                /*login => this.login_ = login,
                error =>  this.errorMessage = <any>error*/
            );
    }

    signup_app(user_id, name, email, password){
        if(user_id.value.length != 0 && name.value.length != 0 && email.value.length !=0
            && password.value.length != 0){
            this.signup(user_id.value, name.value, email.value, password.value);
        }else{
            alert('Tdodo los campos son necesarios');
        }
    }

    cancel(){
        this.router.navigate(['/login']);
    }

    goTo(source){
        let link = ['/' + source];
        this.router.navigate(link);

    }
}